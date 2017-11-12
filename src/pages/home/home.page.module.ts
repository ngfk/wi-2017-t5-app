import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { HomePage } from './home.page';

@NgModule({
    declarations: [HomePage],
    imports: [IonicPageModule.forChild(HomePage)]
})
export class HomePageModule {}
