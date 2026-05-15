import "@/assets/styles/base.scss";
import { renderLayout } from '@/components/layout/layout.js';
import { renderGamesList } from '@/components/games-list/games-list.js';
import { renderWinnersList } from "@/components/winner-list/winner-list.js";
import { initSearchModal } from "@/components/search-modal/search-modal.js";

import { winnersData } from "@/data/winners.js";
import { topGamesData } from "@/data/top-games.js";
import { recentGamesData } from "@/data/recent-games.js";

// Layout render
renderLayout('app');

// Winners list render
renderWinnersList('winners-list', winnersData);

// Games lists render
renderGamesList('recent-games-list', recentGamesData);
renderGamesList('top-games-list', topGamesData);

// Initializing the search modal by clicking on the search icon
document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');

    if (searchBtn) {
        searchBtn.addEventListener('click', () => {
            initSearchModal();
        });
    }
});