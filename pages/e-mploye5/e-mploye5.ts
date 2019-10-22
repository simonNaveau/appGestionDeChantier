import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EMPLOYE2Page } from '../e-mploye2/e-mploye2';
import { EMPLOYEPage } from '../e-mploye/e-mploye';
import { Storage } from '@ionic/storage';
import { ApiProvider } from '../../providers/api/api';


@Component({
  selector: 'page-e-mploye5',
  templateUrl: 'e-mploye5.html'
})
export class EMPLOYE5Page {
  public lEmploye;
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
    this.lEmploye = navParams.get('lEmploye');
    var page = this;

    this.apiProvider.getFonctionsByCompagnie(page.lEmploye.id_entreprise).then((val) => { 
        val.subscribe(function(response) {
          page.setMesFonctions(response);
          page.storage.set('mesFonctionsFor'+page.lEmploye.id_entreprise, response);
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
  }goToEMPLOYE(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYEPage);
  }goToEMPLOYE5(params){
    if (!params) params = {};
    this.navCtrl.push(EMPLOYE5Page);
  }
  putEmploye(nom, prenom, courriel, cellulaire, id_fonction, profile_picture){
    var page = this;
    var newEmploye = {...this.lEmploye}; //clone l'employe
    var idSur;
    var idEnt;

    if(this.selected){  //Detecte si il faut creer une nouvelle fonction ou non
      page.storage.get('idEnt').then((val) => {
        page.apiProvider.createFonction(page.newFonctionValue, val).then((val2) => {
          val2.subscribe((reponse) => {
            newEmploye.nom = nom;
            newEmploye.prenom = prenom;
            newEmploye.courriel = courriel;
            newEmploye.cellulaire = cellulaire;
            newEmploye.id_fonction = reponse[0].id;   //Passe l'id de la fonction nouvellement creer en parametre
            newEmploye.profile_picture = profile_picture;
            this.apiProvider.putEmploye(newEmploye).then((val) => { 
              val.subscribe(function(response) {
                if(response){
                  page.storage.get('idSur').then((val) => { 
                    idSur = val;
                    page.storage.get('idEnt').then((val2) => { 
                      idEnt = val2;
                      console.log(idSur+" "+idEnt);
                      page.goToEMPLOYE2(idSur, idEnt);
                    });
                  });
                }
              });
            });
          });
        });
      });
    } else {
      newEmploye.nom = nom;
      newEmploye.prenom = prenom;
      newEmploye.courriel = courriel;
      newEmploye.cellulaire = cellulaire;
      newEmploye.id_fonction = id_fonction;
      newEmploye.profile_picture = profile_picture;

      this.apiProvider.putEmploye(newEmploye).then((val) => { 
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
