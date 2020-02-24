import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesCompoent } from './courses.compoent';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';


@NgModule({
  declarations: [
    AppComponent,
    CoursesCompoent,
    CourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
