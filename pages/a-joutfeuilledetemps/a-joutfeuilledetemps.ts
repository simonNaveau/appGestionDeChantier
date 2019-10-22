import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EMPLOYE4Page } from '../e-mploye4/e-mploye4';
import { EMPLOYE3Page } from '../e-mploye3/e-mploye3';
import { FEUILLEDETEMPSPage } from '../f-euilledetemps/f-euilledetemps';
import { AJOUTFEUILLEDETEMPS2Page } from '../a-joutfeuilledetemps2/a-joutfeuilledetemps2';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-a-joutfeuilledetemps',
  templateUrl: 'a-joutfeuilledetemps.html'
})
export class AJOUTFEUILLEDETEMPSPage {

  public mesProjet = [];
  public newProjet;
  public newDistance;
  public newHDebut;
  public newHFin;
  public newDate;
  public newPauseMatin;
  public newPauseMidi;
  public newPauseApresmidi;
  public items;
  public original;

  public idSur;
  public idEnt;

  constructor(public navCtrl: NavController, public storage: Storage, private apiProvider: ApiProvider, public navParams: NavParams) {
    var page = this;
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');

      page.apiProvider.getProjetsByIdSur(this.idSur).then((val) => {
        val.subscribe((response) => {
          page.setProjet(response);
          page.apiProvider.getEmployeByCompagnie(page.idEnt).then((val) => {
            val.subscribe((reponse) => {
              page.setItems(reponse);
            })
          });
        });
      });

  }
  getFontColor(item){
    if(item.selected){
      return '#B0CEDE';
    }
  }
  setSelected(id){
    this.items.forEach((elem) => {
      if(elem.id === id){
        if(elem.selected){
          elem.selected = false;
        } else{
          elem.selected = true;
        }
      }
    });
  }

  reset(){
    this.items = this.original;
  }

  setItems(data) {
    data.forEach(function(element){
      element.selected = false;
    });
    this.items = data;
    this.original = this.items.slice(0);
  }

  filterItems(ev: any) {
    this.reset()
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      this.items = this.items.filter(function(item) {
        let str = item.nom+","+item.prenom;
        return str.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  setProjet(data){
    this.mesProjet = data;
  }
  setProjetId(id){
    this.newProjet = id;
  }
  goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE4Page);
  }goToEMPLOYE3(idS, idE){
    this.navCtrl.push(EMPLOYE3Page, {idSur: idS, idEnt: idE});
  }goToFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDETEMPSPage);
  }goToAJOUTFEUILLEDETEMPS2(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPS2Page,{},{animate:false});
  }goToAJOUTFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDETEMPSPage,{},{animate:false});
  }
  timeToMinute(time){
       // your input string
    var a = time.split(':'); // split it at the colons

    // Hours are worth 60 minutes.
    var minutes = (+a[0]) * 60 + (+a[1]);
    return minutes;

  }
  createFeuilleDeTemps(newProjet, newDistance, newHDebut, newHFin, newDate, newPauseMatin, newPauseMidi, newPauseApresmidi, lesEmployes){
    var page = this;
    lesEmployes.forEach(function(elem){
      if(elem.selected){
        var d = new Date();
        
        var dateCreation = d.toISOString(); 

        //Interface to tell that the IP API return JSON with ip args
        interface ipAdresse {
          ip?: string
        }

        page.apiProvider.getIp().subscribe((val: ipAdresse) =>{ 


          var data = {
            'id_projet': newProjet,
            'id_employee': elem.id,
            'km': newDistance,
            'heure_debut': newDate+"T"+newHDebut,
            'heure_fin': newDate+"T"+newHFin,
            'date': newDate,
            'pause_matin': page.timeToMinute(newPauseMatin),
            'pause_midi': page.timeToMinute(newPauseMidi),
            'pause_apres_midi': page.timeToMinute(newPauseApresmidi),
            'id_mission': null,
            'id_createur': page.idSur,
            'ip_creation': val.ip,
            'date_creation': dateCreation,
            'latitude_creation':"a remplacer",
            'longitude_creation':"a remplacer",
            'id_modif': null,
            'ip_modif': null,
            'date_modif': null,
            'latitude_modif':null,
            'longitude_modif': null
          }
              
          page.apiProvider.createFeuilledetemps(data, page.idSur).then((val) => {
            val.subscribe((response) => {
              if(response) page.goToEMPLOYE3(page.idSur, page.idEnt);
            });
          });
        });
      }
    });
  }
}
