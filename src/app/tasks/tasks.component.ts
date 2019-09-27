import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
task
  constructor(public http:HttpClient) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/todos").subscribe(data=>{
      console.log(data);
      this.task=data;

    })

  }


}
