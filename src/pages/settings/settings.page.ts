import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Page } from '../../models/page';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPage {
    constructor(private nav: NavController) {}

    public facebook(): void {
        // this.nav.push(Page.About);
    }

    public twitter(): void {
        // this.nav.push(Page.About);
    }

    public about(): void {
        this.nav.push(Page.About);
    }

    public chat(): void {
        this.nav.setRoot(Page.Chat);
    }
}
