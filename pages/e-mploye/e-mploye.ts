import { Component } from '@angular/core';
import { NavController,  NavParams  } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-mploye',
  templateUrl: 'e-mploye.html'
})
export class EMPLOYEPage {
  public lEmploye;
  public laFonction;

  constructor(public navCtrl: NavController,  public navParams: NavParams, private apiProvider: ApiProvider) {
    this.lEmploye = navParams.get('lEmploye');
    var page = this;
    
    this.apiProvider.getFonctionById(page.lEmploye.id_fonction).then((val) => { 
        val.subscribe(function(response) {
          page.laFonction = JSON.parse(JSON.stringify(response)).value;
      });
    });
  }
  
}
