import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Badge} from '@ionic-native/badge/ngx'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(
    public navCtrl: NavController,
    public badge: Badge
  ) {
  }

  upBadge(){
    this.badge.increase(1);
  }

  clearBadge(){
    this.badge.clear();
  }

}
