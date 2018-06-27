import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { EditPage } from '../edit/edit';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  
login = {
  email: "",
  password: ""
}
  

  constructor(public navCtrl: NavController, public navParams: NavParams,  public loadingCtrl: LoadingController,  public toastCtrl: ToastController, public alertCtrl: AlertController, public authService: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  btnLogin(){
  

  let loader = this.loadingCtrl.create({
    content: "Login loading..."
  })

  let toast = this.toastCtrl.create({
    message : "Login success",
    duration: 3000
  })

  let alert = this.alertCtrl.create({
    buttons: ["Dismiss"]
  })

  loader.present();
  this.authService.login(this.login).then((res: any) =>{
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
