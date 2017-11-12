import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    selector: 'page-home',
    templateUrl: 'home.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage {}
