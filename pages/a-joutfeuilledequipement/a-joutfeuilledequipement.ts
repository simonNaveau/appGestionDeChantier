import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EQUIPEMENT4Page } from '../e-quipement4/e-quipement4';
import { EQUIPEMENT3Page } from '../e-quipement3/e-quipement3';
import { FEUILLEDEQUIPEMENTPage } from '../f-euilledequipement/f-euilledequipement';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-a-joutfeuilledequipement',
  templateUrl: 'a-joutfeuilledequipement.html'
})
export class AJOUTFEUILLEDEQUIPEMENTPage {
  public idSur;
  public idEnt;

  public mesProjet = [];
  public employes = [];
  public equipements = [];

  public newProjet;
  public newEquipement;
  public newHDebut;
  public newHFin;
  public newOperateur;
  public newDate;
  public newNomOperateur;

  constructor(public navCtrl: NavController, public storage: Storage, private apiProvider: ApiProvider, public navParams: NavParams) {
    this.idSur = this.navParams.get('idSur');
    this.idEnt = this.navParams.get('idEnt');
    var page = this;

    page.apiProvider.getProjetsByIdSur(this.idSur).then((val) => {
      val.subscribe((response) => {
        page.setProjet(response);
        page.apiProvider.getEmployeByCompagnie(page.idEnt).then((val) => {
          val.subscribe((reponse) => {
            page.setEmployes(reponse);
            page.apiProvider.getEquipementByCompagnie(page.idEnt).then((val) => {
              val.subscribe((reponse) => {
                page.setEquipements(reponse);
              })
            });
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
  goToEQUIPEMENT4(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT4Page);
  }
  goToEQUIPEMENT3(idS, idE){
    this.navCtrl.push(EQUIPEMENT3Page, {idSur: idS, idEnt: idE});
  }goToFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDEQUIPEMENTPage);
  }goToAJOUTFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDEQUIPEMENTPage);
  }
  createFeuilleDEquipement(newProjet, newEquipement, newDistance, newHDebut, newHFin, newOperateur, newDate, newNomOperateur){
    var page = this;
    var d = new Date();      
    var dateCreation = d.toISOString(); 

    var data = {
      'id_projet': newProjet,
      'id_equipement': newEquipement,
      'date': newDate,
      'heure_debut': newDate+"T"+newHDebut,
      'heure_fin': newDate+"T"+newHFin,
      'id_operateur': newOperateur,
      'nom_operateur':  newNomOperateur,
      'date_creation': dateCreation,
      'id_modificateur': null,
      'date_modification': null
    }
              
     page.apiProvider.createFeuilledequipement(data, page.idSur).then((val) => {
      val.subscribe((response) => {
        if(response) page.goToEQUIPEMENT3(page.idSur, page.idEnt);
      });
     });
  }
}
