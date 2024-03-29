import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { AboutPage } from './about.page';

@NgModule({
    declarations: [AboutPage],
    imports: [IonicPageModule.forChild(AboutPage), PipeModule]
})
export class AboutPageModule {}
