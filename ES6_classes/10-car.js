/**10. Vroom
 * 
Implement a class named Car:

Constructor attributes:
brand (String)
motor (String)
color (String)
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name)
Add a method named cloneCar. This method should return a new object of the class.
Hint: Symbols in ES6 */

export default class Car {
    constructor(brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    static get [Symbol.species]() {  // defining the class species 
    return this;                     // indicate that the species by default is the class itdself 
  } 

    cloneCar() {                       //METHOD for creating a new INSTANCE of the same species 
    const Species = this.constructor[Symbol.species];  //recuperate the object in it's full form(using constructor) 
    return new Species(); 
  }
}

/**1. Explication simple
Nous créons une classe Car (Voiture) capable de se "cloner". 
La particularité est que ce clone est un nouvel objet vide du même type. 
Si vous clonez une voiture de sport, vous obtenez une nouvelle voiture de sport vide. 
Pour réussir cela de manière élégante en JavaScript moderne, on utilise un Symbole spécial (Symbol.species) qui permet à l'objet de connaître sa propre "recette" de fabrication, même s'il a été transformé par la suite
.
2. Explication
Le Concept : C'est l'autocopie intelligente. 
Au lieu de dire "crée-moi une nouvelle Voiture", 
l'objet dit : "regarde ce que je suis (une Voiture, ou peut-être un Camion si j'ai été étendu) 
et crée un nouvel exemplaire tout neuf de cette catégorie"
.
Le Pourquoi :
Respect de l'héritage : 
Si vous créez une sous-classe TestCar qui hérite de Car, 
vous voulez que cloneCar renvoie une TestCar, pas une simple Car.
Éviter les erreurs de nom : En utilisant Symbol.species, vous ne dépendez pas du nom de la classe "en dur" dans votre code. 
C'est plus flexible et robuste
.
Le Comment :
On utilise une propriété statique Symbol.species qui renvoie this (la classe elle-même)
.
Dans la méthode cloneCar, on demande au constructeur de la classe actuelle d'utiliser cette "espèce" pour fabriquer le nouvel objet
.
3. Analogie et Scénario réel
L'analogie de la Photocopieuse Magique : Imaginez une photocopieuse qui ne copie pas l'encre sur le papier, mais qui analyse l'objet que vous posez dessus. 
Si vous posez un Livre, elle fabrique un nouveau livre avec des pages blanches. 
Si vous posez un Cahier, elle fabrique un nouveau cahier vide. 
Elle reconnaît l'espèce de l'objet pour savoir quel moule utiliser.

Scénario de la vie réelle (Usine de fabrication) : Dans un logiciel de gestion d'usine :
Vous avez un modèle de base Car.
Une filiale crée un modèle spécialisé ElectricCar.
Grâce à Symbol.species, quand la filiale appelle cloneCar(), 
le système sait qu'il doit préparer un châssis d'ElectricCar et non un châssis de voiture thermique classique, 
sans que vous ayez eu à modifier le code d'origine de la classe Car.
 */