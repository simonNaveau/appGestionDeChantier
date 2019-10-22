  import { Component } from '@angular/core';
  import { NavController } from 'ionic-angular';
  import { MESENTREPRISESPage } from '../m-esentreprises/m-esentreprises';
  import { NomEntreprisePage } from '../nom-entreprise/nom-entreprise';
  import { PROJETSPage } from '../p-rojets/p-rojets';
  import { MESRAPPORTSPage } from '../m-esrapports/m-esrapports';
  import { RAPPORTDUXXXXXXXXPage } from '../r-apportduxxxxxxxx/r-apportduxxxxxxxx';
  import { RAPPORTPage } from '../r-apport/r-apport';
  import { EMPLOYE4Page } from '../e-mploye4/e-mploye4';
  import { EMPLOYE3Page } from '../e-mploye3/e-mploye3';
  import { FEUILLEDETEMPSPage } from '../f-euilledetemps/f-euilledetemps';
  import { AJOUTFEUILLEDETEMPS2Page } from '../a-joutfeuilledetemps2/a-joutfeuilledetemps2';
  import { AJOUTFEUILLEDETEMPSPage } from '../a-joutfeuilledetemps/a-joutfeuilledetemps';
  import { EQUIPEMENT4Page } from '../e-quipement4/e-quipement4';
  import { EQUIPEMENT3Page } from '../e-quipement3/e-quipement3';
  import { FEUILLEDEQUIPEMENTPage } from '../f-euilledequipement/f-euilledequipement';
  import { AJOUTFEUILLEDEQUIPEMENTPage } from '../a-joutfeuilledequipement/a-joutfeuilledequipement';
  import { ApiProvider } from '../../providers/api/api';
  import { Storage } from '@ionic/storage';


  @Component({
    selector: 'page-j-ournaldechantier',
    templateUrl: 'j-ournaldechantier.html'
  })
  export class JOURNALDECHANTIERPage {
    public cellulaire: string;
    public password: string;
    public token: string;
    public idSur: string;
    

    constructor(private apiProvider: ApiProvider, public navCtrl: NavController, public storage: Storage) {
      //Lors du retour a la page de connexion il faut vider le storage de l'application car l'asynchronisme provoque des conflies de token
      storage.clear().then(
        (res) => {});
    }
    goToMESENTREPRISES(params){
      if (!params) params = {};
      this.navCtrl.push(MESENTREPRISESPage);
    }goToNomEntreprise(params){
      if (!params) params = {};
      this.navCtrl.push(NomEntreprisePage);
    }goToPROJETS(params){
      if (!params) params = {};
      this.navCtrl.push(PROJETSPage);
    }goToMESRAPPORTS(params){
      if (!params) params = {};
      this.navCtrl.push(MESRAPPORTSPage);
    }goToRAPPORTDUXXXXXXXX(params){
      if (!params) params = {};
      this.navCtrl.push(RAPPORTDUXXXXXXXXPage);
    }goToRAPPORT(params){
      if (!params) params = {};
      this.navCtrl.push(RAPPORTPage);
    }goToEMPLOYE4(params){
      if (!params) params = {};
      this.navCtrl.push(EMPLOYE4Page);
    }goToEMPLOYE3(params){
      if (!params) params = {};
      this.navCtrl.push(EMPLOYE3Page);
    }goToFEUILLEDETEMPS(params){
      if (!params) params = {};
      this.navCtrl.push(FEUILLEDETEMPSPage);
    }goToAJOUTFEUILLEDETEMPS2(params){
      if (!params) params = {};
      this.navCtrl.push(AJOUTFEUILLEDETEMPS2Page);
    }goToAJOUTFEUILLEDETEMPS(params){
      if (!params) params = {};
      this.navCtrl.push(AJOUTFEUILLEDETEMPSPage);
    }goToEQUIPEMENT4(params){
      if (!params) params = {};
      this.navCtrl.push(EQUIPEMENT4Page);
    }goToEQUIPEMENT3(params){
      if (!params) params = {};
      this.navCtrl.push(EQUIPEMENT3Page);
    }goToFEUILLEDEQUIPEMENT(params){
      if (!params) params = {};
      this.navCtrl.push(FEUILLEDEQUIPEMENTPage);
    }goToAJOUTFEUILLEDEQUIPEMENT(params){
      if (!params) params = {};
      this.navCtrl.push(AJOUTFEUILLEDEQUIPEMENTPage);
    }
    postLogin(cellulaire: string, password: string ){

      var storage=this.storage;
      var page = this;

      this.apiProvider.postLogin(cellulaire, password).subscribe(function(response) {
        var token = response[0].token;
        if (token) {
            storage.set('token', token);
            storage.set('idSur', response[0].surintendant_id);
        } else { 
          console.log("No api token return");
        }
        storage.get('token').then((val) => {
          var token = val;
          if(token) page.goToMESENTREPRISES(false);
            });
      });
    }
}
  