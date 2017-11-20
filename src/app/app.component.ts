import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Events, Nav, Platform } from 'ionic-angular';

import { Page } from '../models/page';

@Component({
    templateUrl: 'app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyApp implements OnInit {
    public rootPage = Page.Tabs;

    @ViewChild(Nav) private nav: Nav;

    constructor(
        private cd: ChangeDetectorRef,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen,
        private events: Events
    ) {}

    public async ngOnInit(): Promise<void> {
        await this.platform.ready();

        this.events.subscribe('app:nav', this.onNav);

        await this.statusBar.styleDefault();
        await this.splashScreen.hide();
        this.cd.detectChanges();
    }

    public onNav = (page: Page, params: any): void => {
        this.nav.push(page, params);
    };
}
