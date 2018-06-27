import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { LoginPage } from '../login/login';
import { AddPage } from '../add/add';
import { LepaksaProvider } from '../../providers/lepaksa/lepaksa';
import { UpdatePage } from '../update/update';

/**
 * Generated class for the EditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})
export class EditPage {

  dests = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController, public lepaksaService: LepaksaProvider ) {
    let loader = this.loadingCtrl.create({
      content: "LepakSA loading..."
    })

    loader.present();
    this.lepaksaService.getDest().then((res: any) =>{
      loader.dismiss();
      this.dests = res;
      console.log(this.dests);
    })
  }

  btnEdit(id){
    this.navCtrl.push(UpdatePage, {editID: id});
  }

  
  btnAdd(){
    this.navCtrl.push(AddPage);
  }

  btnSignout(){
    let loader = this.loadingCtrl.create({
      content: "Signout loading..."
    })

    let toast = this.toastCtrl.create({
      message: "Signout success",
      duration: 3000
    })

    let alert = this.alertCtrl.create({
      buttons: ["Dismiss"]
    })

    loader.present();
    this.authService.signout().then((res: any) =>{
      if(res.success){
        loader.dismiss();
        toast.present();
        this.navCtrl.setRoot(LoginPage);
      }
      else{
        loader.dismiss();
        alert.setMessage(res);
        alert.present();
      }
    })
  }
}
