import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ConfirmDialogComponent } from 'src/app/_components/confirm-dialog/confirm-dialog.component';
import { Message } from 'src/app/_helpers';
import { PasswordStrengthValidator } from 'src/app/_helpers/PasswordStrengthValidator';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent {
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
          evasId:localStorage.getItem('evasId'),
         password: ['',Validators.compose([
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
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.resetPassword(this.f.password.value, this.f.confirmPassword.value)
          .pipe(first())
          .subscribe({
              next: (user) => {
                console.log(localStorage.getItem('token'))
                this.clickMethod('',Message.passwordResetSuccess,'300px','300px')
                  // get return url from query parameters or default to home page
                  // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  // this.router.navigateByUrl(returnUrl);
                  this.loading=false;
              },
              error: error => {
                this.loading = false;
               
                this.loading = false;
                this.clickMethod('',Message.PasswordResetErrorMessage,true)
                
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