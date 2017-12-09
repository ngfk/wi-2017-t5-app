import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { LoginPage } from './login.page';

@NgModule({
    declarations: [LoginPage],
    imports: [IonicPageModule.forChild(LoginPage), PipeModule]
})
export class LoginPageModule {}
