import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedService } from '../shared/shared.service';

@Injectable({
    providedIn: 'root'
})

export class ReconciliationService {
    constructor(
        private http: HttpClient,public sharedService: SharedService
    ) { }


  BaseURL = environment.WEB_API;
  RecUrl = environment.REC_API
  RecUrlNew = environment.REC_API_NEW

  uploadImgFile(filtype: string){
    return this.sharedService.UPLOAD_API  + `/upload/1?email=user&file=${filtype}`;
  }

  PostAllreconciliationValues(data:any): Observable<any>{
    return this.http.post(`${this.BaseURL}/reconciliation`,data);
  }

  GetAllreconciliationValues(): Observable<any>{
    return this.http.get(`${this.BaseURL}/get/standardization`);
  }
  
  getAllreconcilitionStatement(): Observable<any>{
    return this.http.get(`http://localhost:8016/get/cereconcilation`);
  }

  triggerWorkflows(): Observable<any>{
    return this.http.post(`${this.BaseURL}/reconciliation/workflowstrigger`, {});
  }

    getFileConversationById(): Observable<any>{
    return this.http.get(`${this.BaseURL}/fileconvertion/${1}`)
  }
  GetAlldiscrepancyValues(){
    return this.http.get(`${this.BaseURL}/discrepancy`);
  }

  Updatereconciliation(data:any){
    return this.http.put(`${this.BaseURL}/reconciliation/${data.id}`,data);
  }

  getSpecificreconciliation(id:number){
    return this.http.get(`${this.BaseURL}/reconciliation/${id}`);
  }

  getSpecificreconciliationHistory(id:number){
    return this.http.get(`${this.BaseURL}/reconciliation/${id}/history?days=30`);
  }

  DeletereconciliationValues(dataId:any){
     return this.http.delete(`${this.BaseURL}/reconciliation/${dataId}`);
  }

  GetEntityById(reconciliationId:any): Observable<any> {
    return this.http.get(`${this.BaseURL}/reconciliationid/` + reconciliationId);
  }

  Searchreconciliation(data:any): Observable<any> {
    const temp:any = [];
    const objectKeyPair = Object.entries(data);
    objectKeyPair.forEach((element, index) => {
    if (element[1]) {
    temp.push(`${element[0]}=${element[1]}`);
    }
    });
    let jwt_token = sessionStorage.getItem('JwtToken');
    return this.http.get(`${this.BaseURL}` + `/reconciliation/get/search?jwt_token=${jwt_token}${temp.length > 0 ? `&${temp.join('&')}` : ''}`);
  }

  get_all_values(){
    return this.http.get(`${this.RecUrlNew}`);
  }

}