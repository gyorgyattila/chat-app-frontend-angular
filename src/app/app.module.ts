import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule, AuthGuard, ChatroomDialogComponent } from './shared';
import { CoreModule } from './core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialsModule } from './materials';
import { HomeModule } from './home';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './core/service/interceptor/http-error.interceptor';
import { AuthInterceptor } from './core/service/interceptor/auth-interceptor';


const config: SocketIoConfig = { url: 'http://localhost:3000', options: {} };


@NgModule({
  declarations: [
    AppComponent
    ],
  imports: [
    BrowserModule,
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    MaterialsModule,
    AppRoutingModule,
    HomeModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    } ,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ChatroomDialogComponent]
})
export class AppModule { }
