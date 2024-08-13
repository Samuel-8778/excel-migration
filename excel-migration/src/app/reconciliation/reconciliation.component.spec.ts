import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReconciliationComponent } from './reconciliation.component';
import { ReconciliationService } from './reconciliation.service';
import { of, throwError } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPopconfirmModule } from 'ng-zorro-antd/popconfirm';
import { NzMessageModule, NzMessageService } from 'ng-zorro-antd/message';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('ReconciliationComponent', () => {
  let component: ReconciliationComponent;
  let fixture: ComponentFixture<ReconciliationComponent>;
  let service: ReconciliationService;
  let httpClient: HttpClientTestingModule;
  let nzMessageService: NzMessageService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [
         HttpClientTestingModule,
        NzFormModule,
        NzMenuModule,
        NzLayoutModule,
        NzInputModule,
        NzTableModule,
        NzDropDownModule,
        NzSwitchModule,
        FormsModule,
        NzIconModule,
        NzButtonModule,
        NzSelectModule,
        NzModalModule,
        NzFormModule,
        NzPopconfirmModule,
        NzMessageModule,
        NgSelectModule,
        BrowserAnimationsModule,
        FormsModule, ReactiveFormsModule,
      ],
      declarations: [ ReconciliationComponent ],
      providers: [ ReconciliationService, NzMessageService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReconciliationComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ReconciliationService);
    httpClient = TestBed.inject(HttpClient);
    nzMessageService = TestBed.inject(NzMessageService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  //cancel nzmessage
  it('should call nzMessageService.info with the expected message', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    
    component.cancel();

    expect(nzMessageService.info).toHaveBeenCalledWith('click cancel');
  });

  // confirm delete
  it('should call nzMessageService.info with the expected message and Delete with the correct id', () => {
    spyOn(nzMessageService, 'info'); // Spy on the nzMessageService.info method
    spyOn(component, 'Delete'); // Spy on the Delete method
    const data = { id: 1 };

    component.confirmDelete(data);

    expect(nzMessageService.info).toHaveBeenCalledWith('click confirm');
    expect(component.Delete).toHaveBeenCalledWith(data.id);
  });

   //show modal
  it('should set isVisibleCreate to true', () => {
    component.showModal();

    expect(component.isVisibleCreate).toBe(true);
  });
  //handleok
  it('should set handle ok isVisibleCreate and isVisibleUpdate to true', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleOk();

     
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });
  //handle cancel
  it('should set handlecancel isVisibleCreate and isVisibleUpdate to false', () => {
    spyOn(console, 'log'); // Spy  on the console.log method
    
    component.handleCancel();

 
    expect(component.isVisibleCreate).toBe(false);
    expect(component.isVisibleUpdate).toBe(false);
  });






  // post create apps 
  it('should call PostAllreconciliationValues and reset reconciliation properties', () => {
    // Create a spy for the Create method of the service
    spyOn(service, 'PostAllreconciliationValues').and.returnValue(of({}));
  
    // Set values for reconciliation properties
    component.reconciliation.reconstart = 'reconstart Name';
    component.reconciliation.reconend = 'reconend Name';
    component.reconciliation.file_one = 'file_one Name';
    component.reconciliation.file_two = 'file_two Name';
    component.reconciliation.result_message = 'result_message Name';
    component.reconciliation.discrepencies = 'discrepencies Name';
    component.discrepancy.discid = 'discid Name';
    component.discrepancy.message = 'message Name';
    component.discrepancy.type = 'type Name';
    component.statement.reconid = 'reconid Name';
    component.statement.type = 'type Name';
    component.statement.transactiondate = 'transactiondate Name';
    component.statement.details = 'details Name';
    component.statement.debit = 'debit Name';
    component.statement.credit = 'credit Name';
    component.statement.balance = 'balance Name';
    component.statement.ismatch = 'ismatch Name';
    component.statement.matchid = 'matchid Name';

    // Call the Create method
    component.Create();

    // Expect the PostAllreconciliationValues method to have been called with the reconciliation object
    expect(service.PostAllreconciliationValues).toHaveBeenCalledWith(component.reconciliationdiscrepancystatement);

    // Expect the reconciliation properties to be reset
    expect(component.reconciliation.reconstart).toBe('');
    expect(component.reconciliation.reconend).toBe('');
    expect(component.reconciliation.file_one).toBe('');
    expect(component.reconciliation.file_two).toBe('');
    expect(component.reconciliation.result_message).toBe('');
    expect(component.reconciliation.discrepencies).toBe('');
    expect(component.discrepancy.discid).toBe('');
    expect(component.discrepancy.message).toBe('');
    expect(component.discrepancy.type).toBe('');
    expect(component.statement.reconid).toBe('');
    expect(component.statement.type).toBe('');
    expect(component.statement.transactiondate).toBe('');
    expect(component.statement.details).toBe('');
    expect(component.statement.debit).toBe('');
    expect(component.statement.credit).toBe('');
    expect(component.statement.balance).toBe('');
    expect(component.statement.ismatch).toBe('');
    expect(component.statement.matchid).toBe('');

  });
  it('should log error on update PostAllreconciliationValues failure', () => {
    const error = new Error('PostAllreconciliationValues failed');
    spyOn(service, 'PostAllreconciliationValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Create();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // get all discrepancyGetAlls
  it('should fetch and assign the data from discrepancyGetAllValues discrepancyService', () => {
    const dummyData = [{ 
      _id: 1, 
      reconstart: 'reconstart 1',
      reconend: 'reconend 1',
      file_one: 'file_one 1',
      file_two: 'file_two 1',
      result_message: 'result_message 1',
      discrepencies: 'discrepencies 1',
      discid: 'discid 1',
      message: 'message 1',
      type: 'type 1',
      reconid: 'reconid 1',
      type: 'type 1',
      transactiondate: 'transactiondate 1',
      details: 'details 1',
      debit: 'debit 1',
      credit: 'credit 1',
      balance: 'balance 1',
      ismatch: 'ismatch 1',
      matchid: 'matchid 1',
    }]; // Replace with dummy data

    spyOn(service, 'GetAlldiscrepancyValues').and.returnValue(of(dummyData)); 

    component.discrepancyGetAllValues();

    expect(service.GetAlldiscrepancyValues).toHaveBeenCalled();
    expect(component.discrepancyitemArray).toEqual(dummyData);
  });
  it('should log error on update discrepancyGetAllValues failure', () => {
    const error = new Error('discrepancyGetAllValues failed');
    spyOn(service, 'GetAlldiscrepancyValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.discrepancyGetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });


  // GetAllValues all test case 
  it('should set the rowData property on successful response', () => {
    const mockData:any = [{ 
      _id: 1, 
      reconstart: 'reconstart 1',
      reconend: 'reconend 1',
      file_one: 'file_one 1',
      file_two: 'file_two 1',
      result_message: 'result_message 1',
      discrepencies: 'discrepencies 1',
      discid: 'discid 1',
      message: 'message 1',
      type: 'type 1',
      reconid: 'reconid 1',
      type: 'type 1',
      transactiondate: 'transactiondate 1',
      details: 'details 1',
      debit: 'debit 1',
      credit: 'credit 1',
      balance: 'balance 1',
      ismatch: 'ismatch 1',
      matchid: 'matchid 1',
    }];
    spyOn(service, 'GetAllreconciliationValues').and.returnValue(of(mockData));

    component.GetAllValues();

    expect(service.GetAllreconciliationValues).toHaveBeenCalled();
    expect(component.listOfData).toEqual(mockData);
  });
  it('should log error on update GetAllValues failure', () => {
    const error = new Error('GetAllValues failed');
    spyOn(service, 'GetAllreconciliationValues').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.GetAllValues();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });



  //update
  it('should clear UpdatereconciliationComponent reconciliation properties on successful update', () => {
    spyOn(service, 'Updatereconciliation').and.returnValue(of({}));

    component.Update();

    expect(component.reconciliation.reconstart).toBe('');
    expect(component.reconciliation.reconend).toBe('');
    expect(component.reconciliation.file_one).toBe('');
    expect(component.reconciliation.file_two).toBe('');
    expect(component.reconciliation.result_message).toBe('');
    expect(component.reconciliation.discrepencies).toBe('');
    expect(component.discrepancy.discid).toBe('');
    expect(component.discrepancy.message).toBe('');
    expect(component.discrepancy.type).toBe('');
    expect(component.statement.reconid).toBe('');
    expect(component.statement.type).toBe('');
    expect(component.statement.transactiondate).toBe('');
    expect(component.statement.details).toBe('');
    expect(component.statement.debit).toBe('');
    expect(component.statement.credit).toBe('');
    expect(component.statement.balance).toBe('');
    expect(component.statement.ismatch).toBe('');
    expect(component.statement.matchid).toBe('');
  });

  it('should log error on update failure', () => {
    const error = new Error('Update failed');
    spyOn(service, 'Updatereconciliation').and.returnValue(throwError(() => {
      return error;
    }));
    spyOn(console, 'log');

    component.Update();

    expect(console.log).toHaveBeenCalledWith('Error', error);
  });

  // delete the entity
  it('should call DeletereconciliationValues and call GetAllValues on success', (() => {
    const deleteId = 123;
    const mockData:any = { 
      _id: 1, 
      name: 'test 1',
    };
    const deletereconciliationValuesSpy = spyOn(service, 'DeletereconciliationValues').and.returnValue(of(mockData));
    const gpGetAllValuesSpy = spyOn(component, 'GetAllValues');
    
    component.Delete(deleteId);
  

    expect(deletereconciliationValuesSpy).toHaveBeenCalledWith(deleteId);
    expect(gpGetAllValuesSpy).toHaveBeenCalled();
  }));

  it('should log error on failure', (() => {
    const deleteId = 123;
    const error = new Error('Some error');
    spyOn(console, 'log');
    spyOn(service, 'DeletereconciliationValues').and.returnValue(throwError(error));

    component.Delete(deleteId);
 
    expect(console.log).toHaveBeenCalledWith('Error', error);
  }));

  




  // fixed search method
  it('should filter listOfData when search length is greater than or equal to 2', () => {

    const targetValue:any[] =
    component.listOfData = [{ 
    }];

    component.search('Jo');

    expect(component.listOfData).toEqual([{ 
    }]);

  });

  it('should call GetAllValues when search length is less than 2', () => {
    spyOn(component, 'GetAllValues');

    component.search('J');

    expect(component.GetAllValues).toHaveBeenCalled();
  });
  



});