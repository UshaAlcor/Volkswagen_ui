import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginJapanTranslationComponent } from '../login-japan-translation/login-japan-translation.component';
import { ForgotPasswordJapaneseComponent } from './forgot-password-japanese/forgot-password-japanese.component';
import { ResetPasswordJapaneseComponent } from './reset-password-japanese/reset-password-japanese.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ConfirmDialogComponent } from '../_components/confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthenicationScreenEngComponent } from '../authenication-screen-eng/authenication-screen-eng.component';
import { NgOtpInputModule } from 'ng-otp-input';
import { AuthenicationScreenJPComponent } from '../authenication-screen-jp/authenication-screen-jp.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordChangeJPComponent } from './password-change-jp/password-change-jp.component';
import { IsAdminComponent } from './reset-password-japanese/is-admin/is-admin.component';
import { SnackbarComponent } from '../_components/snackbar/snackbar.component';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        AccountRoutingModule,
        MatIconModule,
        MatFormFieldModule,
        MatInputModule ,
        MatDialogModule,
        NgOtpInputModule,
        MatSnackBarModule
  
        
    ],
    declarations: [
        LayoutComponent,
        LoginComponent,
        ForgotPasswordComponent,
        LoginJapanTranslationComponent,
        ForgotPasswordJapaneseComponent,
        ResetPasswordComponent,
        ResetPasswordJapaneseComponent,
        ConfirmDialogComponent,
        AuthenicationScreenEngComponent,
        AuthenicationScreenJPComponent,
        PasswordChangeComponent,
        PasswordChangeJPComponent,
        IsAdminComponent,
        SnackbarComponent,
        
        


    ],

})
export class AccountModule { }