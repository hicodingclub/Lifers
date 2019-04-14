import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LiferBaseService } from './lifer.base.service';
import { Lifehacks_SERVER_ROOT_URI } from '../lifehacks.tokens';

@Injectable()
export class LiferService extends LiferBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Lifehacks_SERVER_ROOT_URI) private lifehacksServerRootUri: string) {
        super(http, lifehacksServerRootUri);
    }
    ngOnDestroy() { }
}
