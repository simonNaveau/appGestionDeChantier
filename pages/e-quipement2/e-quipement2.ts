import { Component } from '@angular/core';
import { NavController, ActionSheetController, NavParams } from 'ionic-angular';
import { EQUIPEMENTPage } from '../e-quipement/e-quipement';
import { EQUIPEMENT5Page } from '../e-quipement5/e-quipement5';
import { EQUIPEMENT4Page } from '../e-quipement4/e-quipement4';
import { AddEquipementPage } from '../add-equipement/add-equipement';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-quipement2',
  templateUrl: 'e-quipement2.html'
})
export class EQUIPEMENT2Page {
  public idEntreprise;
  public idSur;
  public mesEquipements = [];
  public myActiveEquipements = [];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.idEntreprise = navParams.get('idEnt');
    this.idSur = navParams.get('idSur');
    var page = this;

    this.apiProvider.getEquipementByCompagnie(page.idEntreprise).then((val) => { 
        val.subscribe(function(response) {
          page.setMesEquipements(response);
          page.storage.set('mesEmployeFor'+page.idEntreprise, response);
          
          //Retire les equipements non-actifs de la liste et set le chemin vers leurs photos de profils
          for (let equipement of page.mesEquipements) {
            if(equipement.active === '1'){
              if(equipement.picture === "") {
                equipement.haveLogo = false;
              }
              else{
                equipement.picture = "https://wyz.cegq.com/public/uploads/"+equipement.id_entreprise+"/equipement/"+equipement.picture;
                equipement.haveLogo = true;
              }
              page.myActiveEquipements.push(equipement);
            }
          }
      });
    });
  }
  setMesEquipements(data){
    this.mesEquipements = data;
  }
  goToEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENTPage);
  }
  goToEQUIPEMENT5(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT5Page);
  }
  goToEQUIPEMENT2(idS, idE){
    this.navCtrl.push(EQUIPEMENT2Page, {idSur: idS, idEnt: idE});
  }
  goToEQUIPEMENT4(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT4Page,{},{animate:false});
  }
  goToAddEquipement(id){
    this.navCtrl.push(AddEquipementPage,{idEnt: id},{animate:false});
  }
  suppressEquipement(lEquipement){
    var page = this;
    var idSur;
    var idEnt;

    lEquipement.active = "0";
    page.apiProvider.putEquipement(lEquipement).then((val) => { 
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
  presentActionSheet(equipement) {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Afficher',
         handler: () => {
           this.navCtrl.push(EQUIPEMENTPage,{lEquipement:equipement},{animate:false});
         }
       },
       {
         text: 'Modifier',
         handler: () => {
           this.navCtrl.push(EQUIPEMENT5Page,{lEquipement: equipement},{animate:false});
         }
       },
       {
         text: 'Supprimer',
         handler: () => {
           this.suppressEquipement(equipement);
         }
       }
     ]
   });
   actionSheet.present();
 }
}
