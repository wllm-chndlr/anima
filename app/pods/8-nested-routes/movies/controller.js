import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import { inject as service } from '@ember/service';

export default Controller.extend({
    appState: service(),

    *transition({ duration, receivedSprites, insertedSprites, removedSprites }) {
        receivedSprites.forEach(sprite => {
            sprite.applyStyles({
                zIndex: 1
            })
            move(sprite);
            resize(sprite);
        });

        insertedSprites.forEach(sprite => fadeIn(sprite));

        removedSprites.forEach(sprite => {
            fadeOut(sprite, { duration: duration / 2 });
        });
    }
});