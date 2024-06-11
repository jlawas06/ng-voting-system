import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { fromAuthActions } from '../../+state';

@Component({
  selector: 'nvs-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SigninComponent {
  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private store: Store) {}

  onSignin() {
    if (this.loginForm.invalid) return;
    const { username, password } = this.loginForm.value as {
      username: string;
      password: string;
    };
    this.store.dispatch(fromAuthActions.login({ username, password }));
    this.loginForm.reset();
  }
}
