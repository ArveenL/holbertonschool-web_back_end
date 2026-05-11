/**2. 
Implement a class named HolbertonCourse:

Constructor attributes:
name (String)
length (Number)
students (array of Strings)
Make sure to verify the type of attributes during object creation
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute. */

export default class HolbertonCourse { # On déclare et exporte la classe
  constructor(name, length, students) { # Le point d'entrée lors de la création
    if (typeof name !== 'string') throw new TypeError('Name must be a string'); # Vérifie si le nom est du texte
    if (typeof length !== 'number') throw new TypeError('Length must be a number'); # Vérifie si la longueur est un nombre
    if (!Array.isArray(students)) throw new TypeError('Students must be an array'); # Vérifie si les étudiants sont dans un tableau

    this._name = name; # Stocke le nom de manière interne
    this._length = length; # Stocke la durée de manière interne
    this._students = students; # Stocke la liste des étudiants de manière interne
  } # Fin du constructeur

  get name() { # Fonction pour lire le nom
    return this._name; # Renvoie la valeur cachée
  } # Fin du getter name

  set name(value) { # Fonction pour modifier le nom
    if (typeof value !== 'string') throw new TypeError('Name must be a string'); # Vérifie le type avant modification
    this._name = value; # Applique le changement
  } # Fin du setter name

  get length() { # Fonction pour lire la durée
    return this._length; # Renvoie la valeur cachée
  } # Fin du getter length

  set length(value) { # Fonction pour modifier la durée
    if (typeof value !== 'number') throw new TypeError('Length must be a number'); # Vérifie le type avant modification
    this._length = value; # Applique le changement
  } # Fin du setter length

  get students() { # Fonction pour lire les étudiants
    return this._students; # Renvoie la liste cachée
  } # Fin du getter students

  set students(value) { # Fonction pour modifier les étudiants
    if (!Array.isArray(value)) throw new TypeError('Students must be an array'); # Vérifie que c'est bien un tableau
    this._students = value; # Applique le changement
  } # Fin du setter students
} # Fin de la classe




// Nous créons une classe pour gérer un cours. Cette classe est particulière car elle joue le rôle de filtre de sécurité. 
// Elle s'assure que le nom du cours est bien du texte, que la durée est bien un nombre et que la liste des étudiants est bien un tableau
// Elle utilise des fonctions spéciales (getters et setters) pour lire et modifier ces informations tout en vérifiant qu'on ne fait pas d'erreur

