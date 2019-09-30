import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {
public dat
  constructor() { } 

  ngOnInit() {
    this.dat=JSON.parse(localStorage.getItem('newsData'))
    console.log(this.dat)
  }

}
