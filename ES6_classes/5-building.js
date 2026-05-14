export default class Building { 
  constructor(sqft) { 
    this._sqft = sqft; 
    
    /* 
       C'EST CETTE PARTIE QUE L'EXERCICE DEMANDE :
       On vérifie si on est dans une sous-classe (un enfant).
       Si oui, on regarde si l'enfant a bien créé la méthode demandée.
    */
    if (this.constructor !== Building) {                                 // Si la classe créée n'est pas juste 'Building'
      if (typeof this.evacuationWarningMessage !== 'function') {          // Si la méthode d'alerte n'existe pas
        throw new Error('Class extending Building must override evacuationWarningMessage'); // On déclenche l'erreur demandée
      } 
    } 
  } 

  get sqft() { 
    return this._sqft; 
  } 
} 