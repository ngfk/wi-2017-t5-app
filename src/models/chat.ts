export interface ChatEntryText {
    readonly text: string;
}

export interface ChatEntryImage {
    readonly title: string;
    readonly image: string;
}

export enum ChatType {
    Text = 'text',
    Image = 'image'
}

export interface ChatTypeMap {
    text: ChatEntryText;
    image: ChatEntryImage;
}

export interface ChatEntry<T extends ChatType = ChatType.Text> {
    readonly timestamp: Date;
    readonly from?: string;
    readonly type: T;
    readonly content: ChatTypeMap[T];
}

export interface Chat extends Array<ChatEntry<ChatType>> {}
