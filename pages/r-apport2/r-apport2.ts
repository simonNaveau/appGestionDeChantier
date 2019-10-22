import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DONNEEFACTUELLEPage } from '../d-onneefactuelle/d-onneefactuelle';
import { EMPLOYE5Page } from '../e-mploye5/e-mploye5';
import { EMPLOYE2Page } from '../e-mploye2/e-mploye2';
import { EMPLOYEPage } from '../e-mploye/e-mploye';
import { DONNEEFACTUELLE3Page } from '../d-onneefactuelle3/d-onneefactuelle3';
import { DONNEEFACTUELLE4Page } from '../d-onneefactuelle4/d-onneefactuelle4';
import { DONNEEFACTUELLE2Page } from '../d-onneefactuelle2/d-onneefactuelle2';
import { EQUIPEMENT5Page } from '../e-quipement5/e-quipement5';
import { EQUIPEMENT2Page } from '../e-quipement2/e-quipement2';
import { EQUIPEMENTPage } from '../e-quipement/e-quipement';
import { RAPPORTPage } from '../r-apport/r-apport';
import { RAPPORT3Page } from '../r-apport3/r-apport3';
import { RAPPORT4Page } from '../r-apport4/r-apport4';
import { RAPPORT5Page } from '../r-apport5/r-apport5';

@Component({
  selector: 'page-r-apport2',
  templateUrl: 'r-apport2.html'
})
export class RAPPORT2Page {

  constructor(public navCtrl: NavController) {
  }
  goToDONNEEFACTUELLE(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLEPage);
  }
  goToEMPLOYE5(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE5Page);
  }
  goToEMPLOYE2(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE2Page);
  }
  goToEMPLOYE(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYEPage);
  }
  goToRAPPORT2(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT2Page);
  }
  goToDONNEEFACTUELLE3(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLE3Page);
  }
  goToDONNEEFACTUELLE4(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLE4Page);
  }
  goToDONNEEFACTUELLE2(params){
    if (!params) params = {};
    this.navCtrl.push(DONNEEFACTUELLE2Page);
  }
  goToEQUIPEMENT5(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT5Page);
  }
  goToEQUIPEMENT2(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT2Page);
  }
  goToEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENTPage,{},{animate:false});
  }
  goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTPage,{},{animate:false});
  }
  goToRAPPORT3(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT3Page,{},{animate:false});
  }
  goToRAPPORT4(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT4Page,{},{animate:false});
  }
  goToRAPPORT5(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT5Page,{},{animate:false});
  }
}

