import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginService } from 'src/app/app-services/user-login.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  loginForm!: FormGroup;
  loginErrorMsg: string = '';
  

  constructor(private formBuilder: FormBuilder, private router: Router, 
    private loginService: UserLoginService) { 
    // this.loginForm = formBuilder.group({
    //   username: new FormControl(),
    //   password: new FormControl()
    // });

    this.loginForm = formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]]
    });
    }

  loginSubmit(){
    this.loginService.GetLoginData(this.loginForm.value.username, this.loginForm.value.password).subscribe(s => {
      localStorage.setItem("login", JSON.stringify(s));
      if(this.loginService.ValidaeUser()){
        this.router.navigateByUrl('/home/dashboard');
      }
      else{
        this.loginErrorMsg = "Invalid username or password!";
      }
    }, error => {
      this.loginErrorMsg = "Invalid username or password!";
    });
  }

  ngOnInit(): void {
    
  }

  get getPageControls(){
    return this.loginForm.controls;
  }

}
