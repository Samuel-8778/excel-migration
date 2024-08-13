import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersComponent } from './users.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        UsersRoutingModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzSwitchModule,
        FormsModule,
        NzButtonModule
      ],
      declarations: [
        UsersComponent
      ],
      providers: []
    });
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log the value', () => {
    spyOn(console, 'log'); // Spy on the console.log method

    // Call the change method with a boolean value
    component.change(true);

    // Expect that console.log has been called with the provided value
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
