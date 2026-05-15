import modalRaw from './search-modal.html?raw';
import './search-modal.scss';

import { renderGamesList } from "@/components/games-list/games-list.js";
import { allGamesData } from "@/data/all-games.js";

export function initSearchModal() {
    // Let's check if the modal is already inserted
    if (!document.getElementById('modal')) {
        // Insert a modal at the end of the body
        document.body.insertAdjacentHTML('beforeend', modalRaw);

        // Render games list
        renderGamesList('search-games-list', allGamesData, false);

        const modal = document.getElementById('search-modal');
        const modalOverlay = modal.querySelector('.modal__overlay');
        const closeBtn = modal.querySelector('#modal-close');
        const input = modal.querySelector('.modal__input');
        const inputClearBtn = modal.querySelector('#input-clear');

        // Clear input value
        inputClearBtn.addEventListener('click', () => {
           input.value = '';
           input.focus();
        });

        // Search by card titles
        input.addEventListener('change', () => {
            const query = input.value.toLowerCase();
            const cards = modal.querySelectorAll('.game-card');

            cards.forEach(card => {
                const title = card.querySelector('.game-card__title').textContent.toLowerCase();

                if (title.includes(query)) {
                    card.style.display = ''; // показываем
                } else {
                    card.style.display = 'none'; // скрываем
                }
            });
        });

        // Close modal
        closeBtn.addEventListener('click', () => {
            modal.classList.add('hidden');
        });

        // Close by clicking on the overlay
        modalOverlay.addEventListener('click', () => {
            modal.classList.add('hidden');
        });
    }

    // Show modal
    const modal = document.getElementById('search-modal');
    modal.classList.remove('hidden');
    modal.querySelector('.modal__input').focus();
}
