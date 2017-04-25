import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  declarations: [],
  providers: []
})
export class CoreModule {
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
