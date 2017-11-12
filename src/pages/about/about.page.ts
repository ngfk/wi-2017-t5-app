import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-about',
    templateUrl: 'about.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutPage {}
