import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './Component/header/header.component';
import { HomeComponent } from './Component/home/home.component';
import { QrscannerComponent } from './Component/qrscanner/qrscanner.component';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { QRCodeModule } from 'angularx-qrcode';
import { QrcodeComponent } from './Component/qrcode/qrcode.component';
import { FormsModule, NgModel } from '@angular/forms';
import { NgxQrcodeStylingModule } from 'ngx-qrcode-styling';
import { TextComponent } from './Component/text/text.component';
import { TagComponent } from './Component/tag/tag.component';
import {MatIconModule} from '@angular/material/icon';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LodingComponent } from './Component/loding/loding.component';
import { ClipboardModule } from '@angular/cdk/clipboard';


import { SocialLoginModule,SocialAuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider, GoogleSigninButtonModule } from '@abacritt/angularx-social-login';
import { SigninComponent } from './Component/signin/signin.component';
import { GoogleComponent } from './Component/google/google.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QrscannerComponent,
    QrcodeComponent,
    TextComponent,
    TagComponent,
    LodingComponent,
    SigninComponent,
    GoogleComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    NgxScannerQrcodeModule,
    QRCodeModule,
    FormsModule,
    NgxQrcodeStylingModule,
    MatIconModule,
    MatSlideToggleModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      timeOut:4000,
      positionClass:'toast-top-right',
    }),
    ClipboardModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
  ],
  providers: [
    {
      provide:'SocialAuthServiceConfig',
      useValue:{
        autoLogin:false,
        providers:[
          {
            id:GoogleLoginProvider.PROVIDER_ID,
            provider:new GoogleLoginProvider('793559241455-pobvf4fh2fhg8vfs5qhhjeclleogu11h.apps.googleusercontent.com')
          },
          {
            id:FacebookLoginProvider.PROVIDER_ID,
            provider:new FacebookLoginProvider('989543382181381')
          }

        ],
        onError: (err)=>{
          console.error(err);
        }
      }as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
