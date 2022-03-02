import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  constructor(private http: HttpClient) { }

  getTodos(): Observable<any>  {
    // return fetch('https://jsonplaceholder.typicode.com/todos')
    // .then(response => response.json())
    // .then(json => console.log(json)); 
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');  
  }
  
  getTodo(id:any) : Observable<any> {
    // return fetch('https://jsonplaceholder.typicode.com/todos/'+`${id}`)
    // .then(response => response.json())
    // .then(json => console.log(json))  
    console.log('https://jsonplaceholder.typicode.com/todos/'+`${id}`);
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/'+`${id}`); 
  }
}
