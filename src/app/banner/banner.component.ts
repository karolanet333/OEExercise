import { Subscription } from 'rxjs/Subscription';
import { SocialInfo } from './../model/social-info';
import { Observable } from 'rxjs/Rx';
import { SocialInfoService } from './../services/social-info.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'oe-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit, OnDestroy {

  socialInfo: SocialInfo;
  
  private subscrip: Subscription;

  constructor(private socialInfoService: SocialInfoService) { }

  ngOnInit() {
      this.subscrip = this.socialInfoService.getJSON().subscribe((data: SocialInfo) => {
        return this.socialInfo = data;
      });
  }

  ngOnDestroy(){
    if(this.subscrip) this.subscrip.unsubscribe();
  }

}
