import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-f-euilledequipement',
  templateUrl: 'f-euilledequipement.html'
})
export class FEUILLEDEQUIPEMENTPage {

  public maFeuille;
  public totalPause;
  public totalTravail;
  public lEquipement ={};
  public idSur;
  public idEnt;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {
    this.maFeuille = this.navParams.get('feuille');
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');
    console.log(this.idEnt)
    this.calculTemps();
    var page = this;
    page.apiProvider.getProjetsByIdSur(this.idSur).then((val) => {
      val.subscribe((response) => {
        page.setProjet(response);
        page.apiProvider.getEquipementByCompagnie(this.idEnt).then((val) => {
          val.subscribe((response) => {
            page.setLEquipement(response);
          });
        });
      });
    });
    this.maFeuille.heure_debut = this.splitDate(this.maFeuille.heure_debut);
    this.maFeuille.heure_fin = this.splitDate(this.maFeuille.heure_fin);
  }
  setProjet(data){
    var page = this;
    data.forEach(function(val){
      if(val.id === page.maFeuille.id_projet) page.maFeuille.nom_projet = val.nom;
    });
  }
  setLEquipement(data){
    var page = this;
    data.forEach(function(val){
      if(val.id === page.maFeuille.id_equipement) page.lEquipement = val;
    });
  }
  splitDate(date){
    var a = date.split(' ');
    var b = a[1].split(':');
    return b[0]+":"+b[1];
  }
  calculTemps(){
    var debut = new Date(this.maFeuille.heure_debut);
    var fin = new Date(this.maFeuille.heure_fin);
    if(fin < debut){
      fin.setDate(fin.getDate() + 1);
    }
    var tmp = fin.getTime()-debut.getTime();
    this.totalTravail = this.msToTime(tmp);
  }
  msToTime(ms){
    var s = (ms / 1000);
    var date = new Date(null);
    date.setSeconds(s); // specify value for SECONDS here
    var result = date.toISOString().substr(11, 5);
    return result;
  }
  
}
