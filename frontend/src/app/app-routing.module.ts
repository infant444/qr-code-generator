import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { QrscannerComponent } from './Component/qrscanner/qrscanner.component';
import { SigninComponent } from './Component/signin/signin.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"qrscanner",component:QrscannerComponent},
  {path:"signin",component:SigninComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
