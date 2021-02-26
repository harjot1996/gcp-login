import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginOneComponent } from './login-one/login-one.component';

const routes: Routes = [
  { path: 'one', component: LoginOneComponent },
  { path: '',   redirectTo: '/one', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
