export class appconstants {
  public static get governorats() {
    return [
      { name: 'Tunis' },
      { name: 'Sousse' },
      { name: 'Nabeul' },
      { name: 'Ariana' },
      { name: 'Manouba' },
      { name: 'Monastir' },
      { name: 'Mahdia' },
      { name: 'Ben Arous' },
      { name: 'Bizerte' },
      { name: 'Kairouan' },
      { name: 'Sfax' },
      { name: 'Zaghouan' },
      { name: 'Beja' },
      { name: 'Gabes' },
      { name: 'Gafsa' },
      { name: 'Jendouba' },
      { name: 'Kasserine' },
      { name: 'Kebili' },
      { name: 'Kef' },
      { name: 'Medenine' },
      { name: 'Sidi Bouzid' },
      { name: 'Siliana' },
      { name: 'Tataouine' },
      { name: 'Tozeur' },
    ];
  }
  public static get TVA() {
    return [
      { name: '0', value: 0 },
      { name: '19', value: 19 },
    ];
  }

  public static get sources() {
    return [
      { name: 'Live' },
      { name: 'Page' },
      { name: 'Site' },
      { name: 'Reclamation' },
      { name: 'Instagram' },
      { name: 'Tel' },
      { name: 'Fidelite' },
      { name: 'Olfa' },
    ];
  }
  public static get TacheAgent() {
    return [
      { name: 'live' },
      { name: 'commande' },
      { name: 'confirmation' },
      { name: 'preparation' },
      { name: 'controle' },
      { name: 'emballage' },
      { name: 'valider' },
      { name: 'Retour' },
    ];
  }
  public static get Statut() {
    return [
      { name: 'Nouvelle', color: '#d87688', periority: 3 },
      { name: 'Confirmée', color: '#ebcb8b', periority: 6 },
      { name: 'En préparation', color: '#F94144', periority: 4 },
      { name: 'Contrôlée', color: '#8fb56f', periority: 7 },
      { name: 'Emballée', color: '#f38d73', periority: 8 },
      { name: 'En Expédition', color: '#5ebdb0', periority: 9 },
      { name: 'Annulée', color: '#65afc4', periority: 10 },
      { name: 'Valider', color: '#94e8b4', periority: 5 },
      { name: 'Retour', color: '#d87688', periority: 11 },
      { name: 'En Attente', color: '#f9844a', periority: 1 },
      { name: 'R.Non Traite', color: '#d87688', periority: 12 },
      { name: 'Repeter', color: '#cdb4db', periority: 2 },

    
    ];
  }

  public static get Unite() {
    return [
      { name: 'Kg' },
      { name: 'Litre' },
      { name: 'Piece' },
    ];
  }
  public static get EtatCommande() {
    return [
      { name: 'En Attente' },
      { name: 'Confirmer' },
      { name: 'Annulée' },
    ];
  }
  public static get AnnulerStatut() {
    return [
      { name: "Client pas intéressé" },
      { name: 'Frais est trés chére' },
      { name: 'Client pas sérieux' },
      { name: "Probléme d'argent" },
      { name: "Client injoinable" },
      { name: "fausse information de client" },
      { name: "Retard de preparation" },
      { name: "Article Fin De Stock" },

      { name: "Commande Enregistrer plusieur fois" },
      { name: "Probléme de prix d'article" },
      { name: "Avance obligatoire" },
      { name: "réponse retardé" },
      { name: "Autre..." },

    ];
  }
  public static get Role() {
    return [
      { name: 1 },
      { name: 2 },
      { name:3},
      { name: 4 },
      { name: 5},
      { name: 6 },
      { name: 7 },
      { name: 8 },
      { name: 9},
      { name: 10 },
      { name: 11},
      { name: 12},
      { name: 13},
      { name: 14 },
      { name: 15 },
      { name: 16 },
      { name: 17 },

    ];
  }

public static get chargements_type()
    { 
        return [
        {name: 'Livraison'},
        {name: 'Retour'}
    ]; 
}

}


