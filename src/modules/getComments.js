export default class Comments {
  static commentsKeyID =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gzuVGjybCPx7DImkOsad/comments";
  static commentApiEndpoint =
    "https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/gzuVGjybCPx7DImkOsad/comments";
  static gameAPI = "https://free-to-play-games-database.p.rapidapi.com/api";
  static commentPopup = document.querySelector(".comment-popup");

  static getGameComment = async (gameID) => {
    const response = await fetch(`${this.commentsKeyID}?item_id=${gameID}`);
    return response.json();
  };
  
  static commentCounter = (data) => (typeof (data) === 'object' ? data.length : 'invalid');
  
  static getTotalComments = async (gameID) => {
    const result = await this.getGameComment(gameID)
      .then((comment) => (!comment.error ? comment.length : 0))
      .catch(() => 0);
    return result;
  };

  static updateCommentCounter = async (gameID) => {
    await this.getTotalComments(gameID).then((totalComment) => {
      this.commentPopup.querySelector(".total-comments").innerHTML =
        totalComment;
    });
  };

  static get = (url) =>
    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c",
      },
    })
      .then((res) => res.json())
      .then((data) => data)
      .catch((error) => error);

  static getGameData = async (gameID) => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
        "X-RapidAPI-Key": "838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c",
      },
    };
    const response = await this.get(
      `${this.gameAPI}/game?id=${gameID}`,
      options
    );
    return response;
  };

  static post = (url, params = {}) =>
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(params),
    })
      .then((res) => res.text())
      .then((data) =>
        data.error ? { error: true, info: data } : { error: false, info: data }
      )
      .catch((error) => ({ error: true, info: error }));

  static addComment = async (params) => {
    const response = await this.post(this.commentApiEndpoint, params);
    return response;
  };

  static displayGameComments = (data) => {
    this.commentPopup.querySelector(".comments").innerHTML = data;
  };

  static showComments = (gameID) => {
    this.getGameComment(gameID).then((data) => {
      if (!data.error) {
        let comments = "";
        data.forEach((comment) => {
          comments += `<li class="comments-list">${comment.creation_date} <span> ${comment.username}:</span>  ${comment.comment}</li>`;
        });
        this.displayGameComments(comments);
      } else {
        this.displayGameComments("No comment posted yet.");
      }
    });
  };

  static closeCommentPopup = () => {
    document.querySelector("#close").addEventListener("click", () => {
      this.commentPopup.style.display = "none";
      this.commentPopup.innerHTML = "";
      //document.body.style.overflow = "visible";
      document.body.classList.remove("no-scroll");
    });
  };

  static showCommentPopup = async (gameID) => {
    await this.getGameData(gameID).then((data) => {
      this.commentPopup.innerHTML = `<div class="popup">
    <button id="close"><i class="fa fa-times" aria-hidden="true"></i></button>
    <div class="container">
        <div class="display">
          <div class="description">
            <img src=${data.thumbnail} alt="Thumbnail">
            <h3 class="game-title">${data.title}</h3>
          </div>
          <div class="display-detail">
            <h3>Game details: </h3>
           <ul>
             <li>${data.short_description}</li> 
             <li><strong>Date of Release:</strong> ${data.release_date}</li>
             <li><strong>Genre:</strong> ${data.genre}</li>                 
             <li><strong>Platform:</strong> ${data.platform}</li>                 
           </ul>  
          </div>
        </div>
      <div class="comment-container">
        <div class="comment-display">
          <h3 class='counter'>Comments(<span class="total-comments">0</span>)</h3>
          <ul class="comments">

          </ul>
        </div>
        <div class="comment">
        <div class="add-comment">
          <h3>Add Comment</h3>
        </div>
        <form class="form">
          <input type="text" name="name" id="name" placeholder="Your name" required>
          <textarea name="description" id="description" cols="30" rows="10"
              placeholder="Your insight" required></textarea>
          <button id=${gameID} type="submit" class="submit-btn">Comment</button>
        </form>
      </div>
      </div>
    </div>
  </div>`;
      this.showComments(gameID);
      const form = this.commentPopup.querySelector(".form");
      form.addEventListener("submit", (e) => {
        e.preventDefault();
        const user = form.elements.name.value;
        const description = form.elements.description.value;
        this.addComment({
          item_id: gameID,
          username: user,
          comment: description,
        }).then(() => {
          this.showComments(gameID);
          this.updateCommentCounter(gameID);
          form.reset();
        });
      });
    });
    this.commentPopup.style.display = "block";
    this.closeCommentPopup();
  };
}
