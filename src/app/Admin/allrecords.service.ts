import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()

export class AllrecordService{
    constructor (private http: HttpClient){}
    public AllRecords(){
        let url='https://localhost:44374/api/allsignuprecords';
        return this.http.get(url)  
    }

    public GetRecordsByName(FirmName: any){
        
       let url='https://localhost:44374/api/getbynameadmin/find/allow/find1/';
         return this.http.get(url +FirmName)
     
    }
}