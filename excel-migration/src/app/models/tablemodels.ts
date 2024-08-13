export interface BankStatement {
    transaction_date: string;
    details: string;
    debit: number;
    credit: number;
    balance: number;
    flag: number
}

export interface CashBook {
    transaction_date: string;
    details: string;
    debit: number;
    credit: number;
    // balance: number;
    flag:number
}