import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-chats',
    templateUrl: 'chats.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatsPage {
    public temp = new Array(20);
}
