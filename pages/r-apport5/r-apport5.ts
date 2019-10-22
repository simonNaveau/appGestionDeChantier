import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RAPPORT2Page } from '../r-apport2/r-apport2';
import { RAPPORT3Page } from '../r-apport3/r-apport3';
import { RAPPORT4Page } from '../r-apport4/r-apport4';
import { RAPPORTPage } from '../r-apport/r-apport';

@Component({
  selector: 'page-r-apport5',
  templateUrl: 'r-apport5.html'
})
export class RAPPORT5Page {
  public buttonClicked1: boolean = false;
  public buttonClicked2: boolean = false;
  public buttonClicked3: boolean = false;
  public buttonClicked4: boolean = false;
  public buttonClicked5: boolean = false;
  public buttonClicked6: boolean = false;
  public buttonClicked7: boolean = false;
  public buttonClicked8: boolean = false;
  public buttonClicked9: boolean = false;
  public buttonClicked10: boolean = false;
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
  goToRAPPORT4(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORT4Page,{},{animate:false});
  }
  onButtonClick1() {
    this.buttonClicked1 = !this.buttonClicked1;
 }
 onButtonClick2() {
  this.buttonClicked2 = !this.buttonClicked2;
}  
onButtonClick3() {
  this.buttonClicked3 = !this.buttonClicked3;
}  
onButtonClick4() {
  this.buttonClicked4 = !this.buttonClicked4;
}  
onButtonClick5() {
  this.buttonClicked5 = !this.buttonClicked5;
}  
onButtonClick6() {
  this.buttonClicked6 = !this.buttonClicked6;
}  
onButtonClick7() {
  this.buttonClicked7 = !this.buttonClicked7;
} 
onButtonClick8() {
  this.buttonClicked8 = !this.buttonClicked8;
}  
onButtonClick9() {
  this.buttonClicked9 = !this.buttonClicked9;
}  
onButtonClick10() {
  this.buttonClicked10 = !this.buttonClicked10;
}   
}
