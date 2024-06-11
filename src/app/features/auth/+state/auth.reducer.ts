import { createFeature, createReducer, on } from '@ngrx/store';
import { fromAuthActions } from './auth.actions';

export const authFeatureKey = 'auth';

export interface AuthState {}

export const initialState: AuthState = {};

export const reducer = createReducer(
  initialState,
  on(fromAuthActions.loginSuccess, (state) => state)
);

export const authFeature = createFeature({
  name: authFeatureKey,
  reducer,
});
