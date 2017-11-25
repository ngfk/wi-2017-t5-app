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
import { Subscription } from 'rxjs/Subscription';

import { Chat, ChatEntry } from '../../models/chat';

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
    public chat: Chat;

    private subscriptions: Subscription[] = [];

    constructor(
        private cd: ChangeDetectorRef,
        private renderer: Renderer,
        private platform: Platform,
        private navParams: NavParams,
        private keyboard: Keyboard
    ) {}

    public ngOnInit(): void {
        this.loadFakeChat();
        this.subscriptions = [
            this.keyboard.onKeyboardShow().subscribe(this.onKeyboardShow),
            this.keyboard.onKeyboardHide().subscribe(this.onKeyboardHide)
        ];
    }

    public ngOnDestroy(): void {
        this.subscriptions.forEach(sub => sub.unsubscribe());
    }

    public ionViewWillEnter(): void {
        // For some reason a timeout is required to completely scroll to the
        // bottom of the chat.
        setTimeout(() => this.contentField.scrollToBottom(0), 0);
    }

    public send(input: string): void {
        input = input.trim();

        if (input) {
            const newEntry: ChatEntry = {
                content: input,
                timestamp: new Date()
            };
            this.chat.push(newEntry);
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

    private loadFakeChat(): void {
        this.chat = [
            {
                timestamp: new Date(),
                from: 'Watson',
                content: 'Hello World!'
            },
            {
                timestamp: new Date(),
                content: 'Hey!'
            },
            {
                timestamp: new Date(),
                from: 'Watson',
                content:
                    // tslint:disable-next-line max-line-length
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer leo purus, molestie quis nisi eu, sagittis eleifend nibh. In hac habitasse platea dictumst. Nam eu mi nec enim placerat sodales. Sed commodo placerat ligula, sit amet efficitur nisl posuere nec. Duis maximus, nibh quis volutpat blandit, metus sem fermentum neque, in volutpat orci est at erat. Sed porttitor lorem nec est ultricies, eu vulputate est mattis. Cras a quam faucibus dui imperdiet laoreet. Cras eget blandit purus, volutpat auctor augue. Curabitur convallis nibh sed nibh egestas rhoncus. Aliquam posuere nisl justo, id dictum nisi vulputate et. Nulla ac sagittis felis, vitae eleifend leo. Suspendisse metus velit, dictum non gravida sit amet, rhoncus imperdiet odio. Quisque consectetur tellus non mi finibus faucibus. Mauris tempus interdum nisi eget tempor.\nDonec malesuada semper augue id eleifend. Morbi tempus interdum felis at efficitur. Suspendisse sed est dui. Duis interdum, elit sed euismod posuere, dui arcu malesuada dolor, vel placerat tortor lacus nec erat. Sed fringilla ante eget dolor gravida, egestas eleifend dolor semper. Praesent id convallis enim, in venenatis sem. Curabitur facilisis fermentum dolor. Suspendisse gravida mollis lectus nec volutpat. Vestibulum non ullamcorper purus, in mollis urna.\nIn mollis velit non consectetur accumsan. Duis vel sem egestas, congue lectus vel, dapibus libero. Ut vitae maximus enim, nec mollis elit. Vivamus in neque cursus, aliquam eros lobortis, hendrerit sapien. Donec vehicula eu lectus nec vehicula. Suspendisse venenatis cursus quam ut tristique. Nulla in mollis nulla. Integer pharetra ullamcorper nibh, non varius massa porta vitae. Morbi et neque aliquam, suscipit lectus vitae, pellentesque quam. Maecenas vitae ligula erat. Aenean sed viverra libero, sed tempus tellus. Phasellus tristique non nulla et bibendum. Etiam ut est sem. In efficitur faucibus tellus, non auctor arcu vestibulum quis.\nDonec sit amet vehicula dui. Proin non ligula sed nisi suscipit varius ac nec mi. Mauris faucibus hendrerit sem, in tristique tortor volutpat sit amet. Maecenas vel varius lectus, vel egestas odio. Nulla facilisi. Suspendisse molestie tempus purus, non tempus leo aliquam at. Integer eget ultrices massa. Sed egestas mauris ipsum, eget porttitor lacus dapibus at. Nulla nunc sem, fermentum ac pretium vitae, vestibulum ac erat.\nPhasellus nibh mauris, semper eget lacinia non, vehicula ac quam. Nam quis enim sapien. Sed et varius lectus. Phasellus vel vulputate lorem. Suspendisse vulputate convallis tortor. Curabitur sollicitudin eget lorem sit amet tempor. Cras et ipsum porta orci ullamcorper pellentesque a sed arcu. Mauris accumsan, ligula in feugiat dictum, nunc nulla rhoncus enim, ut mollis odio erat a orci. Morbi sed hendrerit lacus.'
            },
            {
                timestamp: new Date(),
                content: '...'
            },
            {
                timestamp: new Date(),
                from: 'Watson',
                content:
                    // tslint:disable-next-line max-line-length
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium ab numquam porro. Odit harum totam voluptas laudantium modi ea laborum, omnis velit in, soluta incidunt architecto nobis quo magni dolore!'
            }
        ];
    }
}
