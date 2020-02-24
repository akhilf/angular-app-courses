import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `<h2> {{title}} </h2>
              <div *ngFor="let course of courses">
                <app-course [courseTitle]="course"></app-course>
              </div>`
})

export class CoursesCompoent {
  title = "List of courses";
  courses

  constructor (service: CoursesService) {
     this.courses = service.getCourses();
  }
  getTitle() {
    return this.title;
  }

}
