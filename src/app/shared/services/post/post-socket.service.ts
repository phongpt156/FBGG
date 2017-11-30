import { Injectable, OnInit } from '@angular/core';
import { Socket } from './../../constants/constants';
import { Subscription } from 'rxjs/Subscription';

import { AuthService } from '../auth/auth.service';
import { UserService } from '../user/user.service';

@Injectable()
export class PostSocketService implements OnInit {
  constructor(
    private authSerice: AuthService,
    private userService: UserService
  ) { }

  ngOnInit() {
  }

  add(post) {
    Socket.emit('user_send_post_new', post);
  }

  consumeEvenOnAdd() {
    Socket.on('new_post', data => {
      const user = this.userService.getUser();

      if (data.user_id == user._id) {
        this.userService.addPostedDocument(data);
      }
      console.log(data);
    });
  }
}
