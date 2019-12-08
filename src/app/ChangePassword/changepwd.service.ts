import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class ChangepwdService{
constructor(private http: HttpClient){}

    // public result: any
    // public getPassword(Contact: any){
    //     let url="https://localhost:44374/api/GetByContactEdit/find/allow/";
    //     this.result = this.http.get(url+Contact);
    //     return this.http.get(url+Contact)
    
    // }

    public OldPassword(Password: any){
        let url='https://localhost:44374/api/oldPassword';
        return this.http.post(url, Password)
    }

    public OldToNewPassword(Contact: any){
        let url="https://localhost:44374/api/ChangeToNewPassword";
        return this.http.put(url, Contact)
    }
  
}