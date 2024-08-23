document.addEventListener("DOMContentLoaded", () => {
    const t = 6;
    const ring = document.querySelector('.ring');
    for ( let i = 1; i <= t; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dot.style.setProperty('--i', i);
        dot.style.setProperty('--t', t);
        ring.appendChild(dot);
    }
});