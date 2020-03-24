import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-chatroom-dialog',
  templateUrl: './chatroom-dialog.component.html',
  styleUrls: ['./chatroom-dialog.component.scss']
})
export class ChatroomDialogComponent implements OnInit {

  roomForm: FormGroup;
  passwordRequired = false;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ChatroomDialogComponent>,
      @Inject(MAT_DIALOG_DATA) data) {
  }

  ngOnInit() {
      this.roomForm = this.fb.group({
          name: ['', Validators.required],
          type: ['', Validators.required],
          password: ''
      });
      this.onChanges();
  }

  onChanges() {
    this.roomForm.get('type').valueChanges.subscribe(val => {
      if (val === 'private') {
        this.passwordRequired = true;
        this.roomForm.get('password').setValidators([Validators.required]);
      } else {
        this.passwordRequired = false;
        this.roomForm.get('password').disable();
      }
    });
  }

  save() {
    if (this.roomForm.dirty && this.roomForm.valid) {
      this.dialogRef.close(this.roomForm.value);
    }
  }

  close() {
      this.dialogRef.close();
  }

}
