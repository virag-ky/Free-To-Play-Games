import Likes from './getLikes.js';

export default class FetchGamesApi {
  static getGamesFetch = async () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c',
      },
    };
    return fetch(
      'https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter',
      options,
    ).then((response) => response.json());
  };

  static executor = async () => {
    const movie = await this.getGamesFetch();
    const gamesData = movie.slice(0, 40).map((item) => item);
    document.querySelectorAll('.game-counter').forEach((elem) => {
      elem.innerHTML = this.gamesCounter(gamesData);
    });
    await this.gamesRender(gamesData);
  };

  static gamesRender = async (gamesData) => {
    gamesData.forEach(async (e) => {
      const likes = await Likes.updateLikes(e.id);
      const gameList = document.getElementById('cards');
      gameList.innerHTML += `
      <div class="card">
      <img src="${e.thumbnail}" alt="Thumbnail" class="card-images">
      <div class="content">
      <div class="name-div">
      <h2>${e.title}</h2>
      <div class="like-wrapper"><i class="far fa-heart likes" id="love-icon"></i>
      <span class="likes" id="${e.id}">${likes}</span></div>
      </div>
      <p class="description">${e.short_description}</p>
      <button id="${e.id}" class="comment-btn">Comments</button>
      </div>
     </div>
      `;
    });
  };

  static gamesCounter = (data) => {
    const countItems = data.length;
    return countItems;
  };

  static createGameID = async () => {
    const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    const result = await fetch(`${requestURL}apps/`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.text());
    return result;
  };

  static createGameID2 = async () => {
    const requestURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';
    const options = {
      method: 'POST',
    };
    fetch(`${requestURL}apps/`, options).then((response) => response.json());
  };
}
