import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SettingsPage {}
