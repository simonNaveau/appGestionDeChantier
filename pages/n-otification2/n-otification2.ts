import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-n-otification2',
  templateUrl: 'n-otification2.html'
})
export class NOTIFICATION2Page {
  public notification;
  public nom = "Chargement ..."
  public lEntreprise = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
    var page = this;
    this.notification = this.navParams.get('laNotif');
    this.apiProvider.getEntrepriseById(this.notification.entreprise_id).then((val) => {
      val.subscribe((response) => {
        page.setLentreprise(response);
      });
    });
    this.apiProvider.setNotificationView(this.notification.id_notification, this.notification.id_surrintendant).then((val) => {
      val.subscribe((response) => {
      });
    });

  }
  setLentreprise(data){
    console.log(data);
    this.lEntreprise = data[0];
    this.nom = data[0].nom;
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
}
