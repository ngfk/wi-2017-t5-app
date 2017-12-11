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
import { EnvService } from '../services/env.service';
import { StoreService } from '../services/store.service';

@Component({
    templateUrl: 'app.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyApp implements OnInit {
    public rootPage: Page;
    public menu: Menu;

    @ViewChild(Nav) private nav: Nav;

    constructor(
        private cd: ChangeDetectorRef,
        private platform: Platform,
        private statusBar: StatusBar,
        private env: EnvService,
        private store: StoreService,
        private splashScreen: SplashScreen
    ) {}

    public async ngOnInit(): Promise<void> {
        await this.platform.ready();

        this.initializeMenu();
        await this.env.initialize();
        await this.store.initialize();

        await this.statusBar.styleDefault();
        await this.splashScreen.hide();

        this.rootPage = this.store.getState().auth ? Page.Home : Page.Login;

        this.cd.detectChanges();
    }

    public openMenu(entry: MenuEntry): void {
        if (entry.page === Page.Login) {
            this.store.dispatch('AUTH_DEL_TOKEN');
            this.store.dispatch('CHAT_CLEAR');
        }

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
            },
            {
                page: Page.Login,
                icon: IonIcon.LogOut,
                title: 'Logout'
            }
        ];
    }
}
