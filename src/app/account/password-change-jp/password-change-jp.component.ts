import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_components/confirm-dialog/confirm-dialog.component';
import { Message, PasswordStrengthValidator } from 'src/app/_helpers';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-password-change-jp',
  templateUrl: './password-change-jp.component.html',
  styleUrls: ['./password-change-jp.component.scss']
})
export class PasswordChangeJPComponent {

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
    var user = JSON.parse(localStorage.getItem('userData')||'{}');
    console.log(user);
    let passwordMinlength=12
    if(user.isAdmin==true){
passwordMinlength=16
    }
    else{
      passwordMinlength=12
    }
    this.form = this.formBuilder.group({
        evasId: user.evasid,
       password: ['',Validators.compose([
        Validators.required
    ])],
    newPassword: ['',Validators.compose([
      Validators.required,
      ,Validators.minLength(passwordMinlength), PasswordStrengthValidator
  ])],
    confirmPassword: ['',Validators.compose([
      Validators.required,
      ,Validators.minLength(passwordMinlength), PasswordStrengthValidator

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
          //this.clickMethod('',Message.passwordResetSuccess,'400px','400px')
            // get return url from query parameters or default to home page
            // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
            // this.router.navigateByUrl(returnUrl);
            this.loading=false;

            this.clickMethod('','パスワードは変更されました。','200px','300px')
       this.router.navigate(['/account'])
        // this.router.navigate(['/loginJapanTranslation'])
       // this.accountService.logout('jp');
        },
        error: error => {
          this.loading = false;
          this.clickMethod('','新しいパスワードと確認用パスワードが一致しません。新しいパスワード確認用欄には新しいパスワードと同じものを入力してください。','400px','500px')        
 
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

