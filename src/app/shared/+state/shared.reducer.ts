import { createFeature, createReducer, on } from '@ngrx/store';
import { fromSharedActions } from './shared.actions';

export const sharedFeatureKey = 'shared';

export interface SharedState {
  isLoading: boolean;
  loadingMessage: string;
}

export const initialState: SharedState = {
  isLoading: false,
  loadingMessage: '',
};

export const reducer = createReducer(
  initialState,
  on(fromSharedActions.setLoadingState, (state, { isLoading }) => ({
    ...state,
    isLoading,
  })),
  on(fromSharedActions.setLoadingMessage, (state, { message }) => ({
    ...state,
    loadingMessage: message,
  }))
);

export const sharedFeature = createFeature({
  name: sharedFeatureKey,
  reducer,
});
