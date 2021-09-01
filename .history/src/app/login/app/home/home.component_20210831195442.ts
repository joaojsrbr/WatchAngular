import { Component } from '@angular/core';

import { User } from '../_models';
import { AccountService } from '../_services';

@Component({ 
    selector: 'dio-root',
    templateUrl: 'home.component.html' })
export class HomeComponent {
    user: User;
    title = 'app';

    constructor(private accountService: AccountService) {
        this.user = this.accountService.userValue;
    }
}