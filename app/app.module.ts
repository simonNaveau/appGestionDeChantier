import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { JOURNALDECHANTIERPage } from '../pages/j-ournaldechantier/j-ournaldechantier';
import { MESENTREPRISESPage } from '../pages/m-esentreprises/m-esentreprises';
import { MESRAPPORTSPage } from '../pages/m-esrapports/m-esrapports';
import { PROJETSPage } from '../pages/p-rojets/p-rojets';
import { NOTIFICATIONPage } from '../pages/n-otification/n-otification';
import { NOTIFICATION2Page } from '../pages/n-otification2/n-otification2';
import { EQUIPEMENTPage } from '../pages/e-quipement/e-quipement';
import { PROFILPage } from '../pages/p-rofil/p-rofil';
import { PROFIL2Page } from '../pages/p-rofil2/p-rofil2';
import { EMPLOYEPage } from '../pages/e-mploye/e-mploye';
import { NomEntreprisePage } from '../pages/nom-entreprise/nom-entreprise';
import { EMPLOYE2Page } from '../pages/e-mploye2/e-mploye2';
import { EMPLOYE3Page } from '../pages/e-mploye3/e-mploye3';
import { EQUIPEMENT2Page } from '../pages/e-quipement2/e-quipement2';
import { EQUIPEMENT3Page } from '../pages/e-quipement3/e-quipement3';
import { EMPLOYE4Page } from '../pages/e-mploye4/e-mploye4';
import { EQUIPEMENT4Page } from '../pages/e-quipement4/e-quipement4';
import { EMPLOYE5Page } from '../pages/e-mploye5/e-mploye5';
import { EQUIPEMENT5Page } from '../pages/e-quipement5/e-quipement5';
import { FEUILLEDETEMPSPage } from '../pages/f-euilledetemps/f-euilledetemps';
import { FEUILLEDEQUIPEMENTPage } from '../pages/f-euilledequipement/f-euilledequipement';
import { AJOUTFEUILLEDETEMPSPage } from '../pages/a-joutfeuilledetemps/a-joutfeuilledetemps';
import { AJOUTFEUILLEDEQUIPEMENTPage } from '../pages/a-joutfeuilledequipement/a-joutfeuilledequipement';
import { AJOUTFEUILLEDETEMPS2Page } from '../pages/a-joutfeuilledetemps2/a-joutfeuilledetemps2';
import { RAPPORTPage } from '../pages/r-apport/r-apport';
import { RAPPORT2Page } from '../pages/r-apport2/r-apport2';
import { RAPPORT3Page } from '../pages/r-apport3/r-apport3';
import { RAPPORT4Page } from '../pages/r-apport4/r-apport4';
import { RAPPORT5Page } from '../pages/r-apport5/r-apport5';
import { DONNEEFACTUELLEPage } from '../pages/d-onneefactuelle/d-onneefactuelle';
import { DONNEEFACTUELLE2Page } from '../pages/d-onneefactuelle2/d-onneefactuelle2';
import { DONNEEFACTUELLE3Page } from '../pages/d-onneefactuelle3/d-onneefactuelle3';
import { DONNEEFACTUELLE4Page } from '../pages/d-onneefactuelle4/d-onneefactuelle4';
import { RAPPORTDUXXXXXXXXPage } from '../pages/r-apportduxxxxxxxx/r-apportduxxxxxxxx';
import { AddEmployePage } from '../pages/add-employe/add-employe';
import { AddEquipementPage } from '../pages/add-equipement/add-equipement';
import { ModifFeuilleDeTempsPage } from '../pages/modif-feuille-de-temps/modif-feuille-de-temps';
import { ModifFeuilleDequipementPage } from '../pages/modif-feuille-dequipement/modif-feuille-dequipement';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpModule } from '@angular/http';
import { IonicStorageModule } from '@ionic/storage';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ApiProvider } from '../providers/api/api';


@NgModule({
  declarations: [
    MyApp,
    JOURNALDECHANTIERPage,
    MESENTREPRISESPage,
    MESRAPPORTSPage,
    PROJETSPage,
    NOTIFICATIONPage,
    NOTIFICATION2Page,
    EQUIPEMENTPage,
    PROFILPage,
    PROFIL2Page,
    EMPLOYEPage,
    NomEntreprisePage,
    EMPLOYE2Page,
    EMPLOYE3Page,
    EQUIPEMENT2Page,
    EQUIPEMENT3Page,
    EMPLOYE4Page,
    EQUIPEMENT4Page,
    EMPLOYE5Page,
    EQUIPEMENT5Page,
    FEUILLEDETEMPSPage,
    FEUILLEDEQUIPEMENTPage,
    AJOUTFEUILLEDETEMPSPage,
    AJOUTFEUILLEDEQUIPEMENTPage,
    AJOUTFEUILLEDETEMPS2Page,
    RAPPORTPage,
    RAPPORT2Page,
    RAPPORT3Page,
    RAPPORT4Page,
    RAPPORT5Page,
    DONNEEFACTUELLEPage,
    DONNEEFACTUELLE2Page,
    DONNEEFACTUELLE3Page,
    DONNEEFACTUELLE4Page,
    RAPPORTDUXXXXXXXXPage,
    AddEmployePage,
    AddEquipementPage,
    ModifFeuilleDeTempsPage,
    ModifFeuilleDequipementPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    JOURNALDECHANTIERPage,
    MESENTREPRISESPage,
    MESRAPPORTSPage,
    PROJETSPage,
    NOTIFICATIONPage,
    NOTIFICATION2Page,
    EQUIPEMENTPage,
    PROFILPage,
    PROFIL2Page,
    EMPLOYEPage,
    NomEntreprisePage,
    EMPLOYE2Page,
    EMPLOYE3Page,
    EQUIPEMENT2Page,
    EQUIPEMENT3Page,
    EMPLOYE4Page,
    EQUIPEMENT4Page,
    EMPLOYE5Page,
    EQUIPEMENT5Page,
    FEUILLEDETEMPSPage,
    FEUILLEDEQUIPEMENTPage,
    AJOUTFEUILLEDETEMPSPage,
    AJOUTFEUILLEDEQUIPEMENTPage,
    AJOUTFEUILLEDETEMPS2Page,
    RAPPORTPage,
    RAPPORT2Page,
    RAPPORT3Page,
    RAPPORT4Page,
    RAPPORT5Page,
    DONNEEFACTUELLEPage,
    DONNEEFACTUELLE2Page,
    DONNEEFACTUELLE3Page,
    DONNEEFACTUELLE4Page,
    RAPPORTDUXXXXXXXXPage,
    AddEmployePage,
    AddEquipementPage,
    ModifFeuilleDeTempsPage,
    ModifFeuilleDequipementPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ApiProvider
  ]
})
export class AppModule {}