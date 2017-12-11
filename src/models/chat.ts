export enum ChatType {
    Text = 'text',
    Image = 'image',
    Location = 'location'
}

export interface ChatTypeMap {
    text: ChatEntryText;
    image: ChatEntryImage;
}

export interface ChatEntryBase {
    readonly type: ChatType;
    readonly timestamp: Date;
    readonly from?: string;
}

export interface ChatEntryText extends ChatEntryBase {
    readonly type: ChatType.Text;
    readonly text: string;
}

export interface ChatEntryImage extends ChatEntryBase {
    readonly type: ChatType.Image;
    readonly title: string;
    readonly image: string;
}

export interface ChatEntryLocation extends ChatEntryBase {
    readonly type: ChatType.Location;
    readonly lat: number;
    readonly long: number;
}

export type ChatEntry = ChatEntryText | ChatEntryImage | ChatEntryLocation;

export interface Chat extends Array<ChatEntry> {}
