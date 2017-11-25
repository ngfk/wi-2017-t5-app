import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

@Injectable()
export class DeviceMock extends Device {
    public get uuid() {
        return 'mock';
    }

    public get version() {
        return 'mock';
    }

    public get platform() {
        return 'mock';
    }

    public get model() {
        return 'mock';
    }

    public get isVirtual() {
        return false;
    }
}
