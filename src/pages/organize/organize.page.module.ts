import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { OrganizePage } from './organize.page';

@NgModule({
    declarations: [OrganizePage],
    imports: [IonicPageModule.forChild(OrganizePage), PipeModule]
})
export class OrganizePageModule {}
