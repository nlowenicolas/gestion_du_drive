"use strict";

// imports
import qs from "qs";

class client {
  // constructeur
  constructor(axios) {
    this.axios = axios;
  }

  // init session
  async initSession() {
    // options de la requête HHTP [get /main.php?action=init-session&type=json]
    const options = {
      method: "GET",
      // paramètres de l'URL
      params: {
        action: "init-session",
        type: "json"
      }
    };
    // exécution de la requête HTTP
    return await this.getRemoteData(options);
  }

  async authentifierUtilisateur(name, firstname, email, tel, password) {
    // options de la requête HHTP [post /main.php?action=authentifier-utilisateur]
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/x-www-form-urlencoded"
      },
      // corps du POST
      data: qs.stringify({
        // user: user,
        // password: password
        name: entrer_name,
        firstname: entrer_firstname,
        email: entrer_email,
        tel: entrer_tel,
        password: entrer_password,
      }),
      // paramètres de l'URL
      params: {
        action: "authentifier-utilisateur"
      }
    };
    // exécution de la requête HTTP
    return await this.getRemoteData(options);
  }

  async getAdminData() {
    // options de la requête HHTP  [get /main.php?action=get-admindata]
    const options = {
      method: "GET",
      // paramètres de l'URL
      params: {
        action: "inscription"
      }
    };
    // exécution de la requête HTTP
    const data = await this.getRemoteData(options);
    // résultat
    return data;
  }

  async getRemoteData(options) {
    // exécution de la requête HTTP
    let response;
    try {
      // requête asynchrone
      response = await this.axios.request("main.php", options);
    } catch (error) {
      // le paramètre [error] est une instance d'exception - elle peut avoir diverses formes
      if (error.response) {
        // la réponse du serveur est dans [error.response]
        response = error.response;
      } else {
        // on relance l'erreur
        throw error;
      }
    }
    // response est l'ensemble de la réponse HTTP du serveur (entêtes HTTP + réponse elle-même)
    // la réponse du serveur est dans [response.data]
    return response.data;
  }
}

// export de la classe
export default client;
