/** 7. Airport

Implement a class named Airport:

Constructor attributes:
name (String)
code (String)
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name)
The default string description of the class should return the airport code (example below). */

export default class Airport {
    constructor(name, code) {
        this._name = name;
        this._code = code;
    }


get [Symbol.toStringTag]() {
    return this._code
}
}

// On stocke les données dans _name et _code comme d'habitude.
// On ajoute un getter spécial qui utilise une syntaxe de "clé calculée" : get [Symbol.toStringTag](). 
// Ce symbole est une clé unique et universelle reconnue par le moteur JavaScript pour définir le nom de l'objet
