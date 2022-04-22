/* eslint-disable */
const gameFetch = async () => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
      "X-RapidAPI-Key": "838b0eeb18msh840203b450993abp154a9fjsnea041f3d274c",
    },
  };
  const response = await fetch(
    "https://free-to-play-games-database.p.rapidapi.com/api/games?category=shooter",
    options
  );
  return await response.json();
};

export default gameFetch;
