import { Component } from '@angular/core';
import { EMPLOYEPage } from '../e-mploye/e-mploye';
import { EMPLOYE5Page } from '../e-mploye5/e-mploye5';
import { EMPLOYE4Page } from '../e-mploye4/e-mploye4';
import { AddEmployePage } from '../add-employe/add-employe';
import { ActionSheetController, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-mploye2',
  templateUrl: 'e-mploye2.html'
})
export class EMPLOYE2Page {
  public idEntreprise;
  public idSur;
  public mesEmployes = [];
  public myActiveEmployes = [];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.idEntreprise = navParams.get('idEnt');
    this.idSur = navParams.get('idSur');
    var page = this;

    this.apiProvider.getEmployeByCompagnie(page.idEntreprise).then((val) => { 
        val.subscribe(function(response) {
          page.setMesEmployes(response);
          page.storage.set('mesEmployeFor'+page.idEntreprise, response);
          //Retire les employes non-actifs de la liste et set le chemin vers leurs photos de profils

          for (let employe of page.mesEmployes) {
            if(employe.active === '1'){
              if(employe.profile_picture === "") {
                employe.haveLogo = false;
              }
              else{
                employe.profile_picture = "https://wyz.cegq.com/public/uploads/"+employe.id_entreprise+"/employee/"+employe.profile_picture;
                employe.haveLogo = true;
              }
              page.myActiveEmployes.push(employe);
            }
          }
      });
    });
  }
  setMesEmployes(data){
    this.mesEmployes = data;
  }
  goToEMPLOYE(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYEPage);
  }
  goToEMPLOYE5(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE5Page);
  }
  goToEMPLOYE2(idS, idE){
    this.navCtrl.push(EMPLOYE2Page, {idEnt: idE, idSur: idS});
  }
  goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE4Page,{},{animate:false});
  }
  goToAddEmployePage(id){
    this.navCtrl.push(AddEmployePage,{idEnt: id},{animate:false});
  }
  suppressEmploye(lEmploye){
    var page = this;
    var idSur;
    var idEnt;

    lEmploye.active = "0";
    page.apiProvider.putEmploye(lEmploye).then((val) => { 
      val.subscribe(function(response) {
          if(response){
            page.storage.get('idSur').then((val) => { 
              idSur = val;
              page.storage.get('idEnt').then((val2) => { 
                idEnt = val2;
                page.goToEMPLOYE2(idSur, idEnt);
             });
           });
          }
      });
    });
  }
 presentActionSheet(employe) {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Afficher',
         handler: () => {
           //console.log(employe);
           this.navCtrl.push(EMPLOYEPage,{lEmploye:employe},{animate:false});
         } 
       },
       {
         text: 'Modifier',
         handler: () => {
           this.navCtrl.push(EMPLOYE5Page,{lEmploye:employe},{animate:false});
         }
       },
       {
         text: 'Supprimer',
         handler: () => {
           this.suppressEmploye(employe);
           //rafraichier la page
         }
       }
     ]
   });
   actionSheet.present();
 }
}
