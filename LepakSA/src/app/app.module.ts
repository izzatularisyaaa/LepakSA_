import { IonicImageViewerModule } from 'ionic-img-viewer';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { MyApp } from './app.component';
import { HomiePage } from '../pages/homie/homie';
import { LoginPage } from '../pages/login/login';
import { MainPage } from '../pages/main/main';
import { HelpPage } from '../pages/help/help';
import { IcityPage } from '../pages/icity/icity';
import { config } from './app.firebase';
import { EditPage } from '../pages/edit/edit';
import { AuthProvider } from '../providers/auth/auth';
import { AddPage } from '../pages/add/add';
import { LepaksaProvider } from '../providers/lepaksa/lepaksa';
import { UpdatePage } from '../pages/update/update';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';
import { File } from '@ionic-native/file'; 

@NgModule({
  declarations: [
    MyApp,
    HomiePage, 
    LoginPage,
    MainPage,
    HelpPage,
    IcityPage,
    EditPage,
    AddPage,
    UpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicImageViewerModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomiePage,
    LoginPage,
    MainPage,
    HelpPage,
    IcityPage,
    EditPage,
    AddPage,
    UpdatePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AngularFireAuth,
    AuthProvider,
    LepaksaProvider
  ]
})
export class AppModule {}
