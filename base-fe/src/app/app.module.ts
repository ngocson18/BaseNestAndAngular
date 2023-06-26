import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserComponent } from './pages/user/user.component';
import { RouterModule } from '@angular/router';
import { GroupComponent } from './pages/group/group.component';
import { ContentComponent } from './pages/content/content.component';
import { AngularSplitModule } from 'angular-split';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    GroupComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularSplitModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      // { path: '/', component: AppComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
