import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
album=[]
content
mat:any


  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.content=JSON.parse(localStorage.getItem('rock'))
    this.http.get("https://jsonplaceholder.typicode.com/photos").subscribe(data=>{
      console.log(data);
      this.mat=data;
      
  })
  
  setTimeout(()=>{
    this.comment()
  },5000);
 


}
comment(){
  for(var i=0;i<this.mat.length;i++){
    if(this.content.userId==this.mat[i].albumId){
      this.album.push(this.mat[i])
    }
  }
  console.log(this.album)
}
data(a){
  localStorage.setItem("get",JSON.stringify(a))
  this.router.navigateByUrl("show")
}


}
