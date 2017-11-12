import { Injectable } from '@angular/core';
import { StatusBar } from '@ionic-native/status-bar';

@Injectable()
export class StatusBarMock extends StatusBar {
    public overlaysWebView(overlay: boolean) {
        // Do nothing, prevents warning when in a browser.
    }

    public styleDefault(): void {
        // Do nothing, prevents warning when in a browser.
    }

    public styleLightContent(): void {
        // Do nothing, prevents warning when in a browser.
    }
}
