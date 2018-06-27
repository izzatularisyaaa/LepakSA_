import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { LepaksaProvider } from '../../providers/lepaksa/lepaksa';
import { EditPage } from '../edit/edit';

/**
 * Generated class for the UpdatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-update',
  templateUrl: 'update.html',
})
export class UpdatePage {
  
  result;
  data = {
    id: "",
    owner: "",
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
  constructor(public navCtrl: NavController, public navParams: NavParams, public lepaksaService: LepaksaProvider, public loadingCtrl: LoadingController, public toastCtrl: ToastController, public alertCtrl: AlertController  ) {
    let id = this.navParams.get("editID");

    let loader = this.loadingCtrl.create({
      content: "Loading..."
    })

    loader.present();
    this.lepaksaService.editDest(id).then((res: any) =>{
      loader.dismiss();
      this.result = res;

      this.data = {
        id: this.result.destID,
        owner: this.result.destOwner,
        dest: this.result.dest,
        desc: this.result.destDesc,
        ophr: this.result.destOphr,
        addr: this.result.destAddr,
        phone: this.result.destPhone,
        actvty: this.result.destActvty,
        location: this.result.destLocation,
        ig: this.result.destIG,
        fb: this.result.destFB
      }
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UpdatePage');
  }

  btnSave(){
    let loader = this.loadingCtrl.create({
      content: "Update loading..."
    })

    let toast = this.toastCtrl.create({
      message: "Update success",
      duration: 3000
    })

    let alert = this.alertCtrl.create({
      buttons: ["Dismiss"]
    })

    loader.present();
    this.lepaksaService.updateDest(this.data).then((res: any) =>{
      if(res.success){
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
