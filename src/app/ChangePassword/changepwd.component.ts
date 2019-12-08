import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ChangepwdService } from './changepwd.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { compareValidator } from '../shared/compare-validators.directive';
import { changepwdRoute } from './changepwd.module';

@Component({
    selector: 'changepwd-comp',
    templateUrl: './changepwd.component.html',
    styleUrls: ['./changepwd.component.css'],
    providers: [ChangepwdService]
})

export class ChangepwdComponent {

    Changepwd: any
    constructor(private CP: ChangepwdService, private _router: Router, private toastr: ToastrService) {
        this.Changepwd = new FormGroup({
            Contact: new FormControl(localStorage.getItem('Contact')),
            Password: new FormControl(),
            NewPassword: new FormControl('', [Validators.required, Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
            ConfirmPassword: new FormControl('', [Validators.required, compareValidator('NewPassword')])
        })
    }

    public PasswordDetails: any;
    public OldPassword(Password: any) {
        console.log(JSON.stringify(Password))

        this.CP.OldPassword(Password).subscribe(res => {
            this.PasswordDetails = res;
            // let pwd = localStorage.getItem('key')
            // if (pwd === this.Changepwd.value.Password) {
            //this.toastr.success("Valid Password")

            if (this.PasswordDetails === "true") {
                this.ChangePassword(Password);
            }
            else {
                this.toastr.error("Wrong Password Entered..!!")
            }
        },
            err => { this.PasswordDetails = err })
    }


    public ChangeToNew: any;
    public ChangePassword(Contact: any) {
        console.log(JSON.stringify(Contact))
        this.CP.OldToNewPassword(Contact).subscribe(res => {
            this.ChangeToNew = res;
            if (res && (res !== '' || res !== null)) {
                this.toastr.success("Password Updated Successfully!!", "Success")
            } else {
                this.toastr.error("Enter Valid Credentials...!!", "Error"   )
            }
        }, err => {
            this.ChangeToNew = err
        })

    }
    get NewPassword() {
        return this.Changepwd.get('NewPassword');
    }
    get ConfirmPassword() {
        return this.Changepwd.get('ConfirmPassword');
    }

}

