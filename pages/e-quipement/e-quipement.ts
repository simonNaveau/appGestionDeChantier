import { Component } from '@angular/core';
import { NavController,  NavParams  } from 'ionic-angular';

@Component({
  selector: 'page-e-quipement',
  templateUrl: 'e-quipement.html'
})
export class EQUIPEMENTPage {
  public lEquipement;

  constructor(public navCtrl: NavController,  public navParams: NavParams) {
    this.lEquipement = navParams.get('lEquipement');
  }
  
}

