import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EQUIPEMENT2Page } from '../e-quipement2/e-quipement2';
import { EQUIPEMENTPage } from '../e-quipement/e-quipement';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-quipement5',
  templateUrl: 'e-quipement5.html'
})
export class EQUIPEMENT5Page {

  public lEquipement

  public newidentification;
  public newtype;
  public newmarque;
  public newprofile_picture = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.lEquipement = navParams.get('lEquipement');
    
  }
  goToEQUIPEMENT2(idS, idE){
    this.navCtrl.push(EQUIPEMENT2Page, {idSur: idS, idEnt: idE});
  }
  goToEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENTPage);
  }
  goToEQUIPEMENT5(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT5Page);
  }
  putEquipement(identification, type, marque){
    var page = this;
    var newEquipement = {...this.lEquipement}; //clone l'equipement
    var idSur;
    var idEnt;

    newEquipement.identification = identification;
    newEquipement.type = type;
    newEquipement.marque = marque;

    this.apiProvider.putEquipement(newEquipement).then((val) => { 
      val.subscribe(function(response) {
        if(response){
          page.storage.get('idSur').then((val) => { 
            idSur = val;
            page.storage.get('idEnt').then((val2) => { 
              idEnt = val2;
              page.goToEQUIPEMENT2(idSur, idEnt);
            });
          });
        }
      });
    });
  }

}
