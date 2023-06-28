import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AccountService, AlertService } from '../_services';
import { PasswordStrengthValidator } from '../_helpers/PasswordStrengthValidator';
import { ConfirmDialogComponent } from '../_components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../_models';
import { Message } from '../_helpers/messages';

// @Component({ templateUrl: 'login.component.html' })
@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    encapsulation: ViewEncapsulation.None
  })
export class LoginComponent implements OnInit {
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
    ) { }

    ngOnInit() {
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
                // this.accountService.auth_token=user.token.access;
                localStorage.setItem('token',user.token.access);
               localStorage.setItem('user',user)
                console.log(localStorage.getItem('token'))
                localStorage.setItem('evasId',this.f.evasId.value)
                console.log(this.accountService.userValue)
                  this.invalidedAttemptCounter=0;
if(this.f.evasId.value=='0401'){
  const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
    height: '250px',
    width: '500px',
    panelClass: 'custom-dialog-container', 
   
    data: {
      title: Message.accountDeActivateTitle,
      message: Message.accountDeActivateMessage, 
    }
  });
  
}

  

// get return url from query parameters or default to home page
                  
  else{
    const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    this.router.navigateByUrl(returnUrl);
  //this.router.navigate(['/account/postLoginJP'])
}
this.invalidedAttemptCounter=0;


                    
                },
                error: error => {
                  this.loading = false;
                  this.invalidedAttemptCounter++;
                  //this.alertService.error(error);
                  if(this.invalidedAttemptCounter<=2){
                  const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
                    height: '200px',
                    width: '500px',
                    panelClass: 'custom-dialog-container', 
                   
                    data: {
                      title: Message.title,
                      message: Message.incorrectCredentials, 
                    }
                  });
                  
                  
                }
                  if (this.invalidedAttemptCounter ===3) {
                    console.log(this.invalidedAttemptCounter)
                this.clickMethod(Message.accountLockTitle,Message.accountLockMessage,true)
                      // or insert the UI library based code here to display a nice modal
                
                    }
                // if(this.invalidedAttemptCounter<3){
                //     this.alertService.error('EVAS IDまたはパスワードが異なります。');
                // }
                    this.loading = false;
                
                }
            });
    }

    clickMethod(title?:string,message?:string,lockImage?:boolean) {
      
        const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
            height: '400px',
            width: '820px',
            panelClass: 'custom-modalboxEn',
           
            data: {
              title: title,
              message: message,
              type:'en',
              buttonType:'en',
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
  
     // }
    }
      
    
  

   

