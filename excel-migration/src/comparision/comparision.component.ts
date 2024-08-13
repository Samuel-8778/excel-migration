import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { BankStatement, CashBook } from 'src/app/models/tablemodels';
import { ReconciliationService } from 'src/app/reconciliation/reconciliation.service';


interface TableRow {
  [key: string]: any;
}
@Component({
  selector: 'app-comparision',
  templateUrl: './comparision.component.html',
  styleUrls: ['./comparision.component.css']
})

export class ComparisionComponent implements OnInit {
  @Input() bankStatement: BankStatement[] = []
  @Input() cashBook: CashBook[] = []
  @Input() bankStatementBalance: any[] = []
  @Input() cashBookBalance: any[] = []
  @Input() cereconTableValue: TableRow[]= []
  totalbankstatement: any
  totalcashbook: any
  totalRecbankstatement: any
  totalReccashbook: any
  totalvalue: any
  totalRecValue: any
  @Output() cancelEvent = new EventEmitter<string[]>();
  isLoading : boolean = true;
  columns = [
    { header: 'Date to Process', field: 'date_to_process' },
    { header: 'Enrich Eligibility Amount', field: 'enrich_eligibility_amount' },
    { header: 'Enrich Earn 1000 Amount', field: 'enrich_earn_1000_amount' },
    { header: 'Enrich Earn 1010 Amount', field: 'enrich_earn_1010_amount' },
    { header: 'Enrich Earn 1000 Points', field: 'enrich_earn_1000_points' },
    { header: 'Enrich Earn 1010 Points', field: 'enrich_earn_1010_points' },
    { header: 'Enrich Rebate 1000 Amount', field: 'enrich_rebate_1000_amount' },
    { header: 'Enrich Rebate 1010 Amount', field: 'enrich_rebate_1010_amount' },
    { header: 'Enrich Rebate 1000 Points', field: 'enrich_rebate_1000_points' },
    { header: 'Enrich Rebate 1010 Points', field: 'enrich_rebate_1010_points' },
    { header: 'Enrich Rebate Rebate Points Due RM', field: 'enrich_rebate_rebate_pts_due_rm' },
    { header: 'Cardworks Eligibility Amount', field: 'cardworks_eligibility_amount' },
    { header: 'Cardworks Earn 1000 Amount', field: 'cardworks_earn_1000_amount' },
    { header: 'Cardworks Earn 1010 Amount', field: 'cardworks_earn_1010_amount' },
    { header: 'Cardworks Earn 1000 Points', field: 'cardworks_earn_1000_points' },
    { header: 'Cardworks Earn 1010 Points', field: 'cardworks_earn_1010_points' },
    { header: 'Cardworks Rebate 1000 Amount', field: 'cardworks_rebate_1000_amount' },
    { header: 'Cardworks Rebate 1010 Amount', field: 'cardworks_rebate_1010_amount' },
    { header: 'Cardworks Rebate 1000 Points', field: 'cardworks_rebate_1000_points' },
    { header: 'Cardworks Rebate 1010 Points', field: 'cardworks_rebate_1010_points' },
    { header: 'Gap Eligibility', field: 'gap_eligibility' },
    { header: 'Earn 1000 Amount Difference', field: 'earn_1000_amount_difference' },
    { header: 'Earn 1010 Amount Difference', field: 'earn_1010_amount_difference' },
    { header: 'Earn 1000 Points Difference', field: 'earn_1000_points_difference' },
    { header: 'Earn 1010 Points Difference', field: 'earn_1010_points_difference' },
    { header: 'Rebate 1000 Amount Difference', field: 'rebate_1000_amount_difference' },
    { header: 'Rebate 1010 Amount Difference', field: 'rebate_1010_amount_difference' },
    { header: 'Rebate 1000 Points Difference', field: 'rebate_1000_points_difference' },
    { header: 'Rebate 1010 Points Difference', field: 'rebate_1010_points_difference' },
    { header: 'Enrich Checking Earn Points', field: 'enrich_checking_earn_points' },
    { header: 'Enrich Checking Redeem Points', field: 'enrich_checking_redeem_points' },
    { header: 'Enrich Checking Rebate Amount', field: 'enrich_checking_rebate_amount' },
    { header: 'Enrich Checking Transferred Points', field: 'enrich_checking_transferred_points' },
    { header: 'Enrich Checking Adjustment Points', field: 'enrich_checking_adjustment_points' },
    { header: 'Cardworks Checking Earn Points', field: 'cardworks_checking_earn_points' },
    { header: 'Cardworks Checking Redeem Points', field: 'cardworks_checking_redeem_points' },
    { header: 'Cardworks Checking Rebate Amount', field: 'cardworks_checking_rebate_amount' },
  ];

  data: TableRow[] = []




  constructor(public reconcilService: ReconciliationService) { }
  balance!: boolean;
  ngOnInit(): void {
   
    this.balance = false;
    this.totalbankstatement = this.bankStatement[this.bankStatement.length - 1].balance;
    this.totalcashbook = this.cashBook[this.cashBook.length - 1].debit == null ? this.cashBook[this.cashBook.length - 1].credit : this.cashBook[this.cashBook.length - 1].debit;
    this.totalvalue = Math.abs(this.totalbankstatement - this.totalcashbook);

    this.totalRecbankstatement = this.bankStatementBalance[this.bankStatementBalance.length - 1].amount;
    this.totalReccashbook = this.cashBookBalance[this.cashBookBalance.length - 1].amount;
    this.totalRecValue = Math.abs(this.totalRecbankstatement - this.totalReccashbook);
   }

   ngOnChanges(changes: SimpleChanges): void {
    if (changes['cereconTableValue'] && changes['cereconTableValue'].currentValue) {
      this.isLoading = this.cereconTableValue.length === 0;
    }
  }

  cancel() {
    this.cancelEvent.emit()
  }

  nextpage() {
    this.balance = true;
  }
  


}
