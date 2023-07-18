import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { QrscannerComponent } from './Component/qrscanner/qrscanner.component';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"qrscanner",component:QrscannerComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
