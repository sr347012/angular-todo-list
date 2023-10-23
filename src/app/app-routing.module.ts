import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [{
  path:'todos', component: TodosComponent
},
{
  path:'todos/:id', component: TodoComponent
},
{
  path:'',component : HomeComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
