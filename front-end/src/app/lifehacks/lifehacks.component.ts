import { Component, OnInit } from '@angular/core';


import { ViewContainerRef,  Directive} from '@angular/core';
@Directive({
  selector: '[lifehacks-ref-select]',
})
export class LifehacksRefSelectDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

@Component({
  selector: 'app-lifehacks',
  templateUrl: './lifehacks.component.html',
  styleUrls: ['./lifehacks.component.css'],
})
export class LifehacksComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
