import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
//import { DEFAULT_VALUE_ACCESSOR } from '@angular/forms';

/*
  Generated class for the ApiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiProvider {
  private ROOT_URL = 'http://wyzapi.cegq.com/index.php';

  constructor(public http: HttpClient, public storage: Storage) {
  }
  createAuthorizationHeader(headers: HttpHeaders) {
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Access-Control-Allow-Headers', '*');

  }

  /*
  Generate the token and set the global variable to use it during the connection
  */
  postLogin(cellulaire: string, password: string) {

    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json");
    let postData = new FormData();
    postData.append("cellulaire", cellulaire);
    postData.append("password", password);

    return this.http.post(this.ROOT_URL + "/login", postData);


  }

  /*
Ask for the compagnies list of a surintendant
*/
  getCompagniesByIdSur(idSur: string) {

    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/entreprises" + "/" + idSur, { headers: headersGet });
    });

  }

  /*
Ask for the projects of a compagnie
*/
  getProjetsById(idEntreprise, idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/projets" + "/" + idSur + "/" + idEntreprise, { headers: headersGet });
    });
  }

  /*
Ask for the all the rapport of a project
*/
  getRapportByProjet(idProjet) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/rapports" + "/" + idProjet, { headers: headersGet });
    });
  }

  /*
Ask for all the employe working in a compagnie
*/
  getEmployeByCompagnie(idEntreprise) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/employee/entreprise" + "/" + idEntreprise, { headers: headersGet });
    });
  }

  /*
  Ask for the projects of a compagnie
    */
  getEquipementByCompagnie(idEntreprise) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/equipement/entreprise" + "/" + idEntreprise, { headers: headersGet });
    });
  }

  /*
  Ask for the fonction with it id
    */
  getFonctionById(idFonction) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/fonction/" + idFonction, { headers: headersGet });
    });
  }

  /*
  Ask for the compagnie fonctions with the id of the compagnie
    */
  getFonctionsByCompagnie(idEntreprise) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/fonction/entreprise/" + idEntreprise, { headers: headersGet });
    });
  }

  /*
Modify an employe with is id
*/
  putEmploye(newEmploye) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });


      //Donnees au format JSON a envoyer 
      var data = {
        "nom": newEmploye.nom,
        "prenom": newEmploye.prenom,
        "identifiant_connexion": newEmploye.identifiant_connexion,
        "id_entreprise": newEmploye.id_entreprise,
        "courriel": newEmploye.courriel,
        "cellulaire": newEmploye.cellulaire,
        "id_fonction": newEmploye.id_fonction,
        "active": newEmploye.active,
        "profile_picture": "",
        "autre": newEmploye.autre,
        "autre2": newEmploye.autre2
      }

      return this.http.put(this.ROOT_URL + "/employee/" + newEmploye.id, data, { headers: headersGet });
    });
  }

  /*
  Ask for informations of a user
    */
  getUserDetail(idUtilisateur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.get(this.ROOT_URL + "/utilisateurs/" + idUtilisateur, { headers: headersGet });
    });
  }

  /*
  Create a new fonction
    */
  createFonction(value, idEntreprise) {
    var data = {
      "value": value
    }
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.post(this.ROOT_URL + "/fonction/" + idEntreprise, data, { headers: headersGet });
    });
  }

  /*
  Modify a user with is id
  */
  putProfil(nom, prenom, courriel, titre, cellulaire, id) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });

      //Donnees au format JSON a envoyer 
      var data = {
        "cellulaire": cellulaire,
        "nom": nom,
        "prenom": prenom,
        "courriel": courriel,
        "titre": titre
      }

      return this.http.put(this.ROOT_URL + "/utilisateurs/" + id, data, { headers: headersGet });
    });
  }

  /*
Create a new employe
*/
  createEmploye(newEmploye, idEntreprise) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.post(this.ROOT_URL + "/employee/" + idEntreprise, newEmploye, { headers: headersGet });
    });
  }

  /*
Modify an equipement with is id
*/
  putEquipement(newEquipement) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });


      //Donnees au format JSON a envoyer 
      var data = {
        "identification": newEquipement.identification,
        "type": newEquipement.type,
        "marque": newEquipement.marque,
        "active": newEquipement.active
      }

      return this.http.put(this.ROOT_URL + "/equipement/" + newEquipement.id, data, { headers: headersGet });
    });
  }

  /*
Create a new equipement
*/
  createEquipement(newEquipement) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.post(this.ROOT_URL + "/equipement/" + newEquipement.id_entreprise, newEquipement, { headers: headersGet });
    });
  }

  /*
Get notification
*/
  getNotificationsById(idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.get(this.ROOT_URL + "/notifications/" + idSur, { headers: headersGet });
    });
  }

  /*
Set notification active to 1
*/
  setNotificationView(idNotif, idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      var data = {};
      return this.http.put(this.ROOT_URL + "/notification/" + idNotif + "/" + idSur, data, { headers: headersGet });
    });
  }

  /*
Get compagnie with the id
*/
  getEntrepriseById(idEntreprise) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.get(this.ROOT_URL + "/entreprise/" + idEntreprise, { headers: headersGet });
    });
  }

  /*
Ask for the projects of a surintandent
*/
  getProjetsByIdSur(idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val, "Access-Control-Allow-Header": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With", "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" });
      return this.http.get(this.ROOT_URL + "/projets" + "/" + idSur, { headers: headersGet });
    });
  }

  /*
Create a new feuilleDeTemps
*/
  createFeuilledetemps(newFeuille, idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.post(this.ROOT_URL + "/feuilledetemps/" + idSur, newFeuille, { headers: headersGet });
    });
  }

  /*
Get the divice ip adress from an external API
*/
  getIp() {
    return this.http.get("https://api.ipify.org/?format=json");
  }

  /*
Create a new feuilleDequipement
*/
  createFeuilledequipement(newFeuille, idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.post(this.ROOT_URL + "/feuilleequipement/" + idSur, newFeuille, { headers: headersGet });
    });
  }

  /*
 Get compagnie with the id
 */
  getFeuillesDeTemps(idEntreprise, idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.get(this.ROOT_URL + "/feuilledetemps/entreprise/" + idEntreprise + "/" + idSur, { headers: headersGet });
    });
  }


  /*
Modify a feuilleDeTemps
*/
  modifFeuilledetemps(newFeuille, idFeuille) {
    console.log(newFeuille);
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.put(this.ROOT_URL + "/feuilledetemps/" + idFeuille, newFeuille, { headers: headersGet });
    });
  }
  /*
    Get feuilleDequipement for a sup
    */
  getFeuillesDequipement(idEntreprise, idSur) {
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.get(this.ROOT_URL + "/feuilleequipement/entreprise/" + idEntreprise, { headers: headersGet });
    });
  }


  /*
Modify a feuilleDequipement
*/
  modifFeuilledequipement(newFeuille, idFeuille) {
    console.log(newFeuille);
    return this.storage.get('token').then((val) => {
      let headersGet = new HttpHeaders({ "Token": val });
      return this.http.put(this.ROOT_URL + "/feuilleequipement/" + idFeuille, newFeuille, { headers: headersGet });
    });
  }

}
