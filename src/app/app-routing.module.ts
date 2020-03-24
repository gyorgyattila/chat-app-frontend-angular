import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './home';
import { LoginComponent } from './shared/layout/login/login.component';
import { RegistrationComponent } from './shared/layout/registration/registration.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { ChatBoxLayoutComponent } from './chatbox';
import { ChatMessagesLayoutComponent } from './chatbox/chat-box-layout/chat-messages-layout/chat-messages-layout.component';

const routes: Routes = [
  {path: '', component: MainLayoutComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'registration', component: RegistrationComponent},
  { path: 'room', component: MainLayoutComponent, canActivate: [AuthGuard], children: [
    {
      path: ':id',
      component: ChatMessagesLayoutComponent,
      canActivate: [AuthGuard]
    }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
