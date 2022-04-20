import "./sass/style.scss";
import { plusDivs } from "./modules/slideShow.js";
import FetchGamesApi from "./modules/getGames.js";
import "./assets/images/image1.png";
import "./assets/images/image11.png";
import "./assets/images/image2.png";
import "./assets/images/image4.png";
import "./assets/images/image5.png";
import "./assets/images/image6.png";
import "./assets/images/image8.png";
import "./assets/images/image3.png";
import "./assets/images/image10.png";
import "./assets/images/image13.png";
import "./assets/images/image15.png";
import "./assets/images/image17.png";

const arrowRight = document.querySelector(".b-display-right");

arrowRight.addEventListener("click", () => plusDivs(1));

const arrowLeft = document.querySelector(".b-display-left");
arrowLeft.addEventListener("click", () => plusDivs(-1));

FetchGamesApi.executor();
