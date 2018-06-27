import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { LepaksaProvider } from '../../providers/lepaksa/lepaksa';

/**
 * Generated class for the IcityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-icity',
  templateUrl: 'icity.html',
})
export class IcityPage {
  
  dest = {
    destID : '',
    dest: '',
    destDesc: '',
    destOphr: '',
    destAddr: '',
    destPhone: '',
    destActvty: '',
    destLocation: '',
    destWebsite: '',
    destOwner: ''
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public loadingCtrl: LoadingController, public lepaksa: LepaksaProvider) {
    this.dest = this.navParams.get('detail');
  }

}
