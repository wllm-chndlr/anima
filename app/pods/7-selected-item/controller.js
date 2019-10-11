import Controller from "@ember/controller";
import { A } from "@ember/array";
import move from "ember-animated/motions/move";
import { fadeOut } from "ember-animated/motions/opacity";

export default Controller.extend({

  init() {
    this._super(...arguments);

    this.redList = A([1, 2, 3]);
  },

  selectedItem: null,

  *redTransition({ removedSprites, keptSprites, sentSprites }) {
    keptSprites.forEach(move);
    removedSprites.forEach(fadeOut);
    sentSprites.forEach(move);
  },

  *selectedTransition({ removedSprites, receivedSprites }) {
    removedSprites.forEach(fadeOut);
    receivedSprites.forEach(move);
  },

  actions: {
    select(item) {
      // Add back in old item
      if (this.selectedItem) {
        this.redList.addObject(this.selectedItem);
      }

      // Set new item
      this.set('selectedItem', item);
      this.redList.removeObject(item);
    }
  }
});