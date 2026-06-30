import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iusers } from 'src/app/models/users';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users-dashboard',
  templateUrl: './users-dashboard.component.html',
  styleUrls: ['./users-dashboard.component.scss']
})
export class UsersDashboardComponent implements OnInit {
usersArr:Array<Iusers>=[]
  constructor(
    private _usersservice:UsersService,
    private _snackbar:SnackbarService,
    private _router:Router
  ) { }

  ngOnInit(): void {
 this.getUsers()
  }

  getUsers(){
    this._usersservice.fetchuserdata()
    .subscribe({
      next:data=>{
        this.usersArr=data
        this._router.navigate(['/users',this.usersArr[0].userId])
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}