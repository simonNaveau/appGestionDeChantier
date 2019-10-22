import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RAPPORT2Page } from '../r-apport2/r-apport2';
import { RAPPORT3Page } from '../r-apport3/r-apport3';
import { RAPPORTPage } from '../r-apport/r-apport';
import { RAPPORT5Page } from '../r-apport5/r-apport5';

@Component({
  selector: 'page-r-apport4',
  templateUrl: 'r-apport4.html'
})
export class RAPPORT4Page {
  public CCQSelect: boolean = false;

  constructor(public navCtrl: NavController) {
  }
  
  goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTPage,{},{animate:false});
  }
  goToRAPPORT2(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT2Page,{},{animate:false});
  }
  goToRAPPORT3(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT3Page,{},{animate:false});
  }
  goToRAPPORT5(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT5Page,{},{animate:false});
  }
  CCQtoggle(){
    this.CCQSelect = !this.CCQSelect;
  }
}
