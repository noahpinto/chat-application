import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase , AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/RX';



/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

//@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username : string = '';
  message : string = '';
  _chatSubsription; 

  messages : object[] = [];

  constructor(public db : AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams);
    this.username = this.navParams.get('username');
    
   // console.log(this.username);
    
    this._chatSubsription = this.db.list('/chat').valueChanges().subscribe( data => {
          console.log(data);
             /*data.map(elem =>{
                  this.messages.push(elem);
             })*/
             this.messages = data;
        });

        
  }


   sendMessage()
   {
     this.db.list('/chat').push({
       username : this.username,
       message : this.message
     }).then(() => {

     })

     this.message='';
   }

   

   ionViewWillLeave()
   {
     console.log('user is about to go');
      this._chatSubsription.unsubscribe();
      this.db.list('/chat').push({
        specialMessage : true,
   message : this.username + ' has left the chat'
      })
    }

  ionViewDidLoad() {
  
    
    console.log('ionViewDidLoad ChatPage');
     this.db.list('/chat').push({
       specialMessage : true,
       message : this.username + ' has joined the chat'
     })
  }

}
