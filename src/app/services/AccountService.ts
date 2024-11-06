import { Injectable } from '@angular/core';


class Account {
    id: number;
    email: string;
    password: string;
    constructor(id: number, email: string, password: string) {
        this.id = id;
        this.email = email;
        this.password = password;
    }
}

@Injectable({
    providedIn: 'root',
})
export class AccountService {
    accounts: Account[] = [];
    loggedInAccount: Account | null = null;

    login(email: string, password: string) {
        for (let account of this.accounts) {
            if (account.email === email && account.password === password) {
                return account;
            }
        }
        return null;
    }
    logout() {
        this.loggedInAccount = null;
    }
}