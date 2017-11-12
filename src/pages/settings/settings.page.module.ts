import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { SettingsPage } from './settings.page';

@NgModule({
    declarations: [SettingsPage],
    imports: [IonicPageModule.forChild(SettingsPage)]
})
export class SettingsPageModule {}
