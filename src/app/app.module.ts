import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProfileComponent} from './dashboard/profile/profile.component';
import {PostComponent} from './dashboard/post/post.component';
import {LoginComponent} from './login/login.component';
import {NotFoundComponent} from './shared/not-found/not-found.component';
import {CommentComponent} from './dashboard/comment/comment.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ListComponent} from './dashboard/list/list.component';
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {HomeComponent} from './dashboard/home/home.component';
import {FormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {HeaderComponent} from './shared/header/header.component';
import {MatIconModule} from "@angular/material/icon";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ProfileComponent,
    PostComponent,
    LoginComponent,
    NotFoundComponent,
    CommentComponent,
    ListComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    FormsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
