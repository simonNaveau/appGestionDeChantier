import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EMPLOYE2Page } from '../e-mploye2/e-mploye2';
import { EMPLOYEPage } from '../e-mploye/e-mploye';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-add-employe',
  templateUrl: 'add-employe.html',
})
export class AddEmployePage {

  public idEntreprise
  public mesFonctions = [];
  public selected = false;
  public newFonctionValue;

  public newnom;
  public newprenom;
  public newcourriel;
  public newcellulaire;
  public newid_fonction;
  public newprofile_picture = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, private apiProvider: ApiProvider) {
    this.idEntreprise = navParams.get('idEnt');
    var page = this;

    this.apiProvider.getFonctionsByCompagnie(page.idEntreprise).then((val) => { 
        val.subscribe(function(response) {
          page.setMesFonctions(response);
          page.storage.set('mesFonctionsFor'+page.idEntreprise, response);
      });
    });
  }
  detectAutre(id){
    this.newid_fonction = id;
    this.selected = false;
  }
  setSelect(value){
    this.selected = true;
    this.newFonctionValue
  }
  setMesFonctions(data){
    this.mesFonctions = data;
  }
  goToEMPLOYE2(idS, idE){
    this.navCtrl.push(EMPLOYE2Page, {idEnt: idE, idSur: idS});
  }
  goToEMPLOYE(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYEPage);
  }
  goToAddEmployePage(params){
    if (!params) params = {};
    this.navCtrl.push(AddEmployePage);
  }
  //A changer par la creation
  createEmploye(nom, prenom, courriel, cellulaire, id_fonction, profile_picture, idEnt){
     var page = this;
     var idSur;
     var idEnt;

     var newEmploye = {
       "nom": nom,
       "prenom": prenom,
       "courriel": courriel,
       "cellulaire": cellulaire,
       "id_fonction": id_fonction,
       "active": "1",
       "profile_picture": profile_picture
     }

     if(this.selected){  //Detecte si il faut creer une nouvelle fonction ou non
      page.storage.get('idEnt').then((val) => {
        page.apiProvider.createFonction(page.newFonctionValue, val).then((val2) => {
          val2.subscribe((reponse) => {
            newEmploye.id_fonction = reponse[0].id;   //Passe l'id de la fonction nouvellement creer en parametre
            page.apiProvider.createEmploye(newEmploye, idEnt).then((val) => { 
              val.subscribe(function(response) {
                if(response){
                  page.storage.get('idSur').then((val) => { 
                    idSur = val;
                    page.storage.get('idEnt').then((val2) => { 
                      idEnt = val2;
                      page.goToEMPLOYE2(idSur, idEnt);
                    });
                  });
                }
              });
            });
          });
        });
      });
    } 
    else {
      page.apiProvider.createEmploye(newEmploye, idEnt).then((val) => { 
        val.subscribe(function(response) {
          if(response){
            page.storage.get('idSur').then((val) => { 
              idSur = val;
              page.storage.get('idEnt').then((val2) => { 
                idEnt = val2;
                page.goToEMPLOYE2(idSur, idEnt);
              });
            });
          }
        });
      });
    }
  }
}
