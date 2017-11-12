import { Injectable } from '@angular/core';
import { SplashScreen } from '@ionic-native/splash-screen';

@Injectable()
export class SplashScreenMock extends SplashScreen {
    public hide(): void {
        // Do nothing, prevents warning when in a browser.
    }
}
