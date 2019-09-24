import Controller from "@ember/controller";
import { A } from "@ember/array";
import { fadeOut } from "ember-animated/motions/opacity";
import move from "ember-animated/motions/move";
import { wait } from "ember-animated";
// import { isEqual } from "lodash-es";

const COLORS = ["blue", "green", "red"];

export default Controller.extend({
  *transition({ duration, removedSprites, keptSprites }) {
    for (let sprite of removedSprites) {
      yield fadeOut(sprite, { duration: duration * (1 / 2) });
    }

    for (let sprite of keptSprites) {
      move(sprite, { duration: duration * (1 / 2) });
      yield wait(50);
    }
  },

  init() {
    this._super(...arguments);

    this.set(
      "apps",
      A(
        [...Array(16)].map((_, i) => ({
          id: i,
          name: i + 1,
          color: COLORS[i % 3]
        }))
      )
    );
  },
  actions: {
    removeApp(app) {
      this.apps.removeObject(app);
    }
  }
});