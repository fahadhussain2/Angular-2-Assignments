import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { AngularFireModule, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';
import { FirebaseAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userForm: FormGroup;
  sign_in:boolean=false;

  constructor(private af:AngularFire, private route:Router, private _formBuilder:FormBuilder) {

    this.userForm= this._formBuilder.group({ 
     email:[null,[Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{4,13}$'),Validators.required]],
     password:['',passvalidator]
    })
  }

  signIn(){
    
    const emailid=this.userForm.value.email;
    const pass= this.userForm.value.password;

    const promise= this.af.auth.login(
      {email: emailid , password: pass},
      {provider: AuthProviders.Password, method: AuthMethods.Password}
    ).then((res) => {
      alert ("Sign in successful");
      this.route.navigate(['alladds']);
    },(err)=>{
      alert (err);
    })
    
  }

  navigate(){
    this.route.navigate(['signup']);
  }


  ngOnInit() {
  }

}

 function passvalidator(control: FormControl):{ [s: string] : boolean }{                          // custom validation function for password
   if ( ! control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ )){
     return {invalidPassword: true}
   }
 }
