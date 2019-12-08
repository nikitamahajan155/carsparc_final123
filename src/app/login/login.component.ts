import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    providers: [LoginService]
})

export class LoginComponent implements OnInit {
    Varlogin: FormGroup
    constructor(private LC: LoginService, private _router: Router, private toastr: ToastrService) {
        this.Varlogin = new FormGroup({
            Contact: new FormControl('', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
            Password: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),

        })
    }

    loginDetails: any

    public LoginCredentials(data: any) {

        console.log(JSON.stringify(data));
        // alert(JSON.stringify(data))

        this.LC.LoginCredentials(data).subscribe(res => {
            this.loginDetails = res
            console.log(res);
            if (this.loginDetails === "Login Successfully") {
                localStorage.setItem('Contact', this.Varlogin.value.Contact)
                localStorage.setItem('key',this.Varlogin.value.Password)
                this._router.navigate(['/master/home'])//;
            }
            else {
                this._router.navigate(['']);
                //alert('Not a valid user')
                this.toastr.error("Invalid User")

            }
        },
            err => {
                console.log(err);
                this.loginDetails = err
            });
    }
    ngOnInit() {

    }
    // showToaster(){
    //     this.toastr.success("Hello, I'm the toastr message.")
    // }
}




