import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { NgOtpInputComponent } from 'ng-otp-input';
import { first } from 'rxjs';
import { ConfirmDialogComponent } from '../_components/confirm-dialog/confirm-dialog.component';
import { AccountService, AlertService } from '../_services';

@Component({
  selector: 'app-authenication-screen-jp',
  templateUrl: './authenication-screen-jp.component.html',
  styleUrls: ['./authenication-screen-jp.component.scss']
})
export class AuthenicationScreenJPComponent {
  form!: FormGroup;
  loading = false;
  submitted = false;
  invalidedAttemptCounter: number=0;
  @ViewChild(NgOtpInputComponent, { static: false}) ngOtpInput:NgOtpInputComponent | undefined;
  codeLength:number=0;
  insufficientCount: boolean=false;
  noCode: boolean=false;

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
          username: ['', Validators.required],
         password: ['',Validators.compose([
          Validators.required,
          //,Validators.minLength(12), PasswordStrengthValidator
      ])]
             
      });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
      this.submitted = true;

      // reset alerts on submit
      this.alertService.clear();


      this.loading = true;
      this.accountService.login(this.f.username.value, this.f.password.value)
          .pipe(first())
          .subscribe({
              next: () => {
                  // get return url from query parameters or default to home page
                  // const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
                  // this.router.navigateByUrl(returnUrl);
              },
              error: error => {
                this.loading = false;
               console.log(error)
              this.clickMethod()
                    // or insert the UI library based code here to display a nice modal
              if(this.codeLength==0){
                this.noCode=true
              }
              
                  
              // if(this.invalidedAttemptCounter<3){
              //     this.alertService.error('EVAS IDまたはパスワードが異なります。');
              // }
                  this.loading = false;
              
              }
          });
  }

  clickMethod() {
    
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        height: '250px',
        width: '600px',
        panelClass: 'custom-dialog-container-au', 
       
         
          data: {
            title: ' 認証コードメール通知が届かない場合',
            message: `
            　・迷惑メールフォルダに振分けられていないかご確認ください。
            　・ヘルプデスクへ問い合わせをお願い致します。
             
            
            `,
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
  onOtpChange(e:any)
  {
    this.noCode=false;
console.log(e.length)
this.codeLength=e.length

if(e.length<6){
  this.insufficientCount=true
}
else{
  this.insufficientCount=false
}
// If authentication code email notification is not received :
//          ・If email not found in Inbox, please check your spam folder.
//          ・Please contact the help desk. 

  }


 

}
