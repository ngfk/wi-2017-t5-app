import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import * as user1Posts from '../../assets/user1/posts.json';
import * as user2Posts from '../../assets/user2/posts.json';
import { Page } from '../../models/page';
import { LoginParams, LoginService } from '../../services/login.service';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage {
    constructor(
        private nav: NavController,
        private login: LoginService,
        private http: HttpClient
    ) {}

    public async facebook(): Promise<void> {
        // const images = await this.getImages(1, 8);
        const images: Blob[] = [];

        const param: LoginParams = {
            name: '<name>',
            post: [...user1Posts],
            image: [...images]
        };

        await this.login.login(param).toPromise();
        this.nav.setRoot(Page.Home);
    }

    public async twitter(): Promise<void> {
        // const images = await this.getImages(2, 1);
        const images: Blob[] = [];

        const param: LoginParams = {
            name: '<name>',
            post: [...user2Posts],
            image: [...images]
        };

        await this.login.login(param).toPromise();
        this.nav.setRoot(Page.Home);
    }

    public async skip(): Promise<void> {
        const param: LoginParams = {
            name: '<name>',
            post: [],
            image: []
        };

        await this.login.login(param).toPromise();
        this.nav.setRoot(Page.Home);
    }

    private getImages(user: number, imageCount: number): Promise<Blob[]> {
        const blobs: Promise<Blob>[] = [];
        for (let i = 1; i <= imageCount; i++)
            blobs.push(this.getImage(`/assets/user${user}/image${i}.png`));

        return Promise.all(blobs);
    }

    private getImage(url: string): Promise<Blob> {
        return this.http.get(url, { responseType: 'blob' }).toPromise();
    }
}
