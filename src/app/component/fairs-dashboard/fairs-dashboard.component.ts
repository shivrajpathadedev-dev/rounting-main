import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IFairs } from 'src/app/models/fairs';
import { FairsService } from 'src/app/services/fairs.service';

@Component({
  selector: 'app-fairs-dashboard',
  templateUrl: './fairs-dashboard.component.html',
  styleUrls: ['./fairs-dashboard.component.scss']
})
export class FairsDashboardComponent implements OnInit {
fairsArr:Array<IFairs>=[]
  constructor(
    private _fairsService:FairsService,
    private _router:Router
  ) { }

  ngOnInit(): void {
    this.getFairsArr()
  }
    getFairsArr() {
    this._fairsService.fetchFairsArr()
      .subscribe({
        next: resp => {
          this.fairsArr = resp;
          this._router.navigate(['fairs',resp[0].fairId])
        },
        error: err => {
          console.log(err.msg);
        }
      })
  }

}
