import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { SettingsPage } from './settings.page';

@NgModule({
    declarations: [SettingsPage],
    imports: [IonicPageModule.forChild(SettingsPage), PipeModule]
})
export class SettingsPageModule {}
