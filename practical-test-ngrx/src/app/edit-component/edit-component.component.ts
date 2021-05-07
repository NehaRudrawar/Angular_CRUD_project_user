import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../user.service';
import {FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {
  userId:any;
  user: any;
  editForm: FormGroup
  constructor(
    private _Activatedroute:ActivatedRoute,
    private userService: UserService,
    private router:Router,
    private activeParams: ActivatedRoute,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
      this.activeParams.params.subscribe((params) => {
			this.userId = params.id;
      let users=this.userService.getUsers();
      this.user=users.find(p => p.id==this.userId);
      console.log(this.user);
      })

    this.createForm();
    if(this.user){
      this.editForm.patchValue({
        id: this.user.id,
        firstName: this.user.firstName,
        lastName: this.user.lastName,
        email: this.user.email,
        advertisingMonthlyBudget: this.user.advertisingMonthlyBudget,
        phoneNumber: this.user.phoneNumber
        
      });
    }

  }
  createForm() {
    this.editForm = this.formBuilder.group({
      id: [''],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email:  ['', [Validators.required,  Validators.email]],
      advertisingMonthlyBudget:  ['', Validators.required],
      phoneNumber: ['',[ Validators.required, Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]]
    });
  }

  onSubmit() {
    if (this.editForm.value) {
      console.log(this.editForm.value)
      this.userService.updateuser(this.user,this.editForm.value);
      this.router.navigate(['user-list']);
    }

  }

}
