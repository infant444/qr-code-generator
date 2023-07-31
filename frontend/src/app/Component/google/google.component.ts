import { Component, OnInit } from '@angular/core';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "@abacritt/angularx-social-login";
import { User } from 'src/app/data/user/userinfo';
@Component({
  selector: 'app-google',
  templateUrl: './google.component.html',
  styleUrls: ['./google.component.css']
})
export class GoogleComponent implements OnInit {

  user!: any;

  accessToken!: string;
  constructor(private authService: SocialAuthService) { }

  ngOnInit(): void {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      console.log(user);
      const userinfo: User = {
        provider:this.user.provider,
        email:this.user.email,
        name:this.user.name,
        photoUrl:this.user.photoUrl,
        firstName:this.user.firstName,
        lastName:this.user.firstName,
        idToken:this.user.idToken,

      };
      console.log(userinfo);

    })
  }
  signup() {
    this.authService.signOut();
  }
}

