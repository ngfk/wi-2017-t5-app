import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';
import { Platform } from 'ionic-angular';

@Injectable()
export class EnvService {
    public readonly native: boolean;

    private _deviceId: string;
    private _deviceVersion: string;
    private _platform: string;
    private _model: string;
    private _virtual: boolean;

    constructor(private ionPlatform: Platform, private device: Device) {
        this.native = !(
            document.URL.startsWith('https://') ||
            document.URL.startsWith('http://') ||
            window.self !== window.top
        );
    }

    public get deviceId(): string {
        return this._deviceId;
    }

    public get deviceVersion(): string {
        return this._deviceVersion;
    }

    public get platform(): string {
        return this._platform;
    }

    public get model(): string {
        return this._model;
    }

    public get virtual(): boolean {
        return this._virtual;
    }

    public async initialize(): Promise<void> {
        await this.ionPlatform.ready();

        this._deviceId = this.device.uuid;
        this._deviceVersion = this.device.version;
        this._platform = this.device.platform;
        this._model = this.device.model;
        this._virtual = this.device.isVirtual;
    }
}
