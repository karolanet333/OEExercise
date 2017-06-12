
import { StudyBundleReturn } from './../model/studybundle-return';
import { JsonReaderService } from './json-reader.service';
import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class StudyBundleService{

    private jsonFile: string;

    constructor(private jsonReaderService:JsonReaderService) {
         this.jsonFile = './assets/data/studybundle.json';
    }

    public getJSON(): Observable<StudyBundleReturn> {
         
         return this.jsonReaderService.getJSON(this.jsonFile)
            .map((res:any) => StudyBundleReturn.fromJson(res));

     }
}