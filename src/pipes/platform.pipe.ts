import { Pipe, PipeTransform } from '@angular/core';
import { Platform } from 'ionic-angular';

@Pipe({ name: 'platform' })
export class PlatformPipe implements PipeTransform {
    constructor(private platform: Platform) {
        (window as any).platform = platform;
    }

    public transform(value: any, platforms = ''): any {
        const support = platforms
            .split(',')
            .map(p => {
                switch (p) {
                    case 'md':
                        return 'android';
                    case 'wp':
                        return 'windows';
                    default:
                        return p;
                }
            })
            .filter(p => !!p);

        return support.some(p => this.platform.is(p)) ? value : undefined;
    }
}
