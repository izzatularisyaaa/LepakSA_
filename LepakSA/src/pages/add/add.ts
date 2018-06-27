import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { LepaksaProvider } from '../../providers/lepaksa/lepaksa';
import { EditPage } from '../edit/edit';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  dest = {
    dest: "",
    desc: "",
    ophr: "",
    addr: "",
    phone: "",
    actvty: "",
    location: "",
    ig: "",
    fb: ""
       
  }
  
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public lepaksaService: LepaksaProvider, public loadingCtrl: LoadingController, 
    public toastCtrl: ToastController, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  btnSave(){
    let loader = this.loadingCtrl.create({
      content: "Create loading..."
    })

    let toast = this.toastCtrl.create({
      message: "Create success",
      duration: 3000
    })

    let alert = this.alertCtrl.create({
      buttons: ["Dismiss"]
    })

    loader.present();
    this.lepaksaService.createDest(this.dest).then((res: any) =>{ 
      if(res.sucess){
        loader.dismiss();
        toast.present();
        this.navCtrl.setRoot(EditPage);
      }
      else{
        loader.dismiss();
        alert.setMessage(res);
        alert.present();
      }
    })
  }
}
