import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.css']
})
export class AlbumComponent implements OnInit {
album
  constructor(private http:HttpClient, private router:Router) { }

  ngOnInit() {
    this.http.get("https://jsonplaceholder.typicode.com/albums").subscribe(data=>{
      console.log(data);
      this.album=data;
  })
  }
  do(a){
    localStorage.setItem('rock', JSON.stringify(a))
    
    this.router.navigateByUrl("album")
  }

}
