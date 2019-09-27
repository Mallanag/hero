import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
post
  constructor(private http:HttpClient ,private router:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/posts").subscribe(data=>{
      console.log(data);
      this.post=data;
      

  })
}
  get(a){
    localStorage.setItem('post', JSON.stringify(a))
    
    this.router.navigateByUrl("add")
     

  }

  

}
