import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform } from 'ionic-angular';

import { Page } from '../models/page';

@Component({
    templateUrl: 'app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyApp implements OnInit {
    public rootPage = Page.Tabs;

    constructor(
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen
    ) {}

    public async ngOnInit(): Promise<void> {
        await this.platform.ready();

        await this.statusBar.styleDefault();
        await this.splashScreen.hide();
    }
}
