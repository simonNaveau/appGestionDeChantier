import { Component } from '@angular/core';
import { NavController, NavParams  } from 'ionic-angular';
import { EQUIPEMENT3Page } from '../e-quipement3/e-quipement3';
import { FEUILLEDEQUIPEMENTPage } from '../f-euilledequipement/f-euilledequipement';
import { AJOUTFEUILLEDEQUIPEMENTPage } from '../a-joutfeuilledequipement/a-joutfeuilledequipement';
import { EQUIPEMENT2Page } from '../e-quipement2/e-quipement2';
import { ApiProvider } from '../../providers/api/api';

@Component({
  selector: 'page-e-quipement4',
  templateUrl: 'e-quipement4.html'
})
export class EQUIPEMENT4Page {
  public idSur;
  public idEntreprise;
  public mesProjets =[];
  public original;
  public maListe;
  public dateDebut;
  public dateFin;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiProvider: ApiProvider) {
    this.idEntreprise = navParams.get('idEnt');
    this.idSur = navParams.get('idSur');
    var page = this;

    page.apiProvider.getProjetsByIdSur(this.idSur).then((val) => {
      val.subscribe((response) => {
        page.setProjet(response);
        this.apiProvider.getFeuillesDequipement(page.idEntreprise, page.idSur).then((val) => { 
          val.subscribe(function(response) {
            page.setMaListe(response);
         });
      });
    });
  });  
}
  goToEQUIPEMENT3(idS, idE){
    this.navCtrl.push(EQUIPEMENT3Page, {idSur: idS, idEnt: idE});
  }
  goToFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(FEUILLEDEQUIPEMENTPage);
  }
  goToAJOUTFEUILLEDEQUIPEMENT(params){
    if (!params) params = {};
    this.navCtrl.push(AJOUTFEUILLEDEQUIPEMENTPage);
  }
  goToEQUIPEMENT4(params){
    if (!params) params = {};
    this.navCtrl.push(EQUIPEMENT4Page,{},{animate:false});
  }
  goToEQUIPEMENT2(idEntreprise, id){
    this.navCtrl.push(EQUIPEMENT2Page,{idEnt: idEntreprise, idSur: id},{animate:false});
  }
  setProjet(data){
    data.forEach(function(element){
      element.selected = false;
      console.log(element)
    });
    
    this.mesProjets = data;
    this.original = this.mesProjets.slice(0);
  }
  getFontColor(item){
    if(item.selected){
      return '#B0CEDE';
    }
  }
  setSelected(id){
    this.mesProjets.forEach((elem) => {
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
    this.mesProjets = this.original;
  }

  filterItems(ev: any) {
    this.reset()
    let val = ev.target.value;

    if (val && val.trim() !== '') {
      console.log(this.mesProjets);
      this.mesProjets = this.mesProjets.filter(function(item) {
        let str = item.nom;
        return str.toLowerCase().includes(val.toLowerCase());
      });
    }
  }
  setMaListe(data){
    this.maListe = data;
  }
  sortListe(projets, dateDebut, dateFin){
    // faire la fonction de tri
  }
}
