import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
const routes: Routes = [
  {path: '',  redirectTo: 'user-list' ,pathMatch: 'full'},
  {path:'user-list', component:UserListComponent},
  {path:'add-user', component:AddUserComponent},
  {path:'edit-user/:id', component:EditComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
