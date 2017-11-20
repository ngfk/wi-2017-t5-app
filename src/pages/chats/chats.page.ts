import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Events, IonicPage } from 'ionic-angular';

import { Page } from '../../models/page';

@IonicPage()
@Component({
    selector: 'page-chats',
    templateUrl: 'chats.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsPage {
    public temp = new Array(20);

    constructor(private events: Events) {}

    public chat(user: number): void {
        // Navigation to the chat page from the app components ensures that we
        // do not keep the tabs bar on the chat page.
        this.events.publish('app:nav', Page.Chat, { user });
    }
}
