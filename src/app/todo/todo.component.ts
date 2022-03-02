import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActivatedRouteSnapshot } from '@angular/router';
import { TodoServiceService } from '../service/todo-service.service';
@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  constructor( private route: ActivatedRoute, private todoService:TodoServiceService) {
    this.route.params.subscribe(data => {this.dataId = data.id;
      if (this.dataId) this.todoService.getTodo(this.dataId).subscribe(dat => 
        {
          if(dat) this.dataDet = dat;
        });   
    }
  );
   }
  dataId:number = 0;
  dataDet:any ={};

  ngOnInit(): void {
    console.log(this.dataId);
   
    console.log(this.dataDet);

  }

}
