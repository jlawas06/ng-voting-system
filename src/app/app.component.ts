import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { fromSharedActions, fromSharedSelectors } from './shared/+state';

@Component({
  selector: 'nvs-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLoading$ = this.store.select(fromSharedSelectors.selectIsLoading);
  loadingMessage$ = this.store.select(fromSharedSelectors.selectLoadingMessage);

  constructor(private store: Store) {
    this.store.dispatch(
      fromSharedActions.setLoadingMessage({ message: 'Loading...' })
    );
  }
}
