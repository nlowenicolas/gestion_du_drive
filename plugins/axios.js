//Version détaillée de la fonction
function getDonnees() {
  // Création d'une promesse qui va contenir l'appel
  const promise = axios.get("http://192.168.100.78:8000/utilisateurs/list")
  // Avec la méthode "then", on extrait les données
  const donnes = promise.then((reponse) => reponse.data)
  //  On retourne les données
  const donnes = promise.catch((erreur) => reponse.data)
  //  On retourne les données
  return donnees
}

//Version abrégée
// function getDonnees() {
//   return axios.get(url).then(reponse => reponse.data)
// }
