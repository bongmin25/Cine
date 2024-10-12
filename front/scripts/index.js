const axios = require("axios");
const renderCards = require("./renderCards");

// function fetchData() {
//   $.get("https://students-api.up.railway.app/movies", (movies) => {
//     renderCards(movies);
//   });
// }

// fetchData();

const fetchData = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");
    renderCards(data);
  } catch (err) {
    console.log(err);
  }
};

fetchData();

module.exports = { fetchData };
