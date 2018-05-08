import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppMainComponent } from './app-main/app-main.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {FormsModule} from '@angular/forms';
import {OxfordComponent} from './shared/oxford.component';
import {SingleScaleComponent} from './shared/singleScale.component';
import {ProgressBarComponent} from './shared/progressBar.component';
import { RouterModule, Routes} from '@angular/router';
import { SliderComponent } from './app-main/slider/slider.component';
import {UICarouselModule} from 'ui-carousel';
import {InterestingPublishComponent} from './shared/InterestingPublishComponent';
import {AboutComponent} from './shared/aboutComponent';

const appRoutes: Routes = [
  {path: '', component: AppMainComponent},
  {path: 'test', component: OxfordComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'interestingPublish', component: InterestingPublishComponent},
  {path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    AppMainComponent,
    AppFooterComponent,
    OxfordComponent,
    SingleScaleComponent,
    ProgressBarComponent,
    SliderComponent,
    InterestingPublishComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxChartsModule,
    RouterModule.forRoot(appRoutes),
    UICarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
