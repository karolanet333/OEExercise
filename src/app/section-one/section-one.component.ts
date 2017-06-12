import { CounterComponent } from './../shared/counter/counter.component';
import { LiveClass } from './../model/live-class';
import { Observable } from 'rxjs/Rx';
import { Subscription } from 'rxjs/Subscription';
import { StudyBundleReturn } from './../model/studybundle-return';
import { StudyBundleService } from './../services/studyBundle.service';
import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, Renderer, QueryList } from '@angular/core';

@Component({
  selector: 'oe-section-one',
  templateUrl: './section-one.component.html',
  styleUrls: ['./section-one.component.css']
})
export class SectionOneComponent implements OnInit, OnDestroy {

  private subscrip: Subscription;
  lessons: StudyBundleReturn;
  @ViewChildren('counter') counters:QueryList<CounterComponent>;

  constructor(private studyBundleService: StudyBundleService, private rd: Renderer) { }

  ngOnInit() {
    this.subscrip = this.studyBundleService.getJSON().subscribe(data => {
      this.lessons = data;
    });
  }

  ngOnDestroy(){
    if (this.subscrip) this.subscrip.unsubscribe();
  }

  resetTime(lesson: LiveClass, i: number){
    //as the exercise says: start again when press play
    lesson.startDate = lesson.initialStartDate;
    var countersAny: any = this.counters;
    if(countersAny && countersAny._results){
      countersAny._results[i].resetTime();
    }
    //this.rd.invokeElementMethod(this.el.nativeElement,'resetTime');
  }
}
