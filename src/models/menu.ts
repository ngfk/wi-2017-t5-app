import { IonIcon } from './ion-icon';
import { Page } from './page';

export interface Menu extends Array<MenuEntry> {}

export interface MenuEntry {
    readonly page: Page;
    readonly icon: IonIcon;
    readonly title: string;
}
