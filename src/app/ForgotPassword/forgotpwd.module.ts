import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ForgotpwdComponent } from './forgotpwd.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

export const forgotpwdRoute: Routes=[
    {path: '', redirectTo: 'forgotpwd', pathMatch:'full'},
    { path: 'forgotpwd', component: ForgotpwdComponent}
]

@NgModule({
    declarations:[ForgotpwdComponent],
    imports:[RouterModule.forChild(forgotpwdRoute), CommonModule, FormsModule],
    providers: [],
    exports: [ForgotpwdComponent]
})

export class ForgotpwdModule{

}