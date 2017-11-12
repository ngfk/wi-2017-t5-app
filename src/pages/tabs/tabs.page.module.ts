import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { TabsPage } from './tabs.page';

@NgModule({
    declarations: [TabsPage],
    imports: [IonicPageModule.forChild(TabsPage), PipeModule]
})
export class TabsPageModule {}
