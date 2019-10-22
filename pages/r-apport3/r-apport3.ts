import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RAPPORT2Page } from '../r-apport2/r-apport2';
import { RAPPORTPage } from '../r-apport/r-apport';
import { RAPPORT4Page } from '../r-apport4/r-apport4';
import { RAPPORT5Page } from '../r-apport5/r-apport5';

@Component({
  selector: 'page-r-apport3',
  templateUrl: 'r-apport3.html'
})
export class RAPPORT3Page {

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
  goToRAPPORT4(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT4Page,{},{animate:false});
  }
  goToRAPPORT5(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT5Page,{},{animate:false});
  }
  
}
