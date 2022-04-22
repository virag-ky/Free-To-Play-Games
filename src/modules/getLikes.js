export default class Likes {
static url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gzuVGjybCPx7DImkOsad/likes';

static postLikes = async (id) => {
  const likesObject = { item_id: id };
  const response = await fetch(this.url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(likesObject),
  });
  return response;
};

static getLikes = async () => {
  const likesData = await fetch(this.url);
  const allLikes = await likesData.json();
  return allLikes;
};

static updateLikes = async (id) => {
  const likedData = await this.getLikes();
  let results = 0;
  likedData.forEach((element) => {
    if (element.item_id.toString() === id.toString()) {
      results = element.likes;
    }
  });
  return results;
};

static addLikes = (e) => {
  const currentNumber = e.innerText;
  e.innerText = parseInt(currentNumber, 10) + 1;
};

static showLikes = (itemsCount) => {
  const counts = document.querySelector('.show');
  counts.innerText = `Games(${itemsCount})`;
};
}