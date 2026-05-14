/**4. Pricing

Import the class Currency from 3-currency.js

Implement a class named Pricing:

Constructor attributes:
amount (Number)
currency (Currency)
Each attribute must be stored in an "underscore" attribute version (ex: name is stored in _name)
Implement a getter and setter for each attribute.
Implement a method named displayFullPrice that returns the attributes in the following format amount currency_name (currency_code).
Implement a static method named convertPrice. It should accept two arguments: amount (Number), conversionRate (Number). The function should return the amount multiplied by the conversion rate.
 */


import Currency from './3-currency.js'

export default class Pricing {
    constructor(amount, currency) {
        this._amount = amount;
        this._currency = currency;
    }

    get amount() {
        return this._amount
    }

    set amount(value) {
        this._amount = value
    }

    get currency() {
        return this._currency
    }

    set currency(value) {
        this._currency = value
    }

    displayFullPrice() {
            return `${this._amount} ${this._currency.name} (${this._currency.code})`;
        }

    static convertPrice(amount, conversionRate) {
        return amount * conversionRate;
    }
}