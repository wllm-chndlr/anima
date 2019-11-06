import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";
import { fadeIn, fadeOut } from "ember-animated/motions/opacity";
import { inject as service } from '@ember/service';
import { wait } from "ember-animated";

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

        removedSprites.forEach(sprite => {
            fadeOut(sprite, { duration: duration / 2 });
        });

        yield wait(duration / 2);

        insertedSprites.forEach(sprite => {
            fadeIn(sprite, { duration: duration / 2 });
        });
    }
});