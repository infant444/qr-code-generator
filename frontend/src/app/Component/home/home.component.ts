import { GoogleSigninButtonModule, SocialAuthService } from '@abacritt/angularx-social-login';
import { Component,OnInit} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  user!:any;
  constructor(private authService:SocialAuthService){}
  ngOnInit(): void {
    this.authService.authState.subscribe((user)=>{
      this.user=user;
      console.log(user);
      console.log()

    })
    // this.authService.signIn
  }
}
