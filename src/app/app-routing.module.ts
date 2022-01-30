import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./login/_guard/auth.guard";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {PostComponent} from "./dashboard/post/post.component";
import {ProfileComponent} from "./dashboard/profile/profile.component";
import {LoginComponent} from "./login/login.component";
import {NotFoundComponent} from "./shared/not-found/not-found.component";
import {ListComponent} from "./dashboard/list/list.component";
import {HomeComponent} from "./dashboard/home/home.component";

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children: [
      {path: '', component: HomeComponent},
      {path: 'post', component: ListComponent, canActivate: [AuthGuard]},
      {path: 'post/:id', component: PostComponent, canActivate: [AuthGuard]},
      {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]}
    ]
  },
  {path: 'login', component: LoginComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
