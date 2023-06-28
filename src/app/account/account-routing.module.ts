import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout.component';
import { LoginComponent } from './login.component';
import { ForgotPasswordComponent } from '../forgot-password/forgot-password.component';
import { LoginJapanTranslationComponent } from '../login-japan-translation/login-japan-translation.component';
import { AuthenicationScreenEngComponent } from '../authenication-screen-eng/authenication-screen-eng.component';
import { ForgotPasswordJapaneseComponent } from './forgot-password-japanese/forgot-password-japanese.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ResetPasswordJapaneseComponent } from './reset-password-japanese/reset-password-japanese.component';
import { AuthenicationScreenJPComponent } from '../authenication-screen-jp/authenication-screen-jp.component';
import { PasswordChangeComponent } from './password-change/password-change.component';
import { PasswordChangeJPComponent } from './password-change-jp/password-change-jp.component';
import { HomeComponent } from '../home';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'postLogin', component: AuthenicationScreenEngComponent },
            { path: 'postLoginJP', component: AuthenicationScreenJPComponent },
            { path: 'forgotPassword', component: ForgotPasswordComponent },
            { path: 'forgotPasswordJP', component: ForgotPasswordJapaneseComponent },
            { path: '', component: LoginJapanTranslationComponent },
            { path: 'resetPassword', component: ResetPasswordComponent },
            { path: 'resetPasswordJP', component: ResetPasswordJapaneseComponent },
            { path: 'passwordChange', component: PasswordChangeComponent },
            { path: 'passwordChangeJP', component: PasswordChangeJPComponent },
            // { path: 'home', component: HomeComponent },
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }