import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
    selector: 'page-contact',
    templateUrl: 'contact.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactPage {}
