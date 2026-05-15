import cardTemplateRaw from './winner-card.html?raw';
import './winner-card.scss';

// Inserting the template into the DOM once
document.body.insertAdjacentHTML('beforeend', cardTemplateRaw);

const template = document.getElementById('winner-card-template');

export function createCard({ gameImage, gameTitle, reward, username }) {
    const card = template.content.cloneNode(true);
    card.querySelector('.winner-card__image > img').src = gameImage;
    card.querySelector('.winner-card__game-title').textContent = gameTitle;
    card.querySelector('.winner-card__reward').textContent = '$ ' + reward;
    card.querySelector('.winner-card__username').textContent = username;

    return card;
}
