import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the LepaksaProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LepaksaProvider {

  lepaksaData = firebase.database().ref('dest');

  constructor(public afireauth: AngularFireAuth) {
    console.log('Hello LepaksaProvider Provider');
  }

  createDest(dest){
    var promise = new Promise((resolve, reject) =>{
      let id = this.lepaksaData.child('dest').push().key;

      this.lepaksaData.child(id).set({
       destID : id,
       dest: dest.dest,
       destDesc: dest.desc,
       destOphr: dest.ophr,
       destAddr: dest.addr,
       destPhone: dest.phone,
       destActvty: dest.actvty,
       destLocation: dest.location,
       destIG: dest.ig,
       destFB: dest.fb,
        destOwner: this.afireauth.auth.currentUser.uid
      }).then(() =>{
        resolve({sucess: true});
      }).catch((err) =>{
        resolve(err);
      })
    })

    return promise;
  }

  getAllDest(){
    let data = [];
    let result = [];

    var promise = new Promise((resolve, reject) =>{
      this.lepaksaData.orderByChild('dest').once('value', (snapshot) =>{
        data = snapshot.val();

        for(var list in data){
          result.push(data[list]);
        }
      }).then(() =>{
        resolve(result);
      }).catch((err) =>{
        resolve(err);
      })
    })

    return promise;
  }
  getDest(){
    let data = [];
    let result = [];
    var promise = new Promise((resolve, reject) =>{
      this.lepaksaData.orderByChild('dest').once('value', (snapshot) =>{
        data = snapshot.val();

        for(var list in data){
          if(data[list].destOwner == this.afireauth.auth.currentUser.uid){
            result.push(data[list]);
          }
        }
      }).then(() =>{
        resolve(result);
      }).catch((err) =>{
        resolve(err);
      })
    })

    return promise;
  }

  editDest(id){
    let data = [];
    var promise = new Promise((resolve, reject) =>{
      this.lepaksaData.child(id).once('value', (snapshot) =>{
        data = snapshot.val();
      }).then(() =>{
        resolve(data);
      }).catch((err) =>{
        resolve(err);
      })
    })

    return promise;
  }

  updateDest(dest){
    var promise = new Promise((resolve, reject) =>{
      this.lepaksaData.child(dest.id).set({
        destID: dest.id,
        dest: dest.dest,
       destDesc: dest.desc,
       destOphr: dest.ophr,
       destAddr: dest.addr,
       destPhone: dest.phone,
       destActvty: dest.actvty,
       destLocation: dest.location,
       destIG: dest.ig,
       destFB: dest.fb,
       destOwner: dest.owner
      }).then(() =>{
        resolve({success: true});
      }).catch((err) =>{
        resolve(err);
      })
    })

    return promise;
  }
}
