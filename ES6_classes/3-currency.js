/**3. Methods, static methods, computed methods names..... MONEY

Implement a class named Currency:

- Constructor attributes:
code (String)
name (String)
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullCurrency that will return the attributes in the following format name (code). */

export default class Currency { // define and export the class 'Currency'
    constructor(code, name) {   // constructor prep the object with 'code' and 'name'
        this._code = code;      // we stock 'code' with an underscore for internal usage
        this._name = name;      // we stock 'name' with an underscore for internal usage
    }

    get code() {                // the getter to READ the code of the currency
        return this._code       // we return the value STORED in _code
    }                           // end of getter code

    set code(value) {           // the setter for MODIFYING the code of the currency
        this._code = value      // we set/actualise the value of _code
    }                           // end of setter code

    get name() {                // the getter to READ the name of the currency
        return this._name       // we return the value STORED in _name                               
    }                           // end of getter code

    set name(value) {           // the setter for modifying the name of the currency
        this._name = value      // WE set/actualise the value of _name
    }                           // end of getter code

    displayFullCurrency() {     // method for printing the currency in desired format
        return '${this._name} (${this._code})';
     }
}