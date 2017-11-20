import { Injectable } from '@angular/core';
import { Device } from '@ionic-native/device';

@Injectable()
export class DeviceMock extends Device {
    public uuid = 'mock';
    public version = 'mock';
    public platform = 'mock';
    public model = 'mock';
    public isVirtual = false;
}
