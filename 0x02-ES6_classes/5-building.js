/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */

/*
 * some building and construction
 * building some skycrappers
 * and warn people to evacuate the buildings
 * using static methods
*/

export default class Building {
  constructor(sqft) {
    if (new.target !== Building && this.evacuationWarningMessage === undefined) {
      throw Error('Class extending Building must override evacuationWarningMessage');
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }
}

