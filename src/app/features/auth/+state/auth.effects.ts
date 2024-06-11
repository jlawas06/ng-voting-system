import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthStorageService } from '@app/core/services/auth-storage.service';
import { UsersService } from '@app/data';
import { fromSharedActions } from '@app/shared/+state';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';
import { fromAuthActions } from './auth.actions';

@Injectable()
export class AuthEffects {
  login$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(fromAuthActions.login),
        tap(() => {
          this.store.dispatch(
            fromSharedActions.setLoadingMessage({ message: 'Logging in...' })
          );
          this.store.dispatch(
            fromSharedActions.setLoadingState({ isLoading: true })
          );
        }),
        exhaustMap(({ username, password }) => {
          return this.userService
            .login({
              body: { username, password },
            })
            .pipe(
              map((response) => {
                if (response.token !== null)
                  this.authStorage.saveToken(response.token);
                this.toastr.success('Login Successfully');
                this.router.navigate(['']);
                return fromAuthActions.loginSuccess({ data: response.token });
              }),
              catchError((err) => {
                console.log(err);
                return of(fromAuthActions.loginFailure())
              })
            );
        }),
        tap(() => {
          this.store.dispatch(
            fromSharedActions.setLoadingState({ isLoading: false })
          );
        }),
      );
    },
    { useEffectsErrorHandler: false, dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private userService: UsersService,
    private toastr: ToastrService,
    private router: Router,
    private authStorage: AuthStorageService
  ) {}
}
