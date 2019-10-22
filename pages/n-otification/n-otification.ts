import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NOTIFICATION2Page } from '../n-otification2/n-otification2';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-n-otification',
  templateUrl: 'n-otification.html'
})
export class NOTIFICATIONPage {
  public notifListe = [];

  constructor(public navCtrl: NavController, private apiProvider: ApiProvider, private storage: Storage) {
    var page = this;
    this.storage.get('idSur').then((val) => {
      page.apiProvider.getNotificationsById(val).then((val) => {
        val.subscribe((response) => {
          this.setListeNotif(response);
        });
      });
    });
  }
  setListeNotif(data){
    this.notifListe = data;
  }
  getBackgroundColor(color) { 
    switch (color) {
      case 'danger':
        return '#E2BEBD';
      case 'warning':
        return '#DFD5BA';
      case 'info':
        return '#B0CEDE';
      case 'success':
        return '#dff0d8';
    }
  }
  getBorderColor(color) { 
    switch (color) {
      case 'danger':
        return '#A94442';
      case 'warning':
        return '#8A6D3B';
      case 'info':
        return '#31708F';
      case 'success':
        return '#3C763D';
    }
  }
  goToNOTIFICATION2(notif){
    this.navCtrl.push(NOTIFICATION2Page, {laNotif: notif});
  }
}
