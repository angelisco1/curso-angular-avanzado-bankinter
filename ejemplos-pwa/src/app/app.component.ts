import { Component } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { PushService } from './push.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejemplos-pwa';

  constructor(private swPush: SwPush, private pushService: PushService) {
    this.swPush.requestSubscription({
      serverPublicKey: 'BJ1h9PlNsj3WJYTgSic42UA6zQFr6h6hC0sbjjHdnxt2ziaure2W9CEh18upyBAK_XQnHIHNrvS0DaIFoV3RzVo'
    })
      .then(suscripcion => {
        this.pushService.createSuscripcionPush(suscripcion)
          .subscribe((resp: any) => console.log(resp))
      })
      .catch(err => {
        console.log('Err: ', err)
      })
  }
}
