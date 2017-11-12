import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { ChatsPage } from './chats.page';

@NgModule({
    declarations: [ChatsPage],
    imports: [IonicPageModule.forChild(ChatsPage), PipeModule]
})
export class ChatsPageModule {}
