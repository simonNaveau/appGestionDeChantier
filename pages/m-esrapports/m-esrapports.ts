import { Component } from '@angular/core';
import {ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { RAPPORTDUXXXXXXXXPage } from '../r-apportduxxxxxxxx/r-apportduxxxxxxxx';
import { RAPPORTPage } from '../r-apport/r-apport';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-m-esrapports',
  templateUrl: 'm-esrapports.html'
})
export class MESRAPPORTSPage {
  public idProjet;
  public mesRapports = [];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.idProjet = navParams.get('id');
    console.log(this.idProjet);
    var page = this;
    this.apiProvider.getRapportByProjet(page.idProjet).then((val) => { 
        val.subscribe(function(response) {
          page.setMesRapports(response);
          page.storage.set('mesRapportsFor'+page.idProjet, response);
      });
    });
  }

  setMesRapports(data){
    this.mesRapports = data;
  }
  goToRAPPORTDUXXXXXXXX(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTDUXXXXXXXXPage);
  }goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTPage);
  }
  presentActionSheet() {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Afficher',
         handler: () => {
           this.navCtrl.push(RAPPORTDUXXXXXXXXPage);
         }
       },
       {
         text: 'Modifier',
         handler: () => {
           this.navCtrl.push(RAPPORTPage);
         }
       },
       {
         text: 'Telecharger',
         handler: () => {
          console.log("Telechargement du fichier");
         }
       },
       {
         text: 'Envoyer',
         handler: () => {
           console.log("Envoi par mail");
         }
       }
     ]
   });
   actionSheet.present();
 }
}
