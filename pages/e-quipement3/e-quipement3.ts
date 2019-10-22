import { Component } from '@angular/core';
import { NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { FEUILLEDEQUIPEMENTPage } from '../f-euilledequipement/f-euilledequipement';
import { AJOUTFEUILLEDEQUIPEMENTPage } from '../a-joutfeuilledequipement/a-joutfeuilledequipement';
import { EQUIPEMENT4Page } from '../e-quipement4/e-quipement4';
import { EQUIPEMENT2Page } from '../e-quipement2/e-quipement2';
import { ModifFeuilleDequipementPage } from '../modif-feuille-dequipement/modif-feuille-dequipement';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-quipement3',
  templateUrl: 'e-quipement3.html'
})
export class EQUIPEMENT3Page {

  public idSur;
  public idEnt;
  public mesFeuilles = [];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');
    var page = this;

    this.apiProvider.getFeuillesDequipement(page.idEnt, page.idSur).then((val) => { 
      val.subscribe(function(response) {
        page.setMesFeuilles(response);
        page.apiProvider.getEquipementByCompagnie(page.idEnt).then((val) => {
          val.subscribe((reponse) => {
            page.setMesEquipement(reponse);
          });
        });
     });
   });
  }
  setMesEquipement(data){
    var page =this;
    data.forEach( function(param){
      page.mesFeuilles.forEach( function(params){
        if(params.id_equipement === param.id){
          params.lEquipement = param;
        }
      });
    });
  }
  setMesFeuilles(data){
    data.forEach( function(param){
      param.lEquipement = {
        "identification": ""
      }
    });
    this.mesFeuilles = data;
  }
  goToFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDEQUIPEMENTPage);
  }
  goToAJOUTFEUILLEDEQUIPEMENT(idS, idE){
    this.navCtrl.push(AJOUTFEUILLEDEQUIPEMENTPage, {idSur: idS, idEnt: idE});
  }
  goToEQUIPEMENT4(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT4Page);
  }
  goToEQUIPEMENT3(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT3Page);
  }
  goToEQUIPEMENT2(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT2Page,{},{animate:false});
  }
  presentActionSheet(fde) {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Afficher',
         handler: () => {
           console.log(fde)
           this.navCtrl.push(FEUILLEDEQUIPEMENTPage, {feuille: fde, idSur: this.idSur, idEnt: this.idEnt});
         }
       },
       {
         text: 'Modifier',
         handler: () => {
           this.navCtrl.push(ModifFeuilleDequipementPage , {feuille: fde, idSur: this.idSur, idEnt: this.idEnt});
         }
       }
     ]
   });
   actionSheet.present();
 }
}
