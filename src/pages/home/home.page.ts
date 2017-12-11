import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Page } from '../../models/page';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {
    constructor(private nav: NavController) {}

    public chat(): void {
        this.nav.setRoot(Page.Chat);
    }
}
