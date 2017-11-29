import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

import { TopicService } from './../../../../shared/services/topic/topic.service';

@Component({
  selector: 'app-create-post-dialog',
  templateUrl: './create-post-dialog.component.html',
  styleUrls: ['./create-post-dialog.component.scss']
})
export class CreatePostDialogComponent implements OnInit {
  createPostForm: FormGroup;
  topics: any[] = [];

  constructor(
    public dialog: MatDialogRef<CreatePostDialogComponent>,
    private _fb: FormBuilder,
    private topicService: TopicService
  ) { }

  ngOnInit() {
    this.createPostForm = this._fb.group({
      title: ['', Validators.required],
      description: [''],
      documentLink: ['', Validators.required],
      referDocuments: this._fb.array([this.initReferDocument()]),
      topics: [[]]
    });
    this.topics = [
      { id: 1, name: 'Option 1' },
      { id: 2, name: 'Option 2' },
    ];

    this.topicService.getAll()
    .subscribe(res => {
      console.log(res);
    });
  }

  initReferDocument() {
    return this._fb.group({
      link: ['', Validators.required]
    });
  }

  addReferDocument() {
    const control = <FormArray>this.createPostForm.controls['referDocuments'];
    control.push(this.initReferDocument());
    console.log(control);
  }

  removeReferDocument(i: number) {
    const control = <FormArray>this.createPostForm.controls['referDocuments'];
    control.removeAt(i);
  }

  topicChange(e) {
    console.log(e);
  }

  onSubmit() {
    console.log(this.createPostForm.controls.topics);
  }
}
