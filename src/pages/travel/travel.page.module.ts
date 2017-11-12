import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { TravelPage } from './travel.page';

@NgModule({
    declarations: [TravelPage],
    imports: [IonicPageModule.forChild(TravelPage), PipeModule]
})
export class TravelPageModule {}
