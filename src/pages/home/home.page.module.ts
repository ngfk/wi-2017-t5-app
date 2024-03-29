import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { HomePage } from './home.page';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage), PipeModule]
})
export class HomePageModule {}
