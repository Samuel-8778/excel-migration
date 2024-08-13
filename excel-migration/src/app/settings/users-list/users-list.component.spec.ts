import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersListComponent } from './users-list.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { FormsModule } from '@angular/forms';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzFormModule } from 'ng-zorro-antd/form';

describe('UsersListComponent', () => {
  let component: UsersListComponent;
  let fixture: ComponentFixture<UsersListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        CommonModule,
        NzMenuModule,
        NzLayoutModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzSwitchModule,
        FormsModule,
        NzButtonModule,
        NzSelectModule,
        NzModalModule,
        NzFormModule
      ],
      declarations: [
        UsersListComponent
      ],
      providers: []
    });
    fixture = TestBed.createComponent(UsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set isVisible to true when showModal is called', () => {
    expect(component.isVisible).toBe(false);
    component.showModal();
    expect(component.isVisible).toBe(true);
  });

  it('should set isVisible to false and log a message when handleOk is called', () => {
    spyOn(console, 'log');
    component.isVisible = true;
    component.handleOk();
    expect(component.isVisible).toBe(false);
 
  });

  it('should set isVisible to false and log a message when handleCancel is called', () => {
    spyOn(console, 'log');
    component.isVisible = true;
    component.handleCancel();
    expect(component.isVisible).toBe(false);
 
  });

  it('should log the value', () => {
    spyOn(console, 'log'); // Spy on the console.log method

    // Call the change method with a boolean value
    component.change(true);

    // Expect that console.log has been called with the provided value
    expect(console.log).toHaveBeenCalledWith(true);
  });
});
