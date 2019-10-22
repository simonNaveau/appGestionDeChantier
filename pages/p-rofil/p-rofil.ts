import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PROFIL2Page } from '../p-rofil2/p-rofil2';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-p-rofil',
  templateUrl: 'p-rofil.html'
})
export class PROFILPage {
  public mesInfos = [];

  constructor(public navCtrl: NavController, public storage: Storage, public apiProvider: ApiProvider){
    var page = this;
    storage.get("idSur").then((val) => {
      page.apiProvider.getUserDetail(val).then((val) => {
        val.subscribe((response) => {
          page.setMesInfos(response);
          page.storage.set('infosSur', response);
        });
      });
    });
  }
  setMesInfos(data){
    this.mesInfos = data;
  }
  goToPROFIL2(data){
    this.navCtrl.push(PROFIL2Page, {mesInfos: data});
  }
}