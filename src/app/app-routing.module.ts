import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsappComponent } from './newsapp/newsapp.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { PhotoComponent } from './photo/photo.component';
import { AddComponent } from './add/add.component';
import { AlbumComponent } from './album/album.component';
import { ShowComponent } from './show/show.component';


const routes: Routes = [

  {path:'',component:LoginComponent},
  {path:'photo',component:AlbumComponent},
  {path:'show',component:ShowComponent},
  {path:'add',component:AddComponent},
  {path:'dash',component:DashComponent},
  {path:'task',component:TasksComponent},
  {path:'post',component:PostsComponent},
  {path:'album',component:PhotoComponent},
  {path:'new',component:NewsappComponent},
  {path:'news',component:NewscontentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
