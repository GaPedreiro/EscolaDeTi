import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

export class AuthForm extends FormGroup {
  constructor() {
    super({
      username: new FormControl(''),
      password: new FormControl(''),
    })
  }
}

@Component({
  selector: 'escola-de-ti-root',
  template: `
    <form [formGroup]="form" (submit)="onSubmit()">
      <label>
        <input type="text" formControlName="username" >
      </label>
      <label>
        <input type="password" formControlName="password" >
      </label>

      <button>Login</button>
    </form>
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  httpClient = inject(HttpClient)

  form = new AuthForm()

  onSubmit() {
    this.httpClient
      .post('/api/auth/login', this.form.value)
      .subscribe(console.log)
  }
}
