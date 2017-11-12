import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

import { IonIcon } from '../../models/ion-icon';
import { Page } from '../../models/page';

type Tab = { root: Page; icon: IonIcon; title: string };

@IonicPage({
    name: 'TabsPage'
})
@Component({
    templateUrl: 'tabs.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabsPage {
    public tabs: Tab[] = [
        {
            root: Page.Home,
            icon: IonIcon.Home,
            title: 'Home'
        },
        {
            root: Page.Chats,
            icon: IonIcon.Chatboxes,
            title: 'Chats'
        },
        {
            root: Page.Travel,
            icon: IonIcon.Navigate,
            title: 'Travel'
        },
        {
            root: Page.Organize,
            icon: IonIcon.People,
            title: 'Organize'
        },
        {
            root: Page.Settings,
            icon: IonIcon.Settings,
            title: 'Settings'
        }
    ];

    public tabChange(): void {
        // adding an empty ionChange event is enough to trigger change
        // detection when changing tabs.
    }
}
