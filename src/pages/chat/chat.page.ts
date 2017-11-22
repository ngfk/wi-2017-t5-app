import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

import { Chat } from '../../models/chat';

@IonicPage({
    segment: 'chat/:user',
    defaultHistory: ['TabsPage']
})
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPage {
    public readonly user: number;

    public readonly chat: Chat;

    constructor(private navParams: NavParams) {
        this.user = (this.navParams.data || {}).user;

        this.chat = [
            {
                timestamp: new Date(),
                from: 'User ' + this.user,
                content: 'Hello World!'
            },
            {
                timestamp: new Date(),
                content: 'Hey!'
            }
        ];
    }
}
