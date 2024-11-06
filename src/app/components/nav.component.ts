import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";
import { MatToolbar, MatToolbarModule } from "@angular/material/toolbar";
import { AccountService } from "../services/AccountService";
import { MatIcon, MatIconModule } from "@angular/material/icon";
import { MatFormField, MatFormFieldModule, MatLabel } from "@angular/material/form-field";
import { FormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";

@Component({
    selector: 'app-nav',
    standalone: true,
    imports: [RouterLink, RouterLinkActive, MatToolbar, MatIcon, MatFormField, MatLabel,FormsModule, MatFormFieldModule,MatInputModule,MatToolbarModule, MatButtonModule, MatIconModule],
    template: `
        <mat-toolbar>
            <button mat-icon-button class="example-icon" routerLink="/" routerLinkActive="active" aria-label="Example icon-button with menu icon">
                <mat-icon>menu</mat-icon>
            </button>
            <span>My App</span>
            <span class="spacer"></span>
            @if (loggedIn) {
                <button mat-button routerLink="/profile" routerLinkActive="active">Profile</button>
                <button mat-button (click)="logout()">Logout</button>
            }
            @else {
                <form (submit)="login(username.value, password.value)">
                    <mat-form-field>
                        <mat-label>Username</mat-label>
                        <input matInput #username>
                    </mat-form-field>
                    <mat-form-field>
                        <mat-label>Password</mat-label>
                        <input matInput  #password type="password" placeholder="Password">
                    </mat-form-field>
                    <button mat-button type="submit" class="">
                        <mat-icon>login</mat-icon>    
                    </button>
                </form>
            }
        </mat-toolbar>
    `,
    styles: [`
        .example-icon {
            padding: 4 9px;
        }
        .spacer {
            flex: 1 1 auto;
        }
    `]
})

export class NavComponent {
    accountService: AccountService | null = null;

    constructor(accountService: AccountService) {
        this.accountService = accountService;
    }

    logout() {
        if (this.accountService) {
            this.accountService.logout();
        }
    }

    get loggedIn() {
        return this.accountService ? this.accountService.loggedInAccount !== null : false;
    }

    login(username: string, password: string) {
        if (this.accountService) {
            this.accountService.login(username, password);
        }
    }
}