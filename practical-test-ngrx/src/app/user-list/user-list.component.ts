import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import * as UserActions from './../actions/user.action'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userList;
  constructor(
    private userService: UserService,
    private router: Router,
    private store : Store<AppState>
  ) { }

  ngOnInit(): void {
    this.userList = this.userService.getUsers();
    console.log(this.userList);
  }
  editUser(id){
    this.router.navigateByUrl('/edit-user/'+ id);
  }
  deleteUser(userId) {
    // For UI to remove 
    for(let i = 0; i < this.userList.length; i++) {
      if(this.userList[i].id == userId) {
        this.userList.splice(i, 1);
      }
    }
    // Remove from local storage
    this.userService.deleteUserFromService(userId);
  }
  
  addUser(){
    this.router.navigate(['add-user']);
  }
}
