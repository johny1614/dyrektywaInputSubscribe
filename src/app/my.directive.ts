import { Directive, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirective implements OnInit {

  @Input()
  normalData: any;

  @Input()
  subData: any;

  ngOnInit(): void {
    console.log('dyrektywa onInit normalData', this.normalData);
    console.log('dyrektywa onInit subData', this.subData);
  }

}
