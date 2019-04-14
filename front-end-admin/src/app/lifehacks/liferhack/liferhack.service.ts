import { Injectable, Inject, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LiferhackBaseService } from './liferhack.base.service';
import { Lifehacks_SERVER_ROOT_URI } from '../lifehacks.tokens';

@Injectable()
export class LiferhackService extends LiferhackBaseService implements OnDestroy {
    constructor(
        http: HttpClient,
        @Inject(Lifehacks_SERVER_ROOT_URI) private lifehacksServerRootUri: string) {
        super(http, lifehacksServerRootUri);
    }
    ngOnDestroy() { }
}
