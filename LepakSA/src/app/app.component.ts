//import { Component} from '@angular/core';
// import { Platform } from 'ionic-angular';
import {Component, ViewChild} from '@angular/core';
import {Nav, Platform} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { HomiePage } from '../pages/homie/homie';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { HelpPage } from '../pages/help/help';
import { IcityPage } from '../pages/icity/icity';
import { EditPage } from '../pages/edit/edit';
import { AddPage } from '../pages/add/add';
import { initializeApp } from 'firebase';
import {timer} from 'rxjs/observable/timer';

@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = HomiePage;

  pages: Array<{title: string, component: any}>;

  showSplash = true;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
 


   platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
    statusBar.styleDefault();
    splashScreen.hide();

     timer(3000).subscribe(() => this.showSplash = false)
    });
  }
}
  
