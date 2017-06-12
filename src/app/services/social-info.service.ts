import { SocialInfo } from './../model/social-info';
import { JsonReaderService } from './json-reader.service';
import { Component, Input } from '@angular/core';
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class SocialInfoService{

    private jsonFile: string;

    constructor(private jsonReaderService:JsonReaderService) {
         this.jsonFile = './assets/data/socialinfo.json';
    }

    public getJSON(): Observable<SocialInfo> {
         
         return this.jsonReaderService.getJSON(this.jsonFile)
            .map((res:any) => SocialInfo.fromJson(res));

     }
}