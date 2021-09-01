import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { User } from 'src/app/login/app/_models';
import { AccountService } from 'src/app/login/app/_services';

@Component({
  selector: 'dio-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.scss']
})
export class TopoComponent implements OnInit {
  @ViewChild('sidenav') sidenav: MatSidenav;

  user: User;

    constructor(private accountService: AccountService) {
        this.accountService.user.subscribe(x => this.user = x);
    }

    logout() {
        this.accountService.logout();
    }

  ngOnInit() {
  }


  openSideNav() {
    this.sidenav.open();
  }

  closeSideNav() {
    this.sidenav.close();
  }


}
