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
            },
            {
                timestamp: new Date(),
                from: 'Watson',
                content:
                    // tslint:disable-next-line max-line-length
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab numquam porro. Odit harum totam voluptas laudantium modi ea laborum, omnis velit in, soluta incidunt architecto nobis quo magni dolore!'
            },
            {
                timestamp: new Date(),
                content: '...'
            },
            {
                timestamp: new Date(),
                content:
                    "<b>Test</b>\n<script>\n  console.log('test')\n</script>"
            }
        ];
    }
}
