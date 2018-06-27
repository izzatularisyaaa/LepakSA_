import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LepaksaProvider } from '../../providers/lepaksa/lepaksa';
import { IcityPage } from '../icity/icity';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
//import { AppModule} from './app.module';

//platformBrowserDynamic().bootstrapModule(AppModule);

/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-main',
  templateUrl: 'main.html',
})
export class MainPage {

  dest;
  keyword;
  list = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public lepaksa: LepaksaProvider) {
   this.lepaksa.getAllDest().then((res: any) =>{
     this.dest = res;
   })
  }


  filterKeyword(){
    this.list = this.filter();
  }

  filter(){
    return this.dest.filter((list) =>{
      return list.dest.toLowerCase().indexOf(this.keyword.toLowerCase()) > -1;
    })
  }

  view(data){
    this.navCtrl.push(IcityPage, {detail: data});
  }
}
