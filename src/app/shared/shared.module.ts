import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatCardModule, 
  MatFormFieldModule, MatInputModule, MatDialogModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { RegistrationComponent } from './layout/registration/registration.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticationService } from '../core/service/auth-service';
import { ChatroomDialogComponent } from './layout/chatroom-dialog/chatroom-dialog.component';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [HeaderComponent, LoginComponent, RegistrationComponent, ChatroomDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDialogModule,
    MatSelectModule
  ],
  exports: [
    HeaderComponent,
    CommonModule,
    RouterModule
  ],
  providers: [
    AuthenticationService
  ]
})
export class SharedModule { }
