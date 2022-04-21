import './sass/style.scss';
import { plusDivs } from './modules/slideShow.js';
import FetchGamesApi from './modules/getGames.js';
import Likes from './modules/getLikes.js' 
import Comments from "./modules/getComments.js";
import './assets/images/image1.png';
import './assets/images/image11.png';
import './assets/images/image2.png';
import './assets/images/image4.png';
import './assets/images/image5.png';
import './assets/images/image6.png';
import './assets/images/image8.png';
import './assets/images/image3.png';
import './assets/images/image10.png';
import './assets/images/image13.png';
import './assets/images/image15.png';
import './assets/images/image17.png';

const arrowRight = document.querySelector('.b-display-right');
arrowRight.addEventListener('click', () => plusDivs(1));

const arrowLeft = document.querySelector('.b-display-left');
arrowLeft.addEventListener('click', () => plusDivs(-1));

FetchGamesApi.executor(); 

const list = document.getElementById('cards');
list.addEventListener('click', (e) => {
  if (e.target.className === 'far fa-heart likes') {
    const icons = e.target;
    const likeId = icons.parentNode.querySelector('span').id;
    const displayLikes = icons.parentNode.querySelector('span');
    Likes.postLikes(likeId);
    Likes.updateLikes(likeId);
    Likes.addLikes(displayLikes);
  }
});

document.addEventListener('click', async (e) => {
  if (e.target.matches('.comment-btn')) {
    Comments.showCommentPopup(e.target.id);
    const comment = await Comments.getGameComment(e.target.id);
    Comments.updateCommentCounter(e.target.id);
  }})
