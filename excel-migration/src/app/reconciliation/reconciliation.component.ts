import { Component, OnInit } from '@angular/core';
import { ReconciliationService } from './reconciliation.service';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzSelectSizeType } from 'ng-zorro-antd/select';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../shared/shared.service';
import { BankStatement, CashBook } from '../models/tablemodels';

export enum type {
    BANK = 'bank',
    CASHBOOK = 'cashbook',
}

interface DataItem {
    name: string;
    age: number;
    address: string;
}
@Component({
    selector: 'app-reconciliation',
    templateUrl: './reconciliation.component.html',
    styleUrls: ['./reconciliation.component.scss'],
})

export class ReconciliationComponent implements OnInit {
    public searchtickets: any;
    public discrepancyitemArray: any[] = [];
    primarypage: boolean = true;
    currentFileUpload: any;
    selectedFiles: any;
    totalbankstatement:any;
    totalcashbook:any;
    Selectedoption:any='option1';
    cereconTableValue:any;

    public reconciliation: any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        reconstart: '',
        reconend: '',
        file_Statement: '',
        file_Cashbook: '',
        result_message: '',
        discrepencies: '',
        user_id: ''
    }
    public discrepancy: any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        discid: '',
        message: '',
        type: '',
    }
    public statement: any = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        reconid: '',
        type: '',
        transactiondate: '',
        details: '',
        debit: '',
        credit: '',
        balance: '',
        ismatch: '',
        matchid: '',
    }
    bankStatement: BankStatement[] = []


    cashBook: CashBook[] = [

    ];

    cashBookBalance: any[] = [
        
    ];

    bankStatementBalance: any[] = [
        
    ];


    isVisibleCreate = false;
    isVisibleUpdate = false;
    nextpage: boolean = false;
    uploading: boolean = false;
    progress: number = 0;
    size: NzSelectSizeType = 'default';
    constructor(
        private msg: NzMessageService,
        private nzMessageService: NzMessageService,
        private reconciliationService: ReconciliationService,
        public sharedService: SharedService
    ) { }

    ngOnInit() {
        this.discrepancyGetAllValues();
        this.reconciliation.created_by = sessionStorage.getItem('email') || '';
        this.discrepancy.created_by = sessionStorage.getItem('email') || '';
        this.statement.created_by = sessionStorage.getItem('email') || '';
        this.reconciliation.user_id = sessionStorage.getItem('Id') || '';
    }

    handleChange(info: NzUploadChangeParam): void {
        console.log("info", info)
    }

    showModal(): void {
        this.isVisibleCreate = true;
    }

    handleOk(): void {

        this.isVisibleCreate = false;
        this.isVisibleUpdate = false;
    }

    handleCancel(): void {

        this.isVisibleCreate = false;
        this.isVisibleUpdate = false;
    }
    
    Create() {
        this.isVisibleCreate = false;
        this.reconciliationService.PostAllreconciliationValues(this.reconciliation).subscribe((data: any) => {
            this.reconciliation.reconstart = '';
                this.reconciliation.reconend = '';
                this.reconciliation.file_one = '';
                this.reconciliation.file_two = '';
                this.reconciliation.result_message = '';
                this.reconciliation.discrepencies = '';
                this.discrepancy.discid = '';
                this.discrepancy.message = '';
                this.discrepancy.type = '';
                this.statement.reconid = '';
                this.statement.type = '';
                this.statement.transactiondate = '';
                this.statement.details = '';
                this.statement.debit = '';
                this.statement.credit = '';
                this.statement.balance = '';
                this.statement.ismatch = '';
                this.statement.matchid = '';
                 
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }

    filterStatus = [
        { text: 'Active', value: 'ACTIVE' },
        { text: 'In-Active', value: 'INACTIVE' }
    ];

    filterAccessProfile = [
        { text: 'Receptionist', value: 'Receptionist' },
        { text: 'Health Care Provide', value: 'Health Care Provide' }
    ]



    listOfData: DataItem[] = [];

    Update() {
        this.reconciliationService.Updatereconciliation(this.reconciliation).subscribe((data: any) => {
            this.reconciliation.reconstart = '';
            this.reconciliation.reconend = '';
            this.reconciliation.file_one = '';
            this.reconciliation.file_two = '';
            this.reconciliation.result_message = '';
            this.reconciliation.discrepencies = '';
            this.discrepancy.discid = '';
            this.discrepancy.message = '';
            this.discrepancy.type = '';
            this.statement.reconid = '';
            this.statement.type = '';
            this.statement.transactiondate = '';
            this.statement.details = '';
            this.statement.debit = '';
            this.statement.credit = '';
            this.statement.balance = '';
            this.statement.ismatch = '';
            this.statement.matchid = '';
  
            this.isVisibleUpdate = false;
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }
    Delete(deleteid: any) {
        this.reconciliationService.DeletereconciliationValues(deleteid).subscribe((data: any) => {
             
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }

    GetAllValues() {
        this.reconciliationService.GetAllreconciliationValues().subscribe((data: any) => {
            
            console.log('**********************',data);

            this.bankStatement = this.sortDate(data.bankStandarizarion);
            this.cashBook = this.sortDate(data.cashBookStandarization);
            // this.totalbankstatement = this.bankStatement[-1].balance;
            // this.totalcashbook = this.cashBook[-1].debit;
            // console.log(this.totalbankstatement, this.totalcashbook);
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }
    discrepancyGetAllValues() {
        this.reconciliationService.GetAlldiscrepancyValues().subscribe((data: any) => {
            this.discrepancyitemArray = data;
            console.log(data);
        },
            (error: Error) => {
                console.log('Error', error);
            });
    }

    getReconcilationstatement(){
        this.reconciliationService.getAllreconcilitionStatement().subscribe((data: any)=>{
            this.cashBookBalance = data.cashBookReconcilation
            this.bankStatementBalance = data.bankReconcilation
        })
    }

    getFileConversationById(){
        this.reconciliationService.getFileConversationById().subscribe((data:any) => {

        });
    }
    triggerWorkflows(){
        this.reconciliationService.triggerWorkflows().subscribe((data:any) => {

        });
    }

    onChangeStart(event:any) {
        this.reconciliation.reconstart = event.toISOString();
    }
    onChangeEnd(event:any) {
        this.reconciliation.reconend = event.toISOString();
    }
    search(search: any) {
        if (search.length >= 2) {
            const targetValue: any[] = [];
            this.listOfData.forEach((value: any) => {
                let keys = Object.keys(value);
                for (let i = 0; i < keys.length; i++) {
                    if (value[keys[i]] && value[keys[i]].toString().toLocaleLowerCase().includes(search)) {
                        targetValue.push(value);
                        break;
                    }
                }
            });
            this.listOfData = targetValue;
        } else {
            this.GetAllValues();
        }
    }

    sortDate(data:any){
        let returnOrderobj = data.sort((a:any, b:any) => { 
            let date1:any = new Date(a.transaction_date);
            let date2:any = new Date(b.transaction_date);
            return date1 - date2
        })
        return returnOrderobj;
    }


    cancel() {
        this.primarypage = true;
        this.nextpage = false;
        this.progress = 0;
    }

    confirmDelete(data: any): void {
        this.nzMessageService.info('click confirm');
        this.Delete(data.id);
    }

    getUpdateById(data: any) {
        this.isVisibleUpdate = true;
        this.reconciliation = data;
        this.discrepancy = data;
        this.statement = data;
    }

    async simulateUpload() {
        this.uploading = true;
        this.primarypage = false;
        // Simulate progress
        const interval = setInterval(() => {
            this.progress += 10;
            if (this.progress >= 100) {
                this.nextpage = true;
                this.uploading = false;
                clearInterval(interval);  // Stop the interval when progress reaches 100
            }
        }, 18000);
        // Set user ID and initiate creation
        this.reconciliation.user_id = "1";
        this.Create();
    
        // Wait for 25 seconds before calling getFileConversationById
        await new Promise(resolve => setTimeout(resolve,1000));
        await this.getFileConversationById();
    
        // Wait for an additional 120 seconds before calling triggerWorkflows
        await new Promise(resolve => setTimeout(resolve, 50000));
        await this.triggerWorkflows();
    
        // Wait for 5 seconds before calling getReconcilationstatement
        await new Promise(resolve => setTimeout(resolve, 130000));
        await this.getAllReconValues();


    }   

    getAllReconValues(){
        this.reconciliationService.get_all_values().subscribe({
          next:(res:any)=>{
                this.cereconTableValue = res.Reconciliation;
          }
        });
      }
    

    onFileSelected(event: any, fileType: string) {
        this.selectedFiles = event.target.files;
        this.currentFileUpload = Array.from(this.selectedFiles);
        this.gepfileToUpload(this.currentFileUpload, fileType);
    }

    gepfileToUpload(fileToUpload:any, filType: string) {
        const endpoint = this.reconciliationService.uploadImgFile(filType);
        const formData: FormData = new FormData();
        for(let i=0; i<fileToUpload.length; i++){
            formData.append('fileKey', fileToUpload[i], fileToUpload[i].name);
        }
        fetch(endpoint, {
            method: 'POST',
            body: formData
        }).then(res => res.json()
        ).then((resultData) => {
            console.log(resultData,this.sharedService.UPLOAD_API, resultData._doc.fileslist[0].location);

            if(resultData._doc.filetype == 'bank'){
                this.reconciliation.file_Statement = `${resultData._doc.fileslist[0].location}`;
            } else if(resultData._doc.filetype == 'cashbook'){
                this.reconciliation.file_Cashbook = `${resultData._doc.fileslist[0].location}`;
            }
            
        })
    }
}

