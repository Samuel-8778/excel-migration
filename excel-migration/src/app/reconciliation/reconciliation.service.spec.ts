import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ReconciliationService } from './reconciliation.service';


describe('reconciliationService', () => {
  let service: ReconciliationService;
  let httpMock: HttpTestingController;
  let sharedServiceMock = jasmine.createSpyObj('sharedServiceMock', ['methodName1', 'methodName2']);


  beforeEach(() => {
    TestBed.configureTestingModule({});
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [],
      providers: [ ReconciliationService, { provide: sharedServiceMock, useValue: sharedServiceMock } ]
    });
    sharedServiceMock = TestBed.inject(SharedService);
    httpMock = TestBed.inject(HttpTestingController);


  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpMock.verify();
  });


  it('should retrieve all values getalldiscrepancy from the server', () => {
    const mockResponse = { data: [{
      _id:'we2',
      discid: 'discid 1',
      message: 'message 1',
      type: 'type 1',
      }] 
    };

    const expectedUrl = `${service.BaseURL}/discrepancy`;

    service.GetAlldiscrepancyValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // get all Values
  it('should retrieve all values getallreconciliation from the server', () => {
    const mockResponse = { data: [{
      _id:'id2', 
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
    }]};
    const jwtToken = '123Hsdf_23234fdsjk';
    const expectedUrl = `${service.BaseURL}/reconciliation`;

    sessionStorage.setItem('JwtToken', jwtToken);

    service.GetAllreconciliationValues().subscribe(response => {
      expect(response).toEqual(mockResponse);
    });
    const req = httpMock.expectOne(expectedUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
  
  // test case gp create
  it('should send a POST request to the server', () => {
    const reconciliation = { 
      reconstart: 'reconstart 1',
      reconend: 'reconend 1',
      file_one: 'file_one 1',
      file_two: 'file_two 1',
      result_message: 'result_message 1',
      discrepencies: 'discrepencies 1',
    };

    
    // Make the API call
    service.PostAllreconciliationValues(reconciliation).subscribe(response => {
      expect(response).toEqual(reconciliation)
    });

    // Expect a POST request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliation`);
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(reconciliation);

    // Flush the mocked response
    req.flush(reconciliation);
  });
   
  // gp update the test case
  it('should send a PUT request to the server', () => {
    const reconciliation = { 
      id: '12dsadsa',
      reconstart: 'reconstart 1',
      reconend: 'reconend 1',
      file_one: 'file_one 1',
      file_two: 'file_two 1',
      result_message: 'result_message 1',
      discrepencies: 'discrepencies 1',
    };
    
    // Make the API call
    service.Updatereconciliation(reconciliation).subscribe(response => {
      expect(response).toEqual(reconciliation);
    });

    // Expect a PUT request to the specified endpoint with the provided data
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliation`);
    expect(req.request.method).toBe('PUT');
    expect(req.request.body).toEqual(reconciliation);

    // Flush the mocked response
    req.flush(reconciliation);
  });
   
  // delete the reconciliation 
  it('should send a DELETE request to the correct URL with the specified data ID', () => {
    const dataId = 123;

    // Make the request
    service.DeletereconciliationValues(dataId).subscribe();

    // Verify that the DELETE request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliation/${dataId}`);
    expect(req.request.method).toBe('DELETE');


    // Flush the mocked response
    req.flush(null);
  });
   






  it('should send a GET request to the correct URL with the specified reconciliation ID', () => {
    const reconciliationId = 123;
    const mockResponse = { 
      id: reconciliationId, 
      reconstart: 'reconstart 1',
      reconend: 'reconend 1',
      file_one: 'file_one 1',
      file_two: 'file_two 1',
      result_message: 'result_message 1',
      discrepencies: 'discrepencies 1',
    };

    // Make the request
    service.GetEntityById(reconciliationId).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliationid/`+reconciliationId);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });


  // get specificationreconciliation
  it('should send a GET request to the correct URL with the specified ID', () => {
    const id = 123;

    // Make the request
    service.getSpecificreconciliation(id).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliation/${id}`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  // get getSpecificreconciliationHistory
  it('should send a GET request to the correct URL getSpecificreconciliationHistory with the specified ID', () => {
    const dataId = 123;

    // Make the request
    service.getSpecificreconciliationHistory(dataId).subscribe();

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliation/${dataId}/history?days=30`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(null);
  });

  //search application
  it('should send a GET request to the correct URL with the specified data', () => {
    const data = { key1: 'value1', key2: 'value2' };
    const jwtToken = '123Hsdf_23234fdsjk';
    const mockResponse = { reconciliation: [] };

    // Set the mocked jwt token
    sessionStorage.setItem('JwtToken', jwtToken);

    // Make the request
    service.Searchreconciliation(data).subscribe(response => {
      expect(response).toEqual(mockResponse);
    });

    // Verify that the GET request was made with the correct URL and headers
    const req = httpMock.expectOne(`${service.BaseURL}/reconciliation/get/search?jwt_token=${jwtToken}&key1=value1&key2=value2`);
    expect(req.request.method).toBe('GET');


    // Flush the mocked response
    req.flush(mockResponse);
  });

  
});
