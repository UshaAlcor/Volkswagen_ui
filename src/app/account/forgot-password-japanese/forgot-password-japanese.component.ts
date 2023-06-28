import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { ConfirmDialogComponent } from 'src/app/_components/confirm-dialog/confirm-dialog.component';
import { Message } from 'src/app/_helpers';
import { AccountService, AlertService } from 'src/app/_services';

@Component({
  selector: 'app-forgot-password-japanese',
  templateUrl: './forgot-password-japanese.component.html',
  styleUrls: ['./forgot-password-japanese.component.scss']
})
export class ForgotPasswordJapaneseComponent {

    form!: FormGroup;
      loading = false;
      submitted = false;
  
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
            evasId: ['', Validators.required],
           email: ['',Validators.compose([
            Validators.required,
             Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
          ]),
            //,Validators.minLength(12), PasswordStrengthValidator
      ]
               
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
        this.accountService.forgotPassword(this.f.evasId.value, this.f.email.value)
            .pipe(first())
            .subscribe({
                next: (user) => {
                  console.log(user);
                  this.clickMethod(Message.passwordLinkTitleJP,Message.passwordLinkMessageJP,'300px','500px')
               this.loading = false;
              //  this.router.navigate(['/login']);
                },
                error: error => {
                  this.loading = false;
                  console.log(error)
                 // this.clickMethod(Message.title,Message.passwordEmailMismatchJP,'200px','500px')
              

                }
            });
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
    back()
    {
      //localStorage.removeItem('token')
     this.router.navigate(['/account'])
    }
  }
  

  