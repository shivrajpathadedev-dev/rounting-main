import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { IFairs } from 'src/app/models/fairs';
import { FairsService } from 'src/app/services/fairs.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@Component({
  selector: 'app-fairs-details',
  templateUrl: './fairs-details.component.html',
  styleUrls: ['./fairs-details.component.scss']
})
export class FairsDetailsComponent implements OnInit {
fairsObj!:IFairs;
fairsId!:string;
  constructor(
    private _routes:ActivatedRoute,
    private _fairsService:FairsService,
    private _snackbar:SnackbarService
  ) { }

  ngOnInit(): void {
     this._routes.params.subscribe((param: Params) => {
      this.fairsId = param['id'];
      if (this.fairsId) {
        this._fairsService.fetchFairById(this.fairsId)
          .subscribe({
            next: res => {
              this.fairsObj = res;
              this._snackbar.openSuccessSnackbar(res.fairName)
            },
            error: err => {
              this._snackbar.openErrorSnackbar(err.msg);
            }
          })
      }
    })
  }

}
