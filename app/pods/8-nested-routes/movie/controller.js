import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";
import { fadeIn } from "ember-animated/motions/opacity";
import { wait } from "ember-animated";

export default Controller.extend({
    *transition({ receivedSprites }) {
        receivedSprites.forEach(sprite => {
            sprite.applyStyles({
                zIndex: 1
            })
            move(sprite);
            resize(sprite);
        });
    },

    *fade({ duration, insertedSprites }) {
        yield wait(duration / 2);

        insertedSprites.forEach(sprite => {
            fadeIn(sprite, { duration: duration / 2 });
        })
    }
});