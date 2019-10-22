import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NomEntreprisePage } from '../nom-entreprise/nom-entreprise';
import { PROJETSPage } from '../p-rojets/p-rojets';
import { MESRAPPORTSPage } from '../m-esrapports/m-esrapports';
import { RAPPORTDUXXXXXXXXPage } from '../r-apportduxxxxxxxx/r-apportduxxxxxxxx';
import { RAPPORTPage } from '../r-apport/r-apport';
import { EMPLOYE4Page } from '../e-mploye4/e-mploye4';
import { EMPLOYE3Page } from '../e-mploye3/e-mploye3';
import { FEUILLEDETEMPSPage } from '../f-euilledetemps/f-euilledetemps';
import { AJOUTFEUILLEDETEMPS2Page } from '../a-joutfeuilledetemps2/a-joutfeuilledetemps2';
import { AJOUTFEUILLEDETEMPSPage } from '../a-joutfeuilledetemps/a-joutfeuilledetemps';
import { EQUIPEMENT4Page } from '../e-quipement4/e-quipement4';
import { EQUIPEMENT3Page } from '../e-quipement3/e-quipement3';
import { FEUILLEDEQUIPEMENTPage } from '../f-euilledequipement/f-euilledequipement';
import { AJOUTFEUILLEDEQUIPEMENTPage } from '../a-joutfeuilledequipement/a-joutfeuilledequipement';
import { ApiProvider } from '../../providers/api/api';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-m-esentreprises',
  templateUrl: 'm-esentreprises.html'
})
export class MESENTREPRISESPage {
   public mesEntreprises = []

  constructor(private apiProvider: ApiProvider, public navCtrl: NavController, public storage: Storage) {
    var page = this;
 
    this.storage.get('idSur').then((val) => { 
      page.apiProvider.getCompagniesByIdSur(val).then((val) => { 
          val.subscribe(function(response) {
            page.setMesEntreprises(response);
            page.storage.set('mesEntreprises', response);
        });
      });
   });

  }

  setMesEntreprises(data){
    this.mesEntreprises = data;
  }
  goToNomEntreprise(Thename, Theid, idSur){
    this.navCtrl.push(NomEntreprisePage, { id: Theid, name: Thename, idSurintendant: idSur });
  }goToPROJETS(params){
    if (!params) params = {};
    this.navCtrl.push(PROJETSPage);
  }goToMESRAPPORTS(params){
    if (!params) params = {};
    this.navCtrl.push(MESRAPPORTSPage);
  }goToRAPPORTDUXXXXXXXX(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTDUXXXXXXXXPage);
  }goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTPage);
  }goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE4Page);
  }goToEMPLOYE3(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE3Page);
  }goToFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDETEMPSPage);
  }goToAJOUTFEUILLEDETEMPS2(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPS2Page);
  }goToAJOUTFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPSPage);
  }goToEQUIPEMENT4(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT4Page);
  }goToEQUIPEMENT3(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT3Page);
  }goToFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDEQUIPEMENTPage);
  }goToAJOUTFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDEQUIPEMENTPage);
  }
  error(){
    console.log("image introuvable");
  }
}
