import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class BookingForMaintenanceService{
    constructor (private http: HttpClient){}

    public Nearest_Booking_Id: number;
    public BookingConfirm(Nearest_Booking_Id: Number){
         let url="https://localhost:44374/api/deletebyidbooking/find/allow/display/show/"
         return this.http.delete(url+Nearest_Booking_Id)
    }

    public ConfirmedBookings(data: any){
        let url="https://localhost:44374/Api/DeleteByIdBooking/find/show/display/get/allow/put"
        return this.http.put(url, data)
    }
}