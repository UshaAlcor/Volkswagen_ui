import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_components/confirm-dialog/confirm-dialog.component';
import { Message, PasswordStrengthValidator } from 'src/app/_helpers';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-password-change',
  templateUrl: './password-change.component.html',
  styleUrls: ['./password-change.component.scss']
})
export class PasswordChangeComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  invalidedAttemptCounter: number=0;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService,
      private dialog: MatDialog
  ) { }

  ngOnInit() {
      
      this.form = this.formBuilder.group({
        evasId: localStorage.getItem('evasId'),
         password: ['',Validators.compose([
          Validators.required
      ])],
      newPassword: ['',Validators.compose([
        Validators.required,
        ,Validators.minLength(12), PasswordStrengthValidator
    ])],
      confirmPassword: ['',Validators.compose([
        Validators.required,
        ,Validators.minLength(12), PasswordStrengthValidator

    ])]
             
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.accountService.changePassword(this.f.newPassword.value, this.f.confirmPassword.value)
    .pipe(first())
    .subscribe({
        next: (user) => {
          console.log(localStorage.getItem('token'))
            this.loading=false;
            this.clickMethod('','The password has been changed successfully','300px','300px')
       // this.accountService.logout('en')
        },
        error: error => {
          this.loading = false;
         
          this.clickMethod('','New password confirm doesn’t match with New password. Please enter the same password in new password and new password confirm fields','300px','500px')
         
           
        }
        })
      } 
      clickMethod(title?:string,message?:string,height?:any,width?:any) {

        const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
            height: height,
            width: width,
            panelClass: 'custom-dialog-container',
           
            data: {
              title: title,
              message: message,
              type:'en',
              buttonType:'en',
             
             
            }
          });
          confirmDialog.afterClosed().subscribe(result => {
            if (result === true) {
              }
          });
        
      }
  hide: boolean = true;

  myFunction() {
    this.hide = !this.hide;
  }


  get passwordMatchError() {
    return (
      this.form.getError('mismatch') &&
      this.form.get('confirmPassword')?.touched
    );
  }

}
