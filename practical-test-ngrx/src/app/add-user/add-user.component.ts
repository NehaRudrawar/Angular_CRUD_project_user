import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './../app.state';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import * as UserAction from './../actions/user.action'
import {FormBuilder,  FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  users: any;
  addForm: FormGroup;
  constructor(
    private userService: UserService,
    private router: Router,
    private formBuilder: FormBuilder,
    private store : Store<AppState>) { }
  ngOnInit(): void {
    this.users = this.userService.getUsers();
    console.log(this.users.length);
    // const 
   this.createForm();
  }

  createForm(){
    const phoneNumber = "/^\d{10}$/";
    this.addForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      
     
      email:  ['', [Validators.required,  Validators.email]],
      advertisingMonthlyBudget:  ['', Validators.required],
      phoneNumber: ['',[ Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }
  onSubmit(){

    let newUser = {
      id:this.users.length + 1,
      firstName: this.addForm.value.firstName,
      lastName: this.addForm.value.lastName,
      email: this.addForm.value.email,
      advertisingMonthlyBudget:this.addForm.value.advertisingMonthlyBudget,
      phoneNumber:this.addForm.value.phoneNumber
    }
    this.store.dispatch(new UserAction.AddUser({id:newUser.id,firstName:newUser.firstName,lastName:newUser.lastName
      , email:newUser.email, advertisingMonthlyBudget:newUser.advertisingMonthlyBudget, phoneNumber:newUser.phoneNumber}))
      alert("added successfully");
    this.users.push(newUser);
    this.userService.addUser(newUser);
    this.router.navigate(['user-list']);
  }
}
