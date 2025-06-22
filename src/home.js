import "./home.css";
import homePageImage from "./background-image.jpg";
import {container, clearContainer} from "./container";

export const renderHomePage = function(){
    clearContainer();
    
    const heading = document.createElement("h2");
    heading.textContent = "Restaurant";

    const image = document.createElement("img");
    image.src = homePageImage;
    image.className = "homeImg";

    const para = document.createElement("h3");
    para.textContent = "🔥 Experience the finest wood-fired cuisine in the city — rustic, bold,unforgettable. Join us for handcrafted dishes, warm ambiance, and an unforgettable dining experience.";

    container.appendChild(heading);
    container.appendChild(image);
    container.appendChild(para);
};