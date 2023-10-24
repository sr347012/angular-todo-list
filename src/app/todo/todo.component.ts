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

  userNameArray = [
    'Sachin Tendulkar',
    'Saurabh Ganguly',
    'Virendar Sehwag',
    'Rahul Dravid',
    'Yuvraj Singh',
    'Mohammad Kaif',
    'Mahendra Singh Dhoni',
    'RP Singh',
    'Munaf Patel',
    'Jasprit bumrah',
    'Ravichandran Ashwin'
  ]

  username : string | undefined;
  userId = 0;
  constructor( private route: ActivatedRoute, private todoService:TodoServiceService) {
    this.route.params.subscribe(data => {this.dataId = data.id;


      if (this.dataId) this.todoService.getTodo(this.dataId).subscribe(dat => 
        {
          if(dat) {
            this.dataDet = dat;
            this.userId = dat.userId;
            this.username= this.userNameArray[this.userId];
          };
        });   
    }
  );
   }
  dataId:number = 0;
  dataDet:any ={};

  ngOnInit(): void {
    console.log(this.dataId, this.userId, this.username);

    
    console.log(this.dataDet);



  }

}
