//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  authData = firebase.database().ref('User');

  constructor(public afireauth: AngularFireAuth, ) {
    
  }

login(login){
  var promise = new Promise((resolve, reject) =>{
    this.afireauth.auth.signInWithEmailAndPassword(login.email, login.password).then(() =>{
      resolve({success: true});   
    }).catch((err) =>{
      resolve(err);
    })
  })
  return promise;
 } 
 
 signout(){
  var promise = new Promise((resolve, reject) =>{
    this.afireauth.auth.signOut().then(() =>{
      resolve({success: true});
    }).catch((err) =>{
      resolve(err);
    })
  })
  return promise;
 }
}
