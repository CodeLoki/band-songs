import Controller from '@ember/controller';
import { action } from '@ember/object';
import { scheduleTask } from 'ember-lifeline';
import { modifier } from 'ember-modifier';

function scrollToCard(x: number): void {
    const body = document.querySelector('html');
    if (body) {
        body.scrollTop = x;
    }
}

export default class BaseSongsController extends Controller {
    lastScrollPosition = 0;

    scrollToSong = modifier(() => {
        if (this.lastScrollPosition) {
            scheduleTask(this, 'render', scrollToCard, this.lastScrollPosition);
            this.lastScrollPosition = 0;
        }

        return () => {};
    });

    @action cacheScrollPosition(): void {
        this.lastScrollPosition = document.querySelector('html')?.scrollTop ?? 0;
    }
}
