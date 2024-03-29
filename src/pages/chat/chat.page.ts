import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnDestroy,
    OnInit,
    Renderer,
    ViewChild
} from '@angular/core';
import { Keyboard } from '@ionic-native/keyboard';
import {
    Content,
    Header,
    IonicPage,
    NavParams,
    Platform,
    TextInput
} from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { Chat, ChatEntry, ChatType } from '../../models/chat';
import { ConversationService } from '../../services/conversation.service';
import { StoreService } from '../../services/store.service';

@IonicPage()
@Component({
    selector: 'page-chat',
    templateUrl: 'chat.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatPage implements OnInit, OnDestroy {
    @ViewChild(Header) public headerField: Header;
    @ViewChild(Content) public contentField: Content;
    @ViewChild('input') public inputField: TextInput;
    public chat: Observable<Chat>;

    private subscriptions: Subscription[] = [];

    constructor(
        private cd: ChangeDetectorRef,
        private renderer: Renderer,
        private platform: Platform,
        private navParams: NavParams,
        private keyboard: Keyboard,
        private store: StoreService,
        private conversation: ConversationService
    ) {}

    public ngOnInit(): void {
        this.chat = this.store.select(state => state.chat);
        this.subscriptions = [
            this.keyboard.onKeyboardShow().subscribe(this.onKeyboardShow),
            this.keyboard.onKeyboardHide().subscribe(this.onKeyboardHide)
        ];

        if (this.store.getState().chat.length === 0) {
            this.conversation.message().subscribe(entry => {
                this.store.dispatch('CHAT_APPEND', entry);
                this.cd.detectChanges();
                this.contentField.scrollToBottom(400);
            });
        }
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public ionViewWillEnter(): void {
        // For some reason a timeout is required to completely scroll to the
        // bottom of the chat.
        setTimeout(() => this.contentField.scrollToBottom(0), 0);
    }

    public sendAttachment(): void {}
    public sendAudio(): void {}

    public sendText(text: string): void {
        text = text.trim();

        if (text) {
            const newEntry: ChatEntry = {
                timestamp: new Date(),
                type: ChatType.Text,
                text
            };
            this.store.dispatch('CHAT_APPEND', newEntry);

            this.conversation.message(newEntry).subscribe(response => {
                this.store.dispatch('CHAT_APPEND', response);
                this.cd.detectChanges();
                this.contentField.scrollToBottom(400);
            });
        }

        this.inputField.value = '';
        this.inputField.setFocus();
        this.cd.detectChanges();
        this.contentField.scrollToBottom(400);
    }

    private onKeyboardShow = (event: any): void => {
        if (this.platform.is('ios')) {
            const keyboardHeight = event.keyboardHeight;
            const header = this.headerField.getNativeElement();
            const content = this.contentField.getNativeElement();

            this.renderer.setElementStyle(header, 'top', keyboardHeight + 'px');
            this.renderer.setElementStyle(content, 'marginTop', keyboardHeight);

            this.cd.detectChanges();
        }

        // For some reason a timeout is required to completely scroll to the
        // bottom of the chat.
        setTimeout(() => this.contentField.scrollToBottom(100), 200);
    };

    private onKeyboardHide = (): void => {
        if (this.platform.is('ios')) {
            const content = this.contentField.getNativeElement();
            const header = this.headerField.getNativeElement();

            this.renderer.setElementStyle(content, 'marginTop', '0px');
            this.renderer.setElementStyle(header, 'top', '0');

            this.cd.detectChanges();
        }
    };
}
