import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MESRAPPORTSPage } from '../m-esrapports/m-esrapports';
import { RAPPORTDUXXXXXXXXPage } from '../r-apportduxxxxxxxx/r-apportduxxxxxxxx';
import { RAPPORTPage } from '../r-apport/r-apport';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-p-rojets',
  templateUrl: 'p-rojets.html'
})
export class PROJETSPage {
  public idEntreprise;
  public idSur;
  public mesProjets = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.idEntreprise = navParams.get('idEnt');
    this.idSur = navParams.get('idSur');
    var page = this;
    
    this.apiProvider.getProjetsById(this.idEntreprise, this.idSur).then((val) => { 
        val.subscribe(function(response) {
          page.setMesProjets(response);
          page.storage.set('mesProjets', response);
      });
    });
  }
  setMesProjets(data){
    this.mesProjets = data;
  }
  goToMESRAPPORTS(projectId){
    this.navCtrl.push(MESRAPPORTSPage, { id: projectId});
  }goToRAPPORTDUXXXXXXXX(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTDUXXXXXXXXPage);
  }goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.push(RAPPORTPage);
  }
}
