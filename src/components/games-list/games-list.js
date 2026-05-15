import cardListRaw from './games-list.html?raw';
import './games-list.scss';
import { createCard } from '../game-card/game-card.js';

// Swiper.js imports
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';

export function renderGamesList(containerId, data, sliderOn = true) {
    const container = document.getElementById(containerId);
    container.innerHTML = cardListRaw;

    if (data.title) {
        const titleContainer = container.querySelector('.games-list__title');

        if (data.title.length > 1) {
            data.title.forEach((title, index) => {
                titleContainer.insertAdjacentHTML('beforeend', `<span ` + (index === 0 ? `class="active"` : ``) + `>${title}</span>`);
            });
        } else {
            titleContainer.textContent = data.title[0];
        }
    }

    const cardsContainer = container.querySelector('.games-list__cards');
    data.games.forEach(item => {
        const card = createCard(item);
        cardsContainer.appendChild(card);
    });

    if (sliderOn) {
        sliderInit(containerId);
    }
}

function sliderInit(containerId) {
    const container = '#' + containerId;

    const slider = new Swiper(container, {
        modules: [Navigation],
        wrapperClass: 'games-list__cards',
        slideClass: 'game-card',
        slidesPerView: 'auto',
        grabCursor: true,
        pagination: false,
        navigation: {
            nextEl: '.nav-btn--next',
            prevEl: '.nav-btn--prev',
        },
    });
}