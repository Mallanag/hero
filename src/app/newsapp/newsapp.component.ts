import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newsapp',
  templateUrl: './newsapp.component.html',
  styleUrls: ['./newsapp.component.css']
})
export class NewsappComponent implements OnInit {
public api
ids=[];
public ar=[];
  constructor( public http:HttpClient ,public router:Router) { }

  ngOnInit() {
  
  this.http.get('https://jvapi.peelpress.com/news').subscribe(data => {
    console.log(data)
    this.api = data['news']
    for (var i = 0; i < this.api.length; i++) {
      this.ids.push(this.api[i]._id)
    }
    console.log(this.api, this.ids)
  })
  setTimeout(() => {
​
​
    for (var j = 0; j < this.ids.length; j++) {
      this.http.get('https://jvapi.peelpress.com/news/' + this.ids[j]).subscribe(data => {
        console.log(data)
        this.ar.push(data['news'])
        console.log(this.ar)
      })
    }
  }, 2000);


}
tonextPage(data) {
console.log('11', data)
localStorage.setItem('newsData', JSON.stringify(data))
this.router.navigate(['news'])
}

}
