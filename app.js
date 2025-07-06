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

app.router = Router;
app.store = Store;

window.addEventListener("DOMContentLoaded", () => {
    app.router.init();
    loadData();
});
