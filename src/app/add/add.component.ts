import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
dat
mat:any
com=[]
  constructor(private http:HttpClient) { }

  
  ngOnInit() {
    this.dat=JSON.parse(localStorage.getItem('post'))
    console.log(this.dat)
    this.http.get("https://jsonplaceholder.typicode.com/comments").subscribe(data=>{
      console.log(data);
      this.mat=data

  })
    setTimeout(()=>{
      this.comment()
    },5000);
   


  }
  comment(){
    for(var i=0;i<this.mat.length;i++){
      if(this.dat.userId==this.mat[i].postId){
        this.com.push(this.mat[i])
      }
    }
    console.log(this.com)
  }

}
