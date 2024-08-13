import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTypographyModule } from 'ng-zorro-antd/typography';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AppService } from './app.service';

describe('AppComponent', () => {
  let service: AppService;
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      RouterTestingModule,
      BrowserModule,
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      NzLayoutModule,
      NzMenuModule,
      NzAvatarModule,
      NzGridModule,
      NzTypographyModule,
      NzInputModule,
      NzMessageModule
    ],
    declarations: [
      AppComponent
    ],
    providers: []
  }));

  beforeEach(() => {
    service = TestBed.inject(AppService)
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'zorro'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('zorro');
  });
  
  it('should set the current menu and title in the AppService', () => {
    const menuName = 'Home';
    // service.setCurrentMenu(menuName);
    expect(service.currentMenu).toBe(menuName);
    expect(service.title).toBe(menuName);
  });


});
