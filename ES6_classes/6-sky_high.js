/**6. Inheritance

Import Building from 5-building.js.

Implement a class named SkyHighBuilding that extends from Building:

Constructor attributes:
sqft (Number) (must be assigned to the parent class Building)
floors (Number)
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name)
Implement a getter for each attribute.
Override the method named evacuationWarningMessage and return the following string Evacuate slowly the NUMBER_OF_FLOORS floors. */

import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {       // create child class inheriting from parent Building. using extend
    constructor(sqft, floors) {
        super(sqft);                                         // sends sqft to parent for it to register in _sqft
        this._floors = floors;                              // register number of floors locally(underscore)
    }

    get sqft() {                                            // Getter for sqft(even if it's already present at parent)
        return this._sqft;                                  // returns the value stored by the parent
    }

    get floors() {
        return this._floors;
    }

    evacuationWarningMessage() {
        return `Evacuate slowly the ${this._floors} floors`
    }
}