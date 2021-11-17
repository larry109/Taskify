import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SocialAuthService, GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Router } from '@angular/router';

@Component({
  selector: 'app-googlelogin',
  templateUrl: './googlelogin.component.html',
  styleUrls: ['./googlelogin.component.scss']
})
export class GoogleloginComponent implements OnInit {

  reactiveForm: FormGroup;
  user: SocialUser;
  isSignedin: boolean;  
  constructor(private fb: FormBuilder, private socialAuthService: SocialAuthService, private router: Router) { }

  ngOnInit() {
    this.reactiveForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });    
    
    this.socialAuthService.authState.subscribe((user) => {
      this.user = user;
      this.isSignedin = (user != null);
      console.log(this.user);
    });
  }

  googleSignin(): void {
    this.socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
    .then(() => this.router.navigate(['taskify']))
  }
  

  logout(): void {
    this.socialAuthService.signOut(true);
  }

}
