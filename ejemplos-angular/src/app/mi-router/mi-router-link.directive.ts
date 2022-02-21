import { Directive, HostBinding, HostListener, Input } from '@angular/core';
import { MiRouterService } from './mi-router.service';

@Directive({
  selector: '[appMiRouterLink]'
})
export class MiRouterLinkDirective {
  @HostBinding('style') styles = {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline'
  }

  @Input('appMiRouterLink') path: Array<string> = ['/'];

  constructor(private miRouter: MiRouterService) { }

  @HostListener('click') onClick() {
    this.miRouter.navigate(this.path)
  }

}
