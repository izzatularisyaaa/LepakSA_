import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MainPage } from '../main/main';
import { LoginPage } from '../login/login';
import { HelpPage } from '../help/help';

/**
 * Generated class for the HomiePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-homie',
  templateUrl: 'homie.html',
})
export class HomiePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomiePage');
  }

  btnUser(){
    this.navCtrl.push(MainPage);
  }

  btnAdmin(){
    this.navCtrl.push(LoginPage);
  }

  btnHelp(){
    this.navCtrl.push(HelpPage);
  }
}
