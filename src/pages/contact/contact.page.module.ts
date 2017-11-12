import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { ContactPage } from './contact.page';

@NgModule({
    declarations: [ContactPage],
    imports: [IonicPageModule.forChild(ContactPage)]
})
export class ContactPageModule {}
