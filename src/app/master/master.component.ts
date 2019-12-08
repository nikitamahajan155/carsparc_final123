import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }
 removedata(){
   localStorage.removeItem('Contact'),
   localStorage.removeItem('key')
 }
  ngOnInit() {
    
  }

}
