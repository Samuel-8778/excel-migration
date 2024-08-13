import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketsComponent } from './tickets.component';
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

describe('TicketsComponent', () => {
  let component: TicketsComponent;
  let fixture: ComponentFixture<TicketsComponent>;

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
        NzFormModule,
      ],
      declarations: [
        TicketsComponent
      ],
      providers: []
    });
    fixture = TestBed.createComponent(TicketsComponent);
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


  it('should have four columns with correct properties', () => { 
    // Arrange 
    const expectedColumns = [ 
      { 
        name: 'Full Name', 
        sortOrder: null, 
        sortFn: jasmine.any(Function), 
        sortDirections: ['ascend', 'descend', null], 
        filterMultiple: false, 
        listOfFilter: [], 
        filterFn: null 
      }, 
      { 
        name: 'Username (Login)', 
        sortOrder: 'descend', sortFn: jasmine.any(Function), sortDirections: ['descend', null], filterMultiple: false, listOfFilter: [], filterFn: null },
      { 
        name: 'Access Profile', 
        sortOrder: null, 
        sortDirections: ['ascend', 'descend', null], 
        sortFn: jasmine.any(Function), 
        filterMultiple: false, 
        listOfFilter: [ { text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' } ], 
        filterFn: jasmine.any(Function) 
      }, 
      { 
        name: 'Status', 
        sortOrder: null, 
        sortDirections: ['ascend', 'descend', null], 
        sortFn: jasmine.any(Function), 
        filterMultiple: false, 
        listOfFilter: [ { text: 'London', value: 'London' }, { text: 'Sidney', value: 'Sidney' } ], 
        filterFn: jasmine.any(Function) } 
    ];

    // Act 
    const actualColumns = component.listOfColumns;
    
    // Assert 
    expect(actualColumns).toEqual(expectedColumns); 
  });


  
});
