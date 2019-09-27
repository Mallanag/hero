import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsappComponent } from './newsapp/newsapp.component';
import { NewscontentComponent } from './newscontent/newscontent.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { DashComponent } from './dash/dash.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TasksComponent } from './tasks/tasks.component';
import { PostsComponent } from './posts/posts.component';
import { PhotoComponent } from './photo/photo.component';
import { AddComponent } from './add/add.component';
import { AlbumComponent } from './album/album.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsappComponent,
    NewscontentComponent,
    LoginComponent,
    DashComponent,
    TasksComponent,
    PostsComponent,
    PhotoComponent,
    AddComponent,
    AlbumComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
