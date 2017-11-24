import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Chat } from '../../models/chat';

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPage {
    public readonly chat: Chat;

    constructor(private navParams: NavParams) {
        this.chat = [
            {
                timestamp: new Date(),
                from: 'Watson',
                content: 'Hello World!'
            },
            {
                timestamp: new Date(),
                content: 'Hey!'
            }
        ];
    }
}
