import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Device } from '@ionic-native/device';
import { GoogleMaps } from '@ionic-native/google-maps';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { DeviceMock } from '../services/mocking/device.mock';
import { GoogleMapsMock } from '../services/mocking/google-maps.mock';
import { SplashScreenMock } from '../services/mocking/splash-screen.mock';
import { StatusBarMock } from '../services/mocking/status-bar.mock';
import { MyApp } from './app.component';

// tslint:disable only-arrow-functions
export function withMock(actual: any, mock: any) {
    return !(
        document.URL.startsWith('https://') ||
        document.URL.startsWith('http://')
    )
        ? actual
        : { provide: actual, useClass: mock };
}
// tslint:enable only-arrow-functions

@NgModule({
    bootstrap: [IonicApp],
    declarations: [MyApp],
    entryComponents: [MyApp],
    imports: [
        // Angular
        BrowserModule,
        // Ionic
        IonicModule.forRoot(MyApp)
    ],
    providers: [
        // Ionic
        { provide: ErrorHandler, useClass: IonicErrorHandler },
        // Native
        withMock(Device, DeviceMock),
        withMock(StatusBar, StatusBarMock),
        withMock(SplashScreen, SplashScreenMock),
        withMock(GoogleMaps, GoogleMapsMock)
    ]
})
export class AppModule {}
