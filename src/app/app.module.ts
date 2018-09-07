import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireModule } from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyB3sPOrhRBKyieQ3eiOBntBpmoxL7jmK-E",
  authDomain: "chatapp-bd54b.firebaseapp.com",
  databaseURL: "https://chatapp-bd54b.firebaseio.com",
  projectId: "chatapp-bd54b",
  storageBucket: "chatapp-bd54b.appspot.com",
  messagingSenderId: "674076496388"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
