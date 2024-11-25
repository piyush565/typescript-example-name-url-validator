import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateUrl } from './shared/url.validator';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      websiteUrl: ['', [Validators.required, ValidateUrl]],
    });
  }

  saveForm(form: FormGroup) {
    console.log('Valid?', form.valid);
    console.log('Username', form.value.userName);
    console.log('Website URL', form.value.websiteUrl);
  }
}
