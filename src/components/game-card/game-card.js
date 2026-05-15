import cardTemplateRaw from './game-card.html?raw';
import './game-card.scss';

// Inserting the template into the DOM once
document.body.insertAdjacentHTML('beforeend', cardTemplateRaw);

const template = document.getElementById('game-card-template');

export function createCard({ title, image, playUrl, demoUrl }) {
    const card = template.content.cloneNode(true);
    card.querySelector('.game-card__title > span').textContent = title;
    card.querySelector('.game-card__image > img').src = image;
    card.querySelector('.game-card__actions .btn-play').href = playUrl;
    card.querySelector('.game-card__actions .btn-demo').href = demoUrl;

    return card;
}
