import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MESENTREPRISESPage } from '../pages/m-esentreprises/m-esentreprises';
import { NomEntreprisePage } from '../pages/nom-entreprise/nom-entreprise';
import { PROJETSPage } from '../pages/p-rojets/p-rojets';
import { MESRAPPORTSPage } from '../pages/m-esrapports/m-esrapports';
import { RAPPORTDUXXXXXXXXPage } from '../pages/r-apportduxxxxxxxx/r-apportduxxxxxxxx';
import { RAPPORTPage } from '../pages/r-apport/r-apport';
import { EMPLOYE4Page } from '../pages/e-mploye4/e-mploye4';
import { EMPLOYE3Page } from '../pages/e-mploye3/e-mploye3';
import { FEUILLEDETEMPSPage } from '../pages/f-euilledetemps/f-euilledetemps';
import { AJOUTFEUILLEDETEMPS2Page } from '../pages/a-joutfeuilledetemps2/a-joutfeuilledetemps2';
import { AJOUTFEUILLEDETEMPSPage } from '../pages/a-joutfeuilledetemps/a-joutfeuilledetemps';
import { EQUIPEMENT4Page } from '../pages/e-quipement4/e-quipement4';
import { EQUIPEMENT3Page } from '../pages/e-quipement3/e-quipement3';
import { FEUILLEDEQUIPEMENTPage } from '../pages/f-euilledequipement/f-euilledequipement';
import { AJOUTFEUILLEDEQUIPEMENTPage } from '../pages/a-joutfeuilledequipement/a-joutfeuilledequipement';
import { PROFILPage } from '../pages/p-rofil/p-rofil';
import { PROFIL2Page } from '../pages/p-rofil2/p-rofil2';
import { NOTIFICATIONPage } from '../pages/n-otification/n-otification';
import { NOTIFICATION2Page } from '../pages/n-otification2/n-otification2';
import { Storage } from '@ionic/storage';

import { AddEmployePage } from '../pages/add-employe/add-employe';
import { AddEquipementPage } from '../pages/add-equipement/add-equipement';
import { JOURNALDECHANTIERPage } from '../pages/j-ournaldechantier/j-ournaldechantier';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = JOURNALDECHANTIERPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, storage: Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToMESENTREPRISES(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MESENTREPRISESPage);
  }goToNomEntreprise(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NomEntreprisePage);
  }goToPROJETS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PROJETSPage);
  }goToMESRAPPORTS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(MESRAPPORTSPage);
  }goToRAPPORTDUXXXXXXXX(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RAPPORTDUXXXXXXXXPage);
  }goToRAPPORT(params){
    if (!params) params = {};
    this.navCtrl.setRoot(RAPPORTPage);
  }goToEMPLOYE4(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EMPLOYE4Page);
  }goToEMPLOYE3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EMPLOYE3Page);
  }goToFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FEUILLEDETEMPSPage);
  }goToAJOUTFEUILLEDETEMPS2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AJOUTFEUILLEDETEMPS2Page);
  }goToAJOUTFEUILLEDETEMPS(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AJOUTFEUILLEDETEMPSPage);
  }goToEQUIPEMENT4(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EQUIPEMENT4Page);
  }goToEQUIPEMENT3(params){
    if (!params) params = {};
    this.navCtrl.setRoot(EQUIPEMENT3Page);
  }goToFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.setRoot(FEUILLEDEQUIPEMENTPage);
  }goToAJOUTFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AJOUTFEUILLEDEQUIPEMENTPage);
  }goToPROFIL(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PROFILPage);
  }goToPROFIL2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(PROFIL2Page);
  }goToNOTIFICATION(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NOTIFICATIONPage);
  }goToNOTIFICATION2(params){
    if (!params) params = {};
    this.navCtrl.setRoot(NOTIFICATION2Page);
  }goToJOURNALDECHANTIER(params){
    if (!params) params = {};
    this.navCtrl.setRoot(JOURNALDECHANTIERPage);
  }goToAddEmployePage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddEmployePage);
  }goToAddEquipementPage(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AddEquipementPage);
  }
}
