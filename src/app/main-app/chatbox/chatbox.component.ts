import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-chatbox',
  templateUrl: './chatbox.component.html',
  styleUrls: ['./chatbox.component.scss']
})
export class ChatboxComponent implements OnInit {
  @ViewChild('chatList') chatList;

  constructor() { }

  ngOnInit() {
    console.log(this.chatList);
    setTimeout(() => {
      this.chatList.directiveRef.scrollToBottom();      
    });
  }

}
