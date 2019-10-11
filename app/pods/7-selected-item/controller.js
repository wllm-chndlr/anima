import Controller from "@ember/controller";
import { A } from "@ember/array";
import move from "ember-animated/motions/move";

export default Controller.extend({

  init() {
    this._super(...arguments);

    this.redList = A([1, 2, 3]);
  },

  selectedItem: null,

  actions: {
    select(item) {
      this.set('selectedItem', item);
    }

  }
});