import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { PasswordStrengthValidator } from '../_helpers/PasswordStrengthValidator';
import { AccountService, AlertService } from '../_services';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../_components/confirm-dialog/confirm-dialog.component';
import { Message } from '../_helpers';
import { User } from '../_models';

import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackbarComponent } from '../_components/snackbar/snackbar.component';
@Component({
  selector: 'app-login-japan-translation',
  templateUrl: './login-japan-translation.component.html',
  styleUrls: ['./login-japan-translation.component.scss']
})
export class LoginJapanTranslationComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  invalidedAttemptCounter: number=0;
user?: User;

  constructor(
      private formBuilder: FormBuilder,
      private route: ActivatedRoute,
      private router: Router,
      private accountService: AccountService,
      private alertService: AlertService,
      private dialog: MatDialog,
       private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    localStorage.removeItem('userData')
      this.user={} as User
      this.form = this.formBuilder.group({
          evasId: ['', Validators.required],
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

      // stop here if form is invalid
      if (this.form.invalid) {
          return;
      }

      this.loading = true;
      this.accountService.login(this.f.evasId.value, this.f.password.value)
          .pipe(first())
          .subscribe({           
            next: (user) => {
                this.loading = false;
                console.log(user)
                localStorage.setItem('isAdmin',user.isAdmin)
                localStorage.setItem('userData', JSON.stringify(user)); 
               //this.accountService.isAdmin=localStorage.getItem('isAdmin')
                console.log(localStorage.getItem('isAdmin'))
             
              
              
                if(this.f.evasId.value=='0401'){
const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
  height: '250px',
  width: '500px',
  panelClass: 'custom-dialog-container', 
 
  data: {
    title: Message.textMessageJP,
    message: Message.AccountDeActivateMessageJP, 
             type:'jp',
             buttonType:'jp',
             lockImg:false

  }
});

}



// get return url from query parameters or default to home page
                
else{
  const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  this.router.navigateByUrl(returnUrl);
 // this.router.navigateByUrl(returnUrl);
}
this.invalidedAttemptCounter=0;


                  
              },
              error: error => {
                this.loading = false;
                this.invalidedAttemptCounter++;
              
                if(this.invalidedAttemptCounter<=2){
                 // this.showSnackbarCssStyles(Message.incorrectCredentialsJP,'確定','s')
                 this.alertService.error(Message.incorrectCredentialsJP);
            //     const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
            //       height: '200px',
            //       width: '500px',
            //       panelClass: 'custom-dialog-container', 
                 
            //       data: {
            //         title: "",
            //         message: Message.incorrectCredentialsJP,
            //         type:'jp',
            // buttonType:'jp',
            // lockImg:false
           

            //       }
            //     });
                
                
              }
                if (this.invalidedAttemptCounter ===3) {
                  console.log(this.invalidedAttemptCounter)
                  this.startTimer()
                 
              this.clickMethod(Message.titleJP,Message.AccountLockMessageJP,true)
                    // or insert the UI library based code here to display a nice modal
              
                  }
              // if(this.invalidedAttemptCounter<3){
              //     this.alertService.error('EVAS IDまたはパスワードが異なります。');
              // }
                  this.loading = false;
              
              }
          });
  }
  timeLeft: number = 1800;
  interval:any;

  startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 1800;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  clickMethod(title?:string,message?:string,lockImage?:boolean) {
    
      const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
        height: '400px',
        width: '820px',
        panelClass: 'custom-modalboxEn',

         
          data: {
            title: title,
            message: message,
            type:'jp',
            buttonType:'jp',
            lockImg:lockImage,
            component:"forgotPassword"
           
           
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
 ngDestroy()

 {
  localStorage.removeItem('isAdmin')
  localStorage.removeItem('userData')

 }
   // }
 
   showSnackbarCssStyles(content:any, action:any, duration:any) {
    let sb = this.snackBar.openFromComponent(SnackbarComponent,{
      duration: duration,
      verticalPosition:"top",
      horizontalPosition:'center',
      panelClass: ['blue-snackbar'],
      data: { message: content, snackType: action }
    });
    sb.onAction().subscribe(() => {
      sb.dismiss();
    });
  }
  }
