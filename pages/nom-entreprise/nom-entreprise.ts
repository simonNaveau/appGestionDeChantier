import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
import { Storage } from '@ionic/storage';

@Component({
  selector: 'page-nom-entreprise',
  templateUrl: 'nom-entreprise.html'
})
export class NomEntreprisePage {
  public name;
  public idEntreprise;
  public idSur;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage) {
    this.name = navParams.get('name');
    this.idEntreprise = navParams.get('id');  
    this.idSur = navParams.get('idSurintendant');
    this.storage.set('idEnt', this.idEntreprise);
  }
  goToPROJETS(idEntreprise, id){
    this.navCtrl.push(PROJETSPage, {idEnt: idEntreprise, idSur: id});
  }goToMESRAPPORTS(params){
    if (!params) params = {};
    this.navCtrl.push(MESRAPPORTSPage);
  }goToRAPPORTDUXXXXXXXX(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTDUXXXXXXXXPage);
  }goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTPage);
  }goToEMPLOYE4(idEntreprise, id){
    this.navCtrl.push(EMPLOYE4Page, {idEnt: idEntreprise, idSur: id});
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
  }goToEQUIPEMENT4(idEntreprise, id){
    this.navCtrl.push(EQUIPEMENT4Page, {idEnt: idEntreprise, idSur: id});
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
}
