import Controller from "@ember/controller";
import move from "ember-animated/motions/move";
import resize from "ember-animated/motions/resize";
import { fadeIn } from "ember-animated/motions/opacity";
import { inject as service } from '@ember/service';

export default Controller.extend({
    appState: service(),

    *transition({ receivedSprites, insertedSprites }) {
        receivedSprites.forEach(sprite => {
            move(sprite);
            resize(sprite);
        });

        insertedSprites.forEach(sprite => fadeIn(sprite));
    }
});