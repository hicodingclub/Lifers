import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HackBaseService } from './hack.base.service';
import { Lifehacks_SERVER_ROOT_URI } from '../lifehacks.tokens';

@Injectable()
export class HackService extends HackBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Lifehacks_SERVER_ROOT_URI) private lifehacksServerRootUri: string) {
        super(http, lifehacksServerRootUri);
    }
    ngOnDestroy() { }
}
