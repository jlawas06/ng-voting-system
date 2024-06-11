import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TOKEN_KEY } from '@app/constants/token.constants';
import { JwtModule } from '@auth0/angular-jwt';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem(TOKEN_KEY);
        },
        // allowedDomains: ['example.com'], // specify your domain here
        // disallowedRoutes: ['example.com/example-route'], // specify routes that should not include the JWT token
      },
    }),
  ],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule) {
    if (core) {
      throw new Error('You should import core module only in the root module');
    }
  }
}
