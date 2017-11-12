import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreenMock } from '../services/mocking/splash-screen.mock';
import { StatusBarMock } from '../services/mocking/status-bar.mock';
import { MyApp } from './app.component';

const native = !(
    document.URL.startsWith('https://') || document.URL.startsWith('http://')
);

const withMock = (actual: any, mock: any) => {
    return native ? actual : { provide: actual, useClass: mock };
};

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
        withMock(StatusBar, StatusBarMock),
        withMock(SplashScreen, SplashScreenMock)
    ]
})
export class AppModule {}
