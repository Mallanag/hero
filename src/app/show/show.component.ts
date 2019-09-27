import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  getphoto: any;

  constructor() { }

  ngOnInit() {
    this.getphoto=JSON.parse(localStorage.getItem('get'))
  }

}
