import Controller from '@ember/controller';
import faker from 'faker';
import { fadeIn, fadeOut } from 'ember-animated/motions/opacity';
import move from 'ember-animated/motions/move';

export default Controller.extend({
  *transition({ duration, insertedSprites, removedSprites }) {
    for (let sprite of removedSprites) {
      sprite.endAtPixel({ x: 0 - sprite.initialBounds.width });
      move(sprite, {
        duration: duration * (1/2)
      });
      fadeOut(sprite, {
        duration: duration * (1/2)
      });
    }

    for (let sprite of insertedSprites) {
      sprite.startAtPixel({ x: window.innerWidth });
      move(sprite, {
        duration: duration * (1/2)
      });
      fadeIn(sprite, {
        duration: duration * (1/2)
      });
    }
  },

  word: faker.company.bsBuzz().toUpperCase(),

  actions: {
    changeWord() {
      this.set('word', faker.company.bsBuzz().toUpperCase());
    }
  }
});