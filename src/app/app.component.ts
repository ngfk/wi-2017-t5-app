import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit,
    ViewChild
} from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Nav, Platform } from 'ionic-angular';

import { IonIcon } from '../models/ion-icon';
import { Menu, MenuEntry } from '../models/menu';
import { Page } from '../models/page';

@Component({
    templateUrl: 'app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyApp implements OnInit {
    public rootPage = Page.Home;
    public menu: Menu;

    @ViewChild(Nav) private nav: Nav;

    constructor(
        private cd: ChangeDetectorRef,
        private platform: Platform,
        private statusBar: StatusBar,
        private splashScreen: SplashScreen
    ) {}

    public async ngOnInit(): Promise<void> {
        await this.platform.ready();

        this.initializeMenu();

        await this.statusBar.styleDefault();
        await this.splashScreen.hide();
        this.cd.detectChanges();
    }

    public openMenu(entry: MenuEntry): void {
        this.nav.setRoot(entry.page);
    }

    private initializeMenu(): void {
        this.menu = [
            {
                page: Page.Home,
                icon: IonIcon.Home,
                title: 'Home'
            },
            {
                page: Page.Chat,
                icon: IonIcon.Chatboxes,
                title: 'Chat'
            },
            {
                page: Page.Travel,
                icon: IonIcon.Navigate,
                title: 'Travel'
            },
            {
                page: Page.Settings,
                icon: IonIcon.Settings,
                title: 'Settings'
            }
        ];
    }
}
