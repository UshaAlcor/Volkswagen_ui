import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-admin',
  templateUrl: './is-admin.component.html',
  styleUrls: ['./is-admin.component.scss']
})
export class IsAdminComponent implements OnInit {

  @Input() isAdmin: any;
  adminRole: string='';
  constructor()
  {

    
     
  }
  ngOnInit(): void {
    var user = JSON.parse(localStorage.getItem('userData')||'{}');
    // this.isAdmin==localStorage.getItem('isAdmin')
    this.isAdmin=user.isAdmin
    console.log(this.isAdmin)
  }
 
}
