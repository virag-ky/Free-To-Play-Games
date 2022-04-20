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
        <span class="likes"><i class="fas fa-heart fa-lg"></i><span class="number-of-likes">577 Likes</span></span>

       </div>
       <p class="description">${e.short_description}</p>
       <button class="comment">Comments</button>
      </div>
     </div>`;

      const blurProjects = [...document.querySelectorAll(".card")];
      const comments = [...document.querySelectorAll(".comment")];
      const images = [...document.querySelectorAll(".card-images")];
      const h2 = [...document.querySelectorAll("h2")];
      const description = [...document.querySelectorAll(".description")];

      for (let i = 0; i < comments.length; i += 1) {
        comments[i].addEventListener("click", () => {
          createPopup(
            images[i].getAttribute("src"),
            h2[i].textContent,
            description[i].textContent
          );
          document.body.classList.toggle("no-scroll");
          blurProjects.forEach((project) => project.classList.toggle("blur"));
        });
      }
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

/* Create pop-up */
const createPopup = (image, title, description) => {
  const main = document.querySelector("main");
  const div = document.createElement("div");
  div.classList.add("popup");

  const imageDiv = document.createElement("img");
  imageDiv.src = image;

  const gameTitle = document.createElement("h2");
  gameTitle.textContent = title;

  const gameDescription = document.createElement("p");
  gameDescription.textContent = description;

  const h3 = document.createElement("h3");
  h3.textContent = "Comments (1)";

  const commentsList = document.createElement("ul");
  commentsList.innerHTML = `<li>04/20/2022 Virag: This game is awesome!</li>`;

  const form = document.createElement("form");
  const h4 = document.createElement("h4");
  h4.textContent = "Add a comment";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Your name";

  const textarea = document.createElement("textarea");
  textarea.placeholder = "Your insights";

  const submitCommentBtn = document.createElement("input");
  submitCommentBtn.type = "button";
  submitCommentBtn.value = "Comment";

  form.appendChild(h4);
  form.appendChild(nameInput);
  form.appendChild(textarea);
  form.appendChild(submitCommentBtn);

  const exitBtn = document.createElement("button");
  exitBtn.innerHTML = `<i class="fas fa-times"></i>`;
  exitBtn.classList.add("exit");
  exitBtn.addEventListener("click", () => {
    div.remove();
    document.body.classList.toggle("no-scroll");
    const blurProjects = [...document.querySelectorAll(".card")];
    blurProjects.forEach((project) => project.classList.toggle("blur"));
  });

  div.appendChild(exitBtn);
  div.appendChild(imageDiv);
  div.appendChild(gameTitle);
  div.appendChild(gameDescription);
  div.appendChild(h3);
  div.appendChild(commentsList);
  div.appendChild(form);
  main.appendChild(div);
};

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
