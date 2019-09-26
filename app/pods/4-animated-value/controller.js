import Controller from '@ember/controller';
import faker from 'faker';
import { toLeft, toRight } from 'ember-animated/transitions/move-over';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import move from 'ember-animated/motions/move';
import { wait } from 'ember-animated';

export default Controller.extend({
  // transition: toRight,
  *transition({ insertedSprites, removedSprites }) {
    for (let sprite of removedSprites) {
      sprite.endTranslatedBy(0, sprite.initialBounds.height);
      move(sprite);
      fadeOut(sprite);
    }

    yield wait(150);

    for (let sprite of insertedSprites) {
      sprite.startTranslatedBy(0, -sprite.finalBounds.height);
      move(sprite);
      fadeIn(sprite);
    }

  },

  word: faker.company.bsBuzz().toUpperCase(),

  actions: {
    changeWord() {
      this.set('word', faker.company.bsBuzz().toUpperCase());
    }
  }
});