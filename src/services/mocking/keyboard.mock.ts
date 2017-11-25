import { Keyboard } from '@ionic-native/keyboard';
import { Observable } from 'rxjs/Observable';
import { EmptyObservable } from 'rxjs/observable/EmptyObservable';

export class KeyboardMock extends Keyboard {
    public onKeyboardShow(): Observable<any> {
        return new EmptyObservable();
    }

    public onKeyboardHide(): Observable<any> {
        return new EmptyObservable();
    }
}
