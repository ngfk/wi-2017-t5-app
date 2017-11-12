import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

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
            root: Page.About,
            icon: IonIcon.InformationCircle,
            title: 'About'
        },
        {
            root: Page.Contact,
            icon: IonIcon.Contacts,
            title: 'Contact'
        }
    ];

    public tabChange(): void {
        // adding an empty ionChange event is enough to trigger change
        // detection when changing tabs.
    }
}
