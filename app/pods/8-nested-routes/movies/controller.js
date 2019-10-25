import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";
import { fadeIn } from "ember-animated/motions/opacity";

export default Controller.extend({
    *transition({ receivedSprites, insertedSprites }) {
        receivedSprites.forEach(sprite => {
            move(sprite);
            resize(sprite);
        });

        insertedSprites.forEach(sprite => fadeIn(sprite));
    }
});