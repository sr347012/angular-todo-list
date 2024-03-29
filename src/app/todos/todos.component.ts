import { Component, OnInit } from '@angular/core';
// import { ConsoleReporter } from 'jasmine';
import { TodoServiceService } from './../service/todo-service.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
jsonData :any[] = [];
// Pagination parameters.
p: number = 1;
count: number = 5;
// jsonDats = [  {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// },
// {
//   "userId": 1,
//   "id": 2,
//   "title": "quis ut nam facilis et officia qui",
//   "completed": false
// }]

  constructor(public todoService:TodoServiceService) {
  
   }

   ngOnInit(): void {
    this.todoService.getTodos().subscribe(data=>
    { 
      this.jsonData = data;
      // if (this.jsonData.length > 0) console.log(this.jsonData);  
    
    });

  }
  seeDetail(id:number) {
    // e.preventDefault();
    console.log('Helo',id);
    // this.router.navigate(['/'])
  }
}
