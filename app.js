window.addEventListener('DOMContentLoaded', () => {
    let nav = $('nav');
    console.log(nav)
    nav.innerHTML = `
        <h2>Hello DOM</h2>
        <p>This is HTML within a Javascript string</p>
    ` 
})

const $ = () => document.querySelector.call(this, arguments);
const $$ = () => document.querySelectorAll.call(this, arguments);
HTMLElement.prototype.on = (a, b, c) => this.addEventListener(a, b, c);
HTMLElement.prototype.off = (a, b) => this.removeEventListener(a, b);
HTMLElement.prototype.$ = (s) => this.querySelector(s);
HTMLElement.prototype.$ = (s) => this.querySelectorAll(s);