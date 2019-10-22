import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EQUIPEMENT2Page } from '../e-quipement2/e-quipement2';
import { EQUIPEMENTPage } from '../e-quipement/e-quipement';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-add-equipement',
  templateUrl: 'add-equipement.html',
})
export class AddEquipementPage {

  public idEntreprise
  public mesFonctions = [];
  public selected = false;
  public newFonctionValue;

  public newnom;
  public newprenom;
  public newcourriel;
  public newcellulaire;
  public newid_fonction;
  public newprofile_picture = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.idEntreprise = navParams.get('idEnt');
    var page = this;

    this.apiProvider.getFonctionsByCompagnie(page.idEntreprise).then((val) => { 
        val.subscribe(function(response) {
          page.setMesFonctions(response);
          page.storage.set('mesFonctionsFor'+page.idEntreprise, response);
      });
    });
  }
  detectAutre(id){
    this.newid_fonction = id;
    this.selected = false;
  }
  setSelect(value){
    this.selected = true;
    this.newFonctionValue
  }
  setMesFonctions(data){
    this.mesFonctions = data;
  }
  goToEQUIPEMENT2(idS, idE){
    this.navCtrl.push(EQUIPEMENT2Page, {idEnt: idE, idSur: idS});
  }
  goToEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENTPage);
  }
  goToAddEquipementPage(params){
    if (!params) params = {};
    this.navCtrl.push(AddEquipementPage);
  }
  
  createEquipement(identification, type, marque, idEnt){
    var page = this;
    var idSur;
    var idEnt;

    var newEquipement = {
      "identification": identification,
      "type": type,
      "marque": marque,
      "id_entreprise": idEnt,
      "active": "1",
      "picture": ""
    }

    this.apiProvider.createEquipement(newEquipement).then((val) => { 
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