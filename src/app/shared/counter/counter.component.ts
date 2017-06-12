import { Subscription } from 'rxjs/Subscription';
import { Component, Input, OnDestroy } from '@angular/core';
import {Observable} from 'rxjs/Rx';
declare var $:any;

@Component({
  selector: 'oe-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnDestroy {

    //@Input() eventDate: Date;
    private eventDate: Date;

    private diff: number;
    private countDownResult: number;
    private days: number = 0;
    private hours: number = 0;
    private minutes: number = 0;
    private seconds: number = 0;

    private subscrip: Subscription;

    constructor() {

        //a minute ago
        this.resetTime();
        this.subscrip = Observable.interval(1000).map((x) => {
                this.setDiff();
            }).subscribe((x) => {           
                this.setTime();
            });
    }

    ngOnDestroy(){
        if (this.subscrip) this.subscrip.unsubscribe();
    }

    resetTime(){
        this.eventDate = new Date( (new Date()).getTime() + 1000 * 60 );
    }

    setDiff(){
        var localDiff = Math.floor((this.eventDate.getTime() - new Date().getTime()) / 1000);
        if(localDiff >= 0)
            this.diff = localDiff;
    }

    setTime(){
        this.days = this.getDays(this.diff);
        this.hours = this.getHours(this.diff);
        this.minutes = this.getMinutes(this.diff);
        this.seconds = this.getSeconds(this.diff);
    }

    getDays(t){
        var days;
        days = Math.floor(t / 86400);

        return days;
    }

    getHours(t){
        var days, hours;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;

        return hours;
    }

    getMinutes(t){
        var days, hours, minutes;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;

        return minutes;
    }

    getSeconds(t){
        var days, hours, minutes, seconds;
        days = Math.floor(t / 86400);
        t -= days * 86400;
        hours = Math.floor(t / 3600) % 24;
        t -= hours * 3600;
        minutes = Math.floor(t / 60) % 60;
        t -= minutes * 60;
        seconds = t % 60;

        return seconds;
    }
}
