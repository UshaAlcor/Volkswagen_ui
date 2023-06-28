
export const Message:any ={
 //titles

//  login screen titles
title:'Message',
titleJP:'エラーメッセージ',
textMessageJP:'メッセージ',


accountLockTitle:'Your EVAS account has been locked for 30 minutes',
accountLockJP:'',
accountDeActivateTitle:'This account has been deactivated',
//end of login screen titles

//forgot password screen titles
passwordLinkTitle:'Password reset link is sent to e-mail',
passwordLinkTitleJP:'パスワード再設定リンクをメール送信しました',


//Messages
incorrectCredentials:'EVAS ID or password is incorrect',
incorrectCredentialsJP:'EVAS IDまたはパスワードが異なります。',
AccountDeActivateMessageJP:'長期間ご利用がなかったため、このアカウントは無効になっています。EVASヘルプデスクへお問い合わせをお願い致します',
AccountLockMessageJP:`パスワードの誤入力が3回発生したので、アカウントがロックされました。ロックは３０分後に自動的に解除されます。至急のアカウントロック解除が必要な場合、ログイン画面で「パスワードを忘れた方はこちら」をクリックしてパスワード再設定を行って下さい。
`,
    accountDeActivateMessage:'Account has not been used for a long time, please contact the EVAS Help Desk.',
    accountLockMessage:`you have reached the maximum number of invalid sign-in attempts.
     The account will  be automatically unlocked after 30 minutes.
    For account immediately unlock, 
    please click`,
// login messages end

//forgot password screen message
passwordLinkMessage:`If you do not receive the email:
・Please enter correct EVAS ID and e-mail address.
・If you do not find email in Inbox, please check your spam folder
`,
passwordEmailMismatch:'Please enter valid evas id and email',
passwordLinkMessageJP:`＊メールが届かない場合：
・ご入力頂いたEVAS IDとメールアドレスに相違がないかご確認して下さい。
・迷惑メールフォルダに振分けられていないかご確認ください。`,
passwordResetSuccess:'Password has been reset successfully',
passwordResetSuccessJP:'パスワードは再設定されました。',
passwordResetErrorMessage:'New password confirm doesn’t match with New password. Please enter the same password in new password and new password confirm fields',
PasswordResetErrorMessageJP:'新しいパスワードと確認用パスワードが一致しません。新しいパスワード確認用欄には新しいパスワードと同じものを入力してください。',
isAdminPasswordRule:`・パスワードは英字（大文字・小文字）・数字・記号をそれぞれ含む
16文字以上で設定してください。
・英字は大文字と小文字を区別します。
・使用可能な記号は「! " # $ % & ' ( ) + - . / : @ [ ] _」です。
それ以外の記号は使用できません。
・過去5回分と同じパスワードは設定できません。`
}
