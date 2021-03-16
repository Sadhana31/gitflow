import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsepipeComponent } from './usepipe/usepipe.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import {Routes,RouterModule} from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { CoursesComponent } from './courses/courses.component'
import { CourseDetailComponent } from './course-detail/course-detail.component';

const ROUTES:Routes=[
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'about',
    component:AboutComponent
  },
  {
    path:'blog',
    component:BlogComponent

  },
  {
    path:'courses',
    component:CoursesComponent

  },
  {
    path:'courses/:id',
    component:CourseDetailComponent

  },
  {
    path:'blo',
    redirectTo:'/blog',
    pathMatch:'prefix'
  },
  {
    path:'**',
    component:ErrorComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    UsepipeComponent,
    HomeComponent,
    AboutComponent,
    BlogComponent,
    ErrorComponent,
    CoursesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
