import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, AbstractControl} from '@angular/forms';
import { CustomValidation } from './customvalidation'; 
import { ControlGroup} from '@angular/common';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form';


 userForm: FormGroup;

 constructor(private _formBuilder:FormBuilder){

// MODEL DRIVEN FORM WITH FORM BUILDER


   this.userForm= this._formBuilder.group({ 
     uname:['',Validators.compose([Validators.required, CustomValidation.underscore, usernameValidation])],
     passwordfields: this._formBuilder.group ({
        pass:['', passvalidator],
        cpass:['',Validators.compose([Validators.required])],
     }, {validator: matchingPasswords('pass', 'cpass')}
     ),
     name:[null, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
     email:[null,[Validators.pattern('^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$'),Validators.required]],
     address:this._formBuilder.group({
       street:['',Validators.required],
       city:['', Validators.required],
       postalcode:[null, [Validators.pattern('^[1-9][0-9]{4}$'),Validators.required]]
     })
    })
  
 }


//MODEL DRIVEN FORM WITHOUT FORM BUILDER

// userForm= new FormGroup({
//   name: new FormControl('fahad', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
//   email: new FormControl(),
//   address: new FormGroup({
//     street: new FormControl(),
//     city: new FormControl(),
//     postalcode: new FormControl(null, Validators.pattern('^[1-9][0-9]{4}$')) 
//    })
// }); 

onSubmit(){
  console.log(this.userForm.value);
  
  
  
}

    
  }

  function usernameValidation(control : FormControl) : { [s: string] : boolean } {    // custom validation function for username
 if ( ! control.value.match( /^[A-Z]/)) {
 return {invalidUname: true};
 }
 }


 function passvalidator(control: FormControl):{ [s: string] : boolean }{                          // custom validation function for password
   if ( ! control.value.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/ )){
     return {invalidPassword: true}
   }
 }


function matchingPasswords(passwordKey: string, confirmPasswordKey:string) {                // custom validation function for password and confirm password
  return (group: FormGroup): {[key: string]: any} => {
    let password = group.controls[passwordKey];
    let confirmPassword = group.controls[confirmPasswordKey];

    if (password.value !== confirmPassword.value) {
      return {mismatchedPasswords: true}
    }
  }
}
