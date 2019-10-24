import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-space-dialog',
  templateUrl: './space-dialog.component.html',
  styleUrls: ['./space-dialog.component.scss']
})
export class SpaceDialogComponent implements OnInit {
  formGroup: FormGroup;
  constructor(
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<any>,
  ) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
      id: [''],
      title: ['', Validators.required],
      price: ['', Validators.required],
      space_amount: ['', Validators.required],
      space_image: ['', Validators.required],
    })
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

}
