import { Component } from '@angular/core';
import { AccountService } from './_services';
import { User } from './_models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  user?: User | null;
  title = 'volkswagen';

  constructor(private accountService: AccountService) {
    this.accountService.logout();
    // localStorage.removeItem('token');
    // localStorage.removeItem('isAdmin');
    // localStorage.removeItem('userData')

       
      this.accountService.user.subscribe(x => this.user = x);
      console.log(this.user)
  }

  logout() {
      this.accountService.logout();
  }
}
