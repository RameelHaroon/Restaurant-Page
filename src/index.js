import { renderHomePage } from './home.js';
import {container, clearContainer} from "./container";

import "./index.css";

renderHomePage();

const homePageBtn = document.querySelector("#homeBtn");
const menuPageBtn = document.querySelector("#menuBtn");
const aboutPageBtn = document.querySelector("#aboutBtn");

homePageBtn.addEventListener("click", () => renderHomePage())
menuPageBtn.addEventListener("click", () => clearContainer())
aboutPageBtn.addEventListener("click", () => clearContainer())