import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiProvider } from '../../providers/api/api';
import { EMPLOYE3Page } from '../e-mploye3/e-mploye3';


/**
 * Generated class for the ModifFeuilleDeTempsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-modif-feuille-de-temps',
  templateUrl: 'modif-feuille-de-temps.html',
})
export class ModifFeuilleDeTempsPage {

  public mesProjet = [];
  public newProjet;
  public newDistance;
  public newHDebut;
  public newHFin;
  public newDate;
  public newPauseMatin;
  public newPauseMidi;
  public newPauseApresmidi;

  public idSur;
  public idEnt;
  public fdt;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apiProvider: ApiProvider) {

    this.fdt = this.navParams.get('feuille');
    var page = this;
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');

    this.newProjet = this.fdt.id_projet;
    this.newDistance = this.fdt.km;
    this.newHDebut = this.splitDate(this.fdt.heure_debut);
    this.newHFin = this.splitDate(this.fdt.heure_fin);
    this.newDate = this.fdt.date;
    this.newPauseMatin = this.convertMinsToHrsMins(this.fdt.pause_matin);
    this.newPauseMidi= this.convertMinsToHrsMins(this.fdt.pause_midi);
    this.newPauseApresmidi = this.convertMinsToHrsMins(this.fdt.pause_apres_midi);
    
    page.apiProvider.getProjetsByIdSur(this.idSur).then((val) => {
      val.subscribe((response) => {
        page.setProjet(response);
      });
    });
  }
  setProjet(data){
    this.mesProjet = data;
  }
  setProjetId(id){
    this.newProjet = id;
  }
  goToEMPLOYE3(idS, idE){
    this.navCtrl.push(EMPLOYE3Page, {idSur: idS, idEnt: idE});
  }
  convertMinsToHrsMins(minutes) {
    var heures = Math.floor(minutes / 60);
    var mins = minutes % 60;
    var h = heures < 10 ? '0'+heures : ''+heures;
    var m = mins < 10 ? '0'+mins : ''+mins;
    return h+':'+m;
  }
  splitDate(date){
    var a = date.split(' ');
    return a[1];

  }
  timeToMinute(time){
    // your input string
 var a = time.split(':'); // split it at the colons

 // Hours are worth 60 minutes.
 var minutes = (+a[0]) * 60 + (+a[1]);
 return minutes;

}
modifFeuilleDeTemps(newProjet, newDistance, newHDebut, newHFin, newDate, newPauseMatin, newPauseMidi, newPauseApresmidi){
 var page = this;

     //Interface to tell that the IP API return JSON with ip args
     interface ipAdresse {
       ip?: string
     }

     var d = new Date();
     var dateModif = d.toISOString();
     page.apiProvider.getIp().subscribe((val: ipAdresse) =>{ 


       var data = {
         'id_projet': newProjet,
         'id_employee': this.fdt.lEmploye.id,
         'km': newDistance,
         'heure_debut': newDate+"T"+newHDebut,
         'heure_fin': newDate+"T"+newHFin,
         'date': newDate,
         'pause_matin': page.timeToMinute(newPauseMatin),
         'pause_midi': page.timeToMinute(newPauseMidi),
         'pause_apres_midi': page.timeToMinute(newPauseApresmidi),
         'id_mission': null,
         'id_createur': this.fdt.id_createur,
         'ip_creation': this.fdt.ip_creation,
         'date_creation': this.fdt.date_creation,
         'latitude_creation': this.fdt.latitude_creation,
         'longitude_creation': this.fdt.longitude_creation,
         'id_modif': "u_"+this.idSur,
         'ip_modif': val.ip,
         'date_modif': dateModif,
         'latitude_modif': "a remplacer",
         'longitude_modif': "a remplacer"
       }

       page.apiProvider.modifFeuilledetemps(data, page.fdt.id).then((val) => {
         val.subscribe((response) => {
           if(response) page.goToEMPLOYE3(page.idSur, page.idEnt);
         });
       });
     });
  }
}
