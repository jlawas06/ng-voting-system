import { createActionGroup, props } from '@ngrx/store';

export const fromSharedActions = createActionGroup({
  source: 'Shared',
  events: {
    'Set Loading Message': props<{ message: string }>(),
    'Set Loading State': props<{ isLoading: boolean }>(),
  },
});
