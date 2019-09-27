import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
tit:FormGroup;
  constructor( public http:HttpClient ,private router:Router) {
    this.tit=new FormGroup({
      email: new FormControl(''),
      password:new FormControl('')
    })
   }

  ngOnInit() {
  }
save(a){
  console.log(a);
  let body={
    email:a.email,
    password:a.password
  }
   this.http.post("https://reqres.in/api/register",body).subscribe(data=>{
     console.log(data)
     this.router.navigateByUrl("dash");
   })
}
}
