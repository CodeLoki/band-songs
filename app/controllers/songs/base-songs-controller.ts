import Controller from '@ember/controller';
import { action } from '@ember/object';
import { scheduleOnce } from '@ember/runloop';

function scrollToCard(x: number): void {
    const body = document.querySelector('html');
    if (body) {
        body.scrollTop = x;
    }
}

export default class BaseSongsController extends Controller {
    lastScrollPosition = 0;

    @action cacheScrollPosition(): void {
        this.lastScrollPosition = document.querySelector('html')?.scrollTop ?? 0;
    }

    @action scrollToSong(): void {
        if (this.lastScrollPosition) {
            scheduleOnce('afterRender', scrollToCard, this.lastScrollPosition);
            this.lastScrollPosition = 0;
        }
    }
}
