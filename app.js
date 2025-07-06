import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';

window.app = {};

// Web Components Imports
import  MenuPage  from './components/MenuPage.js';
import  OrderPage  from './components/OrderPage.js';
import  DetailsPage  from './components/DetailsPage.js';
import { loadData } from "./services/Menu.js";
import ProductItem from './components/ProductItem.js';
import CartItem from './components/CartItem.js';

app.router = Router;
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    loadData();
});

window.addEventListener("appcartchange", event => {
    const badge = document.getElementById("badge");
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = qty;
    badge.hidden = qty == 0;
});