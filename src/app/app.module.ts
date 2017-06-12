import { StudyBundleService } from './services/studyBundle.service';
import { SocialInfoService } from './services/social-info.service';
import { JsonReaderService } from './services/json-reader.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { SectionOneComponent } from './section-one/section-one.component';
import { SectionCommentComponent } from './section-comment/section-comment.component';
import { FooterComponent } from './footer/footer.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component';
import { ChatComponent } from './chat/chat.component';
import { LikesComponent } from './shared/likes/likes.component';
import { CounterComponent } from './shared/counter/counter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    SectionOneComponent,
    SectionCommentComponent,
    FooterComponent,
    ToolBarComponent,
    ChatComponent,
    LikesComponent,
    CounterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    JsonReaderService,
    SocialInfoService,
    StudyBundleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
