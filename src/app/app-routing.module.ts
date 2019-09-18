import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsappComponent } from './newsapp/newsapp.component';
import { NewscontentComponent } from './newscontent/newscontent.component';


const routes: Routes = [
  {path:'',component:NewsappComponent},
  {path:'news',component:NewscontentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
