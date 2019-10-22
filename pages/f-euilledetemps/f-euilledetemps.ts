import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-f-euilledetemps',
  templateUrl: 'f-euilledetemps.html'
})
export class FEUILLEDETEMPSPage {

  public maFeuille;
  public totalPause;
  public totalTravail;
  public totalTravaillee;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.maFeuille = this.navParams.get('feuille');
    this.calculTemps();
  }

  calculTemps(){
    this.totalPause = Number.parseInt(this.maFeuille.pause_matin) + Number.parseInt(this.maFeuille.pause_midi) + Number.parseInt(this.maFeuille.pause_apres_midi);
    
    var debut = new Date(this.maFeuille.heure_debut);
    var fin = new Date(this.maFeuille.heure_fin);
    if(fin < debut){
      fin.setDate(fin.getDate() + 1);
    }
    var tmp = fin.getTime()-debut.getTime();
    this.totalTravail = this.msToTime(tmp);
    this.totalTravaillee = this.msToTime(tmp - (this.totalPause * 60000));
  }
  msToTime(ms){
    var s = (ms / 1000);
    var date = new Date(null);
    date.setSeconds(s); // specify value for SECONDS here
    var result = date.toISOString().substr(11, 5);
    return result;
  }
  
}
