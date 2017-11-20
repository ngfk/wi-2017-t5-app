import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular/module';

import { PipeModule } from '../../pipes/pipe.module';
import { ChatPage } from './chat.page';

@NgModule({
    declarations: [ChatPage],
    imports: [IonicPageModule.forChild(ChatPage), PipeModule]
})
export class ChatPageModule {}
