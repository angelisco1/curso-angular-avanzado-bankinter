import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appMiHost]'
})
export class MiHostDirective {

  constructor(public viewContainerRef: ViewContainerRef) { }

}
