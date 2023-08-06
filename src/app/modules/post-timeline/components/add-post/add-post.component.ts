import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/core/entities/post.interface';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'],
})
export class AddPostComponent implements OnInit {
  formGroup: FormGroup;
  @Output() onAddPost = new EventEmitter();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      message: ['', [Validators.required, Validators.maxLength(140)]],
    });
  }

  savePost(): void {
    const newPost = {
      message: this.formGroup.get('message')?.value,
      date: new Date(),
    } as Post;

    this.onAddPost.emit(newPost);
    this.formGroup.reset();
  }
}
