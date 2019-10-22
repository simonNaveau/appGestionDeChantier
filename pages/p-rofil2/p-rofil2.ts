import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';
import { PROFILPage } from '../p-rofil/p-rofil';
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-p-rofil2',
  templateUrl: 'p-rofil2.html'
})
export class PROFIL2Page {
  public origin = [];

  public newnom;
  public newprenom;
  public newcourriel;
  public newcellulaire;
  public newtitre;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider, public storage: Storage, private toastCtrl: ToastController) {
    this.origin = navParams.get('mesInfos');
  }
  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Update Error',
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }
  goToPROFIL(){
    this.navCtrl.push(PROFILPage);
  }

  putProfil(nom, prenom, courriel, titre, cellulaire){
    var page = this;
    page.storage.get('idSur').then((val) =>{
      page.apiProvider.putProfil(nom, prenom, courriel, titre, cellulaire, val).then((val2) => {
        val2.subscribe((reponse) => {
          if(reponse){
            page.goToPROFIL();
          }else{
            page.presentToast();
          }
        });
      }); 
    });  
  }
}
