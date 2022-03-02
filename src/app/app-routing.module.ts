import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodosComponent } from './todos/todos.component';

const routes: Routes = [{
  path:'todos', component: TodosComponent
},
{
  path:'todos/:id', component: TodoComponent
},
{
  path:'',component : TodosComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
