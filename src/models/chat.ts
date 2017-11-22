export interface Chat extends Array<ChatEntry> {}

export interface ChatEntry {
    readonly timestamp: Date;
    readonly from?: string;
    readonly content: string;
}
