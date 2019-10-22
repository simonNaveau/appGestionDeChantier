import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { EMPLOYE3Page } from '../e-mploye3/e-mploye3';
import { FEUILLEDETEMPSPage } from '../f-euilledetemps/f-euilledetemps';
import { AJOUTFEUILLEDETEMPS2Page } from '../a-joutfeuilledetemps2/a-joutfeuilledetemps2';
import { AJOUTFEUILLEDETEMPSPage } from '../a-joutfeuilledetemps/a-joutfeuilledetemps';
import { EMPLOYE2Page } from '../e-mploye2/e-mploye2';

@Component({
  selector: 'page-e-mploye4',
  templateUrl: 'e-mploye4.html'
})
export class EMPLOYE4Page {
  public idSur;
  public idEntreprise;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.idEntreprise = navParams.get('idEnt');
    this.idSur = navParams.get('idSur');
  }
  goToEMPLOYE3(idS, idE){
    this.navCtrl.push(EMPLOYE3Page, {idSur: idS, idEnt: idE});
  }
  goToFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDETEMPSPage);
  }
  goToAJOUTFEUILLEDETEMPS2(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPS2Page);
  }
  goToAJOUTFEUILLEDETEMPS(idS, idE){
    this.navCtrl.push(AJOUTFEUILLEDETEMPSPage, {idSur: idS, idEnt: idE});
  }
  goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE4Page);
  }
  goToEMPLOYE2(idEntreprise, id){
    this.navCtrl.push(EMPLOYE2Page,{idEnt: idEntreprise, idSur: id},{animate:false});
  }
}
