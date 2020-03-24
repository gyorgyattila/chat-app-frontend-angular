import { Component, OnInit, OnDestroy } from '@angular/core';
import { SidenavService } from 'src/app/core/service/sidenav-service';
import { AuthenticationService } from 'src/app/core/service/auth-service';
import { User } from 'src/app/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy{

  user: User;
  private readonly onDestroy = new Subject<void>();


  constructor(private sidenavService: SidenavService, private authService: AuthenticationService) {

  }

  ngOnInit(): void {
    this.authService.currentUser.pipe(takeUntil(this.onDestroy)).subscribe(user => this.user = user);
  }

  toggleSidenav() {
    this.sidenavService.toggle();
  }

  ngOnDestroy(): void {
    this.onDestroy.next();
  }

}
