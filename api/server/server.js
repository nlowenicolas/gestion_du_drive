'use strict';

// imports
import qs from 'qs'

class Dao {

  // constructeur
  constructor(axios) {
    this.axios = axios;
    // cookie de session
    this.sessionCookieName = "PHPSESSID";
    this.sessionCookie = '';
  }

  // init session
  async  initSession() {
    // options de la requête HHTP [get /main.php?action=init-session&type=json]
    const options = {
      method: "GET",
      // paramètres de l'URL
      params: {
        action: 'init-session',
        type: 'json'
      }
    };
    // exécution de la requête HTTP
    return await this.getRemoteData(options);
  }

  async  authentifierUtilisateur(user, password) {
    // options de la requête HHTP [post /main.php?action=authentifier-utilisateur]
    const options = {
      method: "POST",
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
      },
      // corps du POST
      data: qs.stringify({
        user: user,
        password: password
      }),
      // paramètres de l'URL
      params: {
        action: 'authentifier-utilisateur'
      }
    };
    // exécution de la requête HTTP
    return await this.getRemoteData(options);
  }

  async getAdminData() {
    // options de la requête HHTP [get /main.php?action=get-admindata]
    const options = {
      method: "GET",
      // paramètres de l'URL
      params: {
        action: 'get-admindata'
      }
    };
    // exécution de la requête HTTP
    const data = await this.getRemoteData(options);
    // résultat
    return data;
  }

  async  getRemoteData(options) {
    // pour le cookie de session
    if (!options.headers) {
      options.headers = {};
    }
    options.headers.Cookie = this.sessionCookie;
    // exécution de la requête HTTP
    let response;
    try {
      // requête asynchrone
      response = await this.axios.request('main.php', options);
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
    // on récupère le cookie de session s'il existe
    const setCookie = response.headers['set-cookie'];
    if (setCookie) {
      // setCookie est un tableau
      // on cherche le cookie de session dans ce tableau
      let trouvé = false;
      let i = 0;
      while (!trouvé && i < setCookie.length) {
        // on cherche le cookie de session
        const results = RegExp('^(' + this.sessionCookieName + '.+?);').exec(setCookie[i]);
        if (results) {
          // on mémorise le cookie de session
          // eslint-disable-next-line require-atomic-updates
          this.sessionCookie = results[1];
          // on a trouvé
          trouvé = true;
        } else {
          // élément suivant
          i++;
        }
      }
    }
    // la réponse du serveur est dans [response.data]
    return response.data;
  }
}

// export de la classe
export default Dao;
