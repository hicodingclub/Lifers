import { Component } from '@angular/core';
import { HackService } from '../../lifehacks/hack/hack.service';

@Component({
  selector: 'allHacks-hack-component',
  templateUrl: './Hacks.component.html',
  styleUrls: ['./Hacks.component.css']
})
export class HacksComponent {
    private hacks;
    constructor(protected hackService: HackService) {
        const result = this.hackService.getList(1,25,{}).subscribe(
           result => { 
              this.hacks = result.items;
           },
        );
    }
}
