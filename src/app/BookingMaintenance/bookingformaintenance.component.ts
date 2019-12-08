import { Component, OnInit, Output } from '@angular/core';
import { Router, Route, NavigationStart, NavigationExtras } from '@angular/router';
import { BookingForMaintenanceService } from './bookingformaintenance.service';
import { ToastrService } from 'ngx-toastr';
import { EventEmitter } from 'events';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-bookingformaintenance',
  templateUrl: './bookingformaintenance.component.html',
  styleUrls: ['./bookingformaintenance.component.css'],
  providers: [BookingForMaintenanceService]
})
export class BookingformaintenanceComponent implements OnInit {


  public bookingMaintInfo: any
  CB: FormGroup
  constructor(private router: Router, private BM1: BookingForMaintenanceService, private toastr: ToastrService) {

    this.CB = new FormGroup({
      Nearest_Booking_Id: new FormControl()
    })

    const navigation = this.router.getCurrentNavigation();
    const bookingMaintInfo = navigation.extras.state
    let tempBookingData = navigation.extras;
    this.bookingMaintInfo = tempBookingData[0];
    console.log('=============>' + JSON.stringify(this.bookingMaintInfo))
  }

  public ConfirmOrder: any

  ngOnInit() {

  }
  public ConfirmedBookings(data: any) {
    console.log(JSON.stringify(data));
    const constData = {
      Nearest_Booking_Id: this.bookingMaintInfo.Nearest_Booking_Id,
      Confirmed: true
    }
    this.BM1.ConfirmedBookings(constData).subscribe(
      res => {
        this.ConfirmOrder = res
        if (this.ConfirmOrder && this.ConfirmOrder.Nearest_Booking_Id > 0 && this.ConfirmOrder.Confirmed === "true") {
          // this.ConfirmOrder = 1;
          this.toastr.success("Order Confirmed..!!", "Success")
        }
        else {
          this.toastr.error("Not Valid")
        }
      },
      err => {
        this.ConfirmOrder = err
      }
    )
  }

  toaster() {
    this.toastr.success("Booking Confirmed...!!")
  }
}


  //this.BM= console.log(JSON.parse(this.bookingMaintInfo))
  //console.log(this.BM)




