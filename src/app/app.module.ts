import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { LoginComponent } from './pages/login/login.component';
import { CsLoginComponent } from './components/cs-login/cs-login.component';
import { CsRegisterComponent } from './components/cs-register/cs-register.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { CsToolbarComponent } from './components/cs-toolbar/cs-toolbar.component';
import { CsNewTodoComponent } from './components/cs-new-todo/cs-new-todo.component';
import { CsSpinnerComponent } from './components/cs-spinner/cs-spinner.component';
import { AuthGuard } from './guards/AuthGuard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CsLoginComponent,
    CsRegisterComponent,
    RegisterComponent,
    HomeComponent,
    CsToolbarComponent,
    CsNewTodoComponent,
    CsSpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    MatToolbarModule,
    MatCheckboxModule,
    MatProgressSpinnerModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
