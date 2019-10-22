import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';
import { EQUIPEMENT3Page } from '../e-quipement3/e-quipement3';

@Component({
  selector: 'page-modif-feuille-dequipement',
  templateUrl: 'modif-feuille-dequipement.html',
})
export class ModifFeuilleDequipementPage {

  public idSur;
  public idEnt;
  public fde;

  public mesProjet = [];
  public employes = [];
  public equipements = [];

  public newProjet;
  public newEquipement;
  public newDistance;
  public newHDebut;
  public newHFin;
  public newOperateur;
  public newDate;
  public newNomOperateur;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider,) {
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');
    this.fde = this.navParams.get('feuille');
    var page = this;

    this.newProjet = this.fde.id_projet;
    this.newHDebut = this.splitDate(this.fde.heure_debut);
    this.newHFin = this.splitDate(this.fde.heure_fin);
    this.newOperateur = this.fde.id_operateur;
    this.newDate = this.fde.date;
    this.newNomOperateur = this.fde.nom_operateur;

    page.apiProvider.getProjetsByIdSur(this.idSur).then((val) => {
      val.subscribe((response) => {
        page.setProjet(response);
        page.apiProvider.getEmployeByCompagnie(page.idEnt).then((val) => {
          val.subscribe((reponse) => {
            page.setEmployes(reponse);
          })
        });
      });
    });
  }

  setOperateur(emp){
    this.newOperateur = emp.id;
    this.newNomOperateur = emp.nom;
  }
  setProjetId(id){
    this.newProjet = id;
  }
  setEquipementId(id){
    this.newEquipement = id;
  }
  setProjet(data){
    this.mesProjet = data;
  }
  setEmployes(data) {
    this.employes = data;
  }
  setEquipements(data) {
    this.equipements = data;
  }

  splitDate(date){
    var a = date.split(' ');
    return a[1];

  }

  goToEQUIPEMENT3(idS, idE){
    this.navCtrl.push(EQUIPEMENT3Page, {idSur: idS, idEnt: idE});
  }

  modifFeuilleDEquipement(newProjet, newHDebut, newHFin, newOperateur, newDate, newNomOperateur){
    var page = this;
    var d = new Date();      
    var dateModif = d.toISOString(); 

    var data = {
      'id_projet': newProjet,
      'id_equipement': this.fde.id_equipement,
      'date': newDate,
      'heure_debut': newDate+"T"+newHDebut,
      'heure_fin': newDate+"T"+newHFin,
      'id_operateur': newOperateur,
      'nom_operateur':  newNomOperateur,
      'date_creation': this.fde.date_creation,
      'id_modificateur': "u_"+this.idSur,
      'date_modification': dateModif
    }
     page.apiProvider.modifFeuilledequipement(data, page.fde.id).then((val) => {
      val.subscribe((response) => {
        if(response) page.goToEQUIPEMENT3(page.idSur, page.idEnt);
      });
     });
  }

}
