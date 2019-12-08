import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { compareValidator } from '../shared/compare-validators.directive';
import { ToastrService } from 'ngx-toastr'
import { Router } from '@angular/router';

@Component({
    selector: 'signup-comp',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
    providers: [SignupService]
})

export class SignupComponent{

    SC: FormGroup
    submitted: false
    constructor(private sc1: SignupService, private toastr: ToastrService, private _router: Router){
        this.SC= new FormGroup({
            Id: new FormControl(0),
            FirmName: new FormControl('', Validators.required),
            OwnerName: new FormControl('', Validators.required),
            Contact: new FormControl('', [Validators.required, Validators.pattern('^[7-9][0-9]{9}$')]),
            Email: new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]{1,40}[@]{1}[a-z]{1,10}[.]{1}[a-z]{3}')]),
            Password: new FormControl('',[Validators.required,Validators.pattern('^([a-zA-Z0-9@*#]{8,15})$')]),
            ConfirmPassword: new FormControl('', [Validators.required, compareValidator('Password')]),
            Pincode: new FormControl('', [Validators.required, Validators.pattern('^[1-9][0-9][0-9][0-9][0-9][0-9]$')]),
            Address: new FormControl('', Validators.required)
        })
    }

    get Password() {
        return this.SC.get('Password');
    }
    get ConfirmPassword() {
        return this.SC.get('ConfirmPassword');
    }

    SCSignup: any

    public SignupUser(data: any){
        console.log(JSON.stringify(data));
 //alert(JSON.stringify(data))

        this.sc1.SignupUser(data).subscribe(
            res=>{
                this.SCSignup=res
                if(this.SCSignup === "Record Updated Successfully"){
                    this.toastr.warning("User has alresdy signed up with this number", "Warning..!!")
                    this._router.navigate(['signup'])
                }else{
                    this.toastr.success("User has Successfully signed up..!!")
                }
            },
            err=>{this.SCSignup=err});
            //alert(JSON.stringify(this.SCSignup))
    }
    // Contactnew: any
    // public ContactRepeat(data: any){
    //     console.log(JSON.stringify(data));
    //     this.sc1.RepeatContact(data).subscribe(
    //         res=>{
    //             this.Contactnew=res
    //             if(this.Contactnew==="false"){
    //                 this.SignupUser(data)
    //             }
    //             else{
    //                 this.toastr.warning("User has already Signed Up with this number", "Warning..!!")
    //             }
    //         },
    //         err=>{
    //             this.Contactnew=err
    //         }
        // )
    }
