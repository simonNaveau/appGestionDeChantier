import { Component } from '@angular/core';
import { NavController, ActionSheetController, NavParams   } from 'ionic-angular';
import { FEUILLEDETEMPSPage } from '../f-euilledetemps/f-euilledetemps';
import { AJOUTFEUILLEDETEMPSPage } from '../a-joutfeuilledetemps/a-joutfeuilledetemps';
import { EMPLOYE4Page } from '../e-mploye4/e-mploye4';
import { EMPLOYE2Page } from '../e-mploye2/e-mploye2';
import { ModifFeuilleDeTempsPage} from '../modif-feuille-de-temps/modif-feuille-de-temps';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-mploye3',
  templateUrl: 'e-mploye3.html'
})
export class EMPLOYE3Page {

  public idSur;
  public idEnt;
  public mesFeuilles = [];

  constructor(public actionSheetCtrl: ActionSheetController, public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');
    var page = this;

    this.apiProvider.getFeuillesDeTemps(page.idEnt, page.idSur).then((val) => { 
      val.subscribe(function(response) {
        page.setMesFeuilles(response);
        page.apiProvider.getEmployeByCompagnie(page.idEnt).then((val) => {
          val.subscribe((reponse) => {
            page.setMesEmploye(reponse);
          });
        });
        
     });
   });
  }
  setMesEmploye(data){
    var page =this;
    data.forEach( function(param){
      page.mesFeuilles.forEach( function(params){
        if(params.id_employee === param.id){
          params.lEmploye = param;
        }
      });
    });
  }
  setMesFeuilles(data){
    data.forEach( function(param){
      param.lEmploye = {
        "nom": "",
        "prenom" : ""
      }
    });
    this.mesFeuilles = data;

  }
  goToFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDETEMPSPage);
  }
  goToAJOUTFEUILLEDETEMPS(idS, idE){
    this.navCtrl.push(AJOUTFEUILLEDETEMPSPage, {idSur: idS, idEnt: idE});
  }
  goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE4Page,{},{animate:false});
  }
  goToEMPLOYE3(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE3Page,{},{animate:false});
  }
  goToEMPLOYE2(idS, idE){
    this.navCtrl.push(EMPLOYE2Page, {idSur: idS, idEnt: idE},{animate:false});
  }
   presentActionSheet(fdt) {
   let actionSheet = this.actionSheetCtrl.create({
     buttons: [
       {
         text: 'Afficher',
         handler: () => {
            this.navCtrl.push(FEUILLEDETEMPSPage, {feuille: fdt});
         }
       },
       {
         text: 'Modifier',
         handler: () => {
           console.log(fdt)
           this.navCtrl.push(ModifFeuilleDeTempsPage, {feuille: fdt, idSur: this.idSur, idEnt: this.idEnt});
         }
       }
     ]
   });
   actionSheet.present();
 }
}
