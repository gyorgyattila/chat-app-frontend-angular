import { NgModule, Optional, SkipSelf } from '@angular/core';
import { SidenavService } from './service/sidenav-service';
import { ChatroomService } from './service/chatroom-service';
import { HttpClientModule} from '@angular/common/http';
import { AuthenticationService } from './service/auth-service';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    SidenavService,
    ChatroomService,
    AuthenticationService
  ],
  declarations: []
})
export class CoreModule {

  constructor(@Optional() @SkipSelf() core: CoreModule ) {
    if (core) {
        throw new Error('You should import core module only in the root module');
    }
  }
}
