import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";

export default Controller.extend({
    *transition({ receivedSprites }) {
        receivedSprites.forEach(sprite => {
            move(sprite);
            resize(sprite);
        });
    }
});