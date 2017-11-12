import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-organize',
    templateUrl: 'organize.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OrganizePage {}
