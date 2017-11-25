import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    ViewChild
} from '@angular/core';
import {
    GoogleMap,
    GoogleMapOptions,
    GoogleMaps
} from '@ionic-native/google-maps';
import { IonicPage } from 'ionic-angular';

import { EnvService } from '../../services/env.service';

@IonicPage()
@Component({
    selector: 'page-travel',
    templateUrl: 'travel.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TravelPage {
    @ViewChild('map') public mapElem: ElementRef;
    public map: GoogleMap;

    constructor(
        private cd: ChangeDetectorRef,
        private googleMaps: GoogleMaps,
        private env: EnvService
    ) {}

    public async ionViewDidLoad(): Promise<void> {
        const elem = this.mapElem.nativeElement;
        const options: GoogleMapOptions = {
            camera: {
                target: {
                    lng: 4.8952,
                    lat: 52.3702
                },
                zoom: 13
            },
            styles
        };

        const creator = this.env.native
            ? GoogleMaps.create(elem, options)
            : this.googleMaps.create(elem, options);

        this.map = await creator;
        this.cd.detectChanges();
    }
}

const styles = [
    {
        featureType: 'all',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#7c93a3'
            },
            {
                lightness: '-10'
            }
        ]
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'administrative.country',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#a0a4a5'
            }
        ]
    },
    {
        featureType: 'administrative.province',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#62838e'
            }
        ]
    },
    {
        featureType: 'landscape',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#dde3e3'
            }
        ]
    },
    {
        featureType: 'landscape.man_made',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#3f4a51'
            },
            {
                weight: '0.30'
            }
        ]
    },
    {
        featureType: 'poi',
        elementType: 'all',
        stylers: [
            {
                visibility: 'simplified'
            }
        ]
    },
    {
        featureType: 'poi.attraction',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'poi.business',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.government',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.park',
        elementType: 'all',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'poi.place_of_worship',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.school',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'poi.sports_complex',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'all',
        stylers: [
            {
                saturation: '-100'
            },
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#bbcacf'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                lightness: '0'
            },
            {
                color: '#bbcacf'
            },
            {
                weight: '0.50'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text',
        stylers: [
            {
                visibility: 'on'
            }
        ]
    },
    {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#ffffff'
            }
        ]
    },
    {
        featureType: 'road.highway.controlled_access',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#a9b4b8'
            }
        ]
    },
    {
        featureType: 'road.arterial',
        elementType: 'labels.icon',
        stylers: [
            {
                invert_lightness: true
            },
            {
                saturation: '-7'
            },
            {
                lightness: '3'
            },
            {
                gamma: '1.80'
            },
            {
                weight: '0.01'
            }
        ]
    },
    {
        featureType: 'transit',
        elementType: 'all',
        stylers: [
            {
                visibility: 'off'
            }
        ]
    },
    {
        featureType: 'water',
        elementType: 'geometry.fill',
        stylers: [
            {
                color: '#a3c7df'
            }
        ]
    }
];
