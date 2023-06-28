import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { AccountService, AlertService } from '../_services';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from '../_components/confirm-dialog/confirm-dialog.component';
import { Message } from '../_helpers';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
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
            evasId: ['', Validators.required],
           email: ['',Validators.compose([
            Validators.required,
            Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
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
                  this.clickMethod(Message.passwordLinkTitle,Message.passwordLinkMessage,'300px','450px')
               this.loading = false;
             //  this.router.navigate(['/login']);
                },
                error: error => {
                  this.loading = false;
                  console.log(error)
                  //this.clickMethod(Message.title,Message.passwordEmailMismatch,'200px','500px')
              

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
  

   

}