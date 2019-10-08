import Controller from "@ember/controller";
import { A } from "@ember/array";
import move from "ember-animated/motions/move";
import { fadeOut } from "ember-animated/motions/opacity";

export default Controller.extend({

  init() {
    this._super(...arguments);

    this.redList = A([1, 2, 3]);
    this.blueList = A([]);

  },

  * redTransition({ removedSprites, keptSprites }) {
      removedSprites.forEach(fadeOut);
      keptSprites.forEach(move);
  },

  actions: {
    moveToBlue(item) {
      this.blueList.addObject(item);
      this.redList.removeObject(item);
    },

    moveToRed(item) {
      this.redList.addObject(item);
      this.blueList.removeObject(item);
    }
  }


});