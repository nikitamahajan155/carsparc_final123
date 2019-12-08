import { Component, OnInit } from '@angular/core';
import { AllrecordService } from './allrecords.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'allrecord-app',
    templateUrl: './allrecords.component.html',
    styleUrls: ['./allrecords.component.css'],
    providers: [AllrecordService]
})

export class AllrecordComponent implements OnInit {
    AL: any
    constructor(private a1: AllrecordService) {
        this.AL = new FormGroup({
            Id: new FormControl(),
            FirmName: new FormControl()
        })
    }

    public AllInfo: any

    public GetAllInfo() {

        this.a1.AllRecords().subscribe(
            res => { this.AllInfo = res },
            err => { this.AllInfo = err }

        )
        //alert(JSON.stringify(this.AllInfo))

    }
    ngOnInit() {
        this.GetAllInfo()
    }
    public InfoByName: any
    public FirmName: string
    public GetByName() {
        this.FirmName = this.AL.value.FirmName;
        this.a1.GetRecordsByName(this.FirmName).subscribe(res => {
            // this.InfoByName = res
            this.AllInfo = res
            //alert(JSON.stringify(this.InfoById))
        }, err => {
            this.InfoByName = err
        });
        this.AllInfo = this.InfoByName

    }
}