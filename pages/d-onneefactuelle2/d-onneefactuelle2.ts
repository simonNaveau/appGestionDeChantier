import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EQUIPEMENT5Page } from '../e-quipement5/e-quipement5';
import { EQUIPEMENT2Page } from '../e-quipement2/e-quipement2';
import { EQUIPEMENTPage } from '../e-quipement/e-quipement';
import { RAPPORT2Page } from '../r-apport2/r-apport2';
import { DONNEEFACTUELLEPage } from '../d-onneefactuelle/d-onneefactuelle';
import { EMPLOYE5Page } from '../e-mploye5/e-mploye5';
import { EMPLOYE2Page } from '../e-mploye2/e-mploye2';
import { EMPLOYEPage } from '../e-mploye/e-mploye';
import { DONNEEFACTUELLE3Page } from '../d-onneefactuelle3/d-onneefactuelle3';
import { DONNEEFACTUELLE4Page } from '../d-onneefactuelle4/d-onneefactuelle4';


@Component({
  selector: 'page-d-onneefactuelle2',
  templateUrl: 'd-onneefactuelle2.html'
})
export class DONNEEFACTUELLE2Page {

  constructor(public navCtrl: NavController) {
  }
  goToEQUIPEMENT5(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT5Page);
  }goToEQUIPEMENT2(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT2Page);
  }goToEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENTPage);
  }goToRAPPORT2(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT2Page);
  }goToDONNEEFACTUELLE(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLEPage);
  }goToEMPLOYE5(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE5Page);
  }goToEMPLOYE2(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE2Page);
  }goToEMPLOYE(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYEPage);
  }goToDONNEEFACTUELLE3(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLE3Page);
  }goToDONNEEFACTUELLE4(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLE4Page);
  }goToDONNEEFACTUELLE2(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLE2Page);
  }
}
