import cardListRaw from './winner-list.html?raw';
import './winner-list.scss';
import { createCard } from '../winner-card/winner-card.js';

// Swiper.js imports
import Swiper from 'swiper';
import { Autoplay } from 'swiper/modules';

export function renderWinnersList(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = cardListRaw;

    const cardsContainer = container.querySelector('.winners__cards');
    data.forEach(item => {
        const card = createCard(item);
        cardsContainer.appendChild(card);
    });

    sliderInit(containerId);
}

function sliderInit(containerId) {
    const container = '#' + containerId;

    const slider = new Swiper(container, {
        modules: [Autoplay],
        wrapperClass: 'winners__cards',
        slideClass: 'winner-card',
        slidesPerView: 'auto',
        autoplay: {
            delay: 2000
        },
        grabCursor: true,
    });
}