import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AJOUTFEUILLEDETEMPSPage } from '../a-joutfeuilledetemps/a-joutfeuilledetemps';
import { EMPLOYE4Page } from '../e-mploye4/e-mploye4';
import { EMPLOYE3Page } from '../e-mploye3/e-mploye3';
import { FEUILLEDETEMPSPage } from '../f-euilledetemps/f-euilledetemps';

@Component({
  selector: 'page-a-joutfeuilledetemps2',
  templateUrl: 'a-joutfeuilledetemps2.html'
})
export class AJOUTFEUILLEDETEMPS2Page {

  constructor(public navCtrl: NavController) {
  }
  goToAJOUTFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPSPage,{},{animate:false});
  }goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE4Page);
  }goToEMPLOYE3(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE3Page);
  }goToFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDETEMPSPage,{},{animate:false});
  }goToAJOUTFEUILLEDETEMPS2(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPS2Page,{},{animate:false});
  }
}
