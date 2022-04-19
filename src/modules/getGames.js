export default class FetchGamesApi {
  constructor() {}

  static getGamesFetch = (async) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c",
      },
    };
    return fetch(
      "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
      options
    ).then((response) => response.json());
  };

  static gamesRender = async (gamesData) => {
    gamesData.forEach(async (e) => {
      // const likes = await updateLikes(e.id);
      const gameList = document.querySelector(".cards-section");
      gameList.innerHTML += `
      <div class="card">
      <img src="${e.thumbnail}" alt="" class="card-images" />
      <div class="content">
       <div class="name-div">
        <h2>${e.title}</h2>
        <span class="likes"><i class="fas fa-heart fa-lg"></i><span class="number-of-likes">5 Likes</span></span>

       </div>
       <p class="description">${e.short_description}</p>
       <button class="comment">Comments</button>
      </div>
     </div>`;
    });
  };

  static executor = async () => {
    const movie = await this.getGamesFetch();
    const gamesData = movie.slice(0, 40).map((item) => item);
    await this.gamesRender(gamesData);
  };

  static gamesCounter = (data) => {
    const countItems = data.length;
    return countItems;
  };
}
/* export default class Overpass {
static options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
    'X-RapidAPI-Key': '838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c',
  },
};

static getGames() { fetch('https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter', options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
}
} */
