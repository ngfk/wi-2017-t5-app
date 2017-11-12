import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-travel',
    templateUrl: 'travel.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelPage {}
