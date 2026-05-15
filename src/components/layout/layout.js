import layoutRaw from './layout.html?raw';
import './layout.scss';

export function renderLayout(appId) {
    const app = document.getElementById(appId);
    app.innerHTML = layoutRaw;
}