import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_components/confirm-dialog/confirm-dialog.component';
import { Message } from 'src/app/_helpers';
import { PasswordStrengthValidator } from 'src/app/_helpers/PasswordStrengthValidator';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-reset-password-japanese',
  templateUrl: './reset-password-japanese.component.html',
  styleUrls: ['./reset-password-japanese.component.scss']
})
export class ResetPasswordJapaneseComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  invalidedAttemptCounter: number=0;
  isAdmin?: boolean;
  message=Message
  evasId: unknown;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService,
      private dialog: MatDialog
  ) { }

  ngOnInit() {
    let minLength
    var user = JSON.parse(localStorage.getItem('userData')||'{}');
    console.log(user)
      
     if(user.isAdmin==true){
      minLength=16
     }
     else{
      12
     }
    this.form = this.formBuilder.group({
      evasId:  user.evasid,
     password: ['',Validators.compose([
      Validators.required,
      ,Validators.minLength(minLength), PasswordStrengthValidator
  ])],
  confirmPassword: ['',Validators.compose([
    Validators.required,
    ,Validators.minLength(minLength), PasswordStrengthValidator

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
              this.clickMethod('',Message.passwordResetSuccessJP,'200px','300px')
                // get return url from query parameters or default to home page
                // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                // this.router.navigateByUrl(returnUrl);
                this.loading=false;
            },
            error: error => {
              this.loading = false;
             
              this.loading = false;
              this.clickMethod('',Message.PasswordResetErrorMessageJP,true)
              
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
                  type:'jp',
                  buttonType:'jp',
                 
                 
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

}

