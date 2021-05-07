import { Injectable } from '@angular/core';
import { Init } from './user-init'

@Injectable({
  providedIn: 'root'
})
export class UserService extends Init {

  constructor() { 
    super();
    console.log('User service Works');
    this.load();
  }

  getUsers() {
    let user = JSON.parse(localStorage.getItem('users'));
    return user;
  }

  deleteUserFromService(id){
    let user = JSON.parse(localStorage.getItem('users'));
     for(let i = 0; i <user.length; i++) {
      if(user[i].id == id) {
        user.splice(i, 1);
      }
    }
    localStorage.setItem('users', JSON.stringify(user));
  }

  addUser(newUser){
    let usersList = JSON.parse(localStorage.getItem('users'));
      usersList.push(newUser);
      localStorage.setItem('users', JSON.stringify(usersList));
  }
  updateuser(oldUser, updatedUser){
    let user = JSON.parse(localStorage.getItem('users'));
    for(let i = 0; i <user.length; i++) {
      if(user[i].id == oldUser.id) {
        user[i] = updatedUser;
      }
    }
      localStorage.setItem('users', JSON.stringify(user));
  }
}
