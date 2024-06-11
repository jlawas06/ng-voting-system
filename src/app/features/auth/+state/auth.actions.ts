import { createActionGroup, emptyProps, props } from '@ngrx/store';

export const fromAuthActions = createActionGroup({
  source: 'Auth',
  events: {
    'Login': props<{ username: string, password: string }>(),
    'Login Success': props<{ data: any }>(),
    'Login Failure': emptyProps(),
  },
});
