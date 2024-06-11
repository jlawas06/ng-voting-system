import { createFeatureSelector } from '@ngrx/store';
import * as fromShared from './shared.reducer';

export const selectSharedState = createFeatureSelector<fromShared.SharedState>(
  fromShared.sharedFeatureKey
);

export const { selectIsLoading, selectLoadingMessage } =
  fromShared.sharedFeature;
