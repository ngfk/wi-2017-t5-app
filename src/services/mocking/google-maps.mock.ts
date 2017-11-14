import { GoogleMapOptions, GoogleMaps } from '@ionic-native/google-maps';

const URI = 'https://maps.googleapis.com/maps/api/js';
const KEY = 'AIzaSyBF-BJrlC0cW_MPUQVI-mtgeO5una5mGM8';

export class GoogleMapsMock extends GoogleMaps {
    constructor() {
        super();

        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = `${URI}?key=${KEY}`;

        document.body.appendChild(script);
    }

    public create(
        element: string | HTMLElement | GoogleMapOptions,
        options?: GoogleMapOptions
    ): any {
        const jsApiOptions = options
            ? {
                  ...options,
                  ...options.camera,
                  center: (options.camera || {}).target
              }
            : undefined;

        return this.waitForGoogleApi().then(google => {
            return new google.maps.Map(element, jsApiOptions);
        });
    }

    private waitForGoogleApi(): Promise<any> {
        return new Promise<void>(resolve => {
            const wait = () => {
                if ((window as any).google) resolve((window as any).google);
                else setTimeout(() => wait(), 200);
            };
            wait();
        });
    }
}
