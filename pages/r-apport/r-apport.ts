import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RAPPORT2Page } from '../r-apport2/r-apport2';
import { RAPPORT3Page } from '../r-apport3/r-apport3';
import { RAPPORT4Page } from '../r-apport4/r-apport4';
import { RAPPORT5Page } from '../r-apport5/r-apport5';

@Component({
  selector: 'page-r-apport',
  templateUrl: 'r-apport.html'
})
export class RAPPORTPage {

  constructor(public navCtrl: NavController) {
  }
  goToRAPPORT2(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT2Page,{},{animate:false});
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
