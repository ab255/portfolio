import React from 'react';
import '../styles/cards.css';
import jetPackImage from '../../public/assets/jetPack.png';
import homeBrewImage from '../../public/assets/homebrewJournal.png';
import weatherImage from '../../public/assets/weatherForecast.png';

var cardImage = {
  backgroundImage: `url(${homeBrewImage})`,
  backgroundSize: "111%",
  borderRadius: "10px 50px 0 0",
  height: "10em",
};
var cardImage2 = {
  backgroundImage: `url(${jetPackImage})`,
  backgroundSize: "140%",
  borderRadius: "10px 50px 0 0",
  height: "10em",
};
var cardImage3 = {
  backgroundImage: `url(${weatherImage})`,
  backgroundSize: "100%",
  borderRadius: "10px 50px 0 0",
  height: "10em",
};

const Cards = () => {
  return (
    <section className="three-cards">
      <article className="card-1 card">
        <div style={cardImage}></div>
        <h2 className="card-header">Homebrew Journal</h2>
        <p className="card-desription">
          An application in React Native that uses AsyncStorage to persist data. Built for home brewers to be able to record the entire brew process from the ingredients in their recipe to bottling or kegging. Home brew journals tend to be all hand written notes, so having a downloadable application allows users to systematically store their brew data on their phone and access it easily.
        </p>
        <a
          href="https://github.com/ab255/homebrewJournal"
          className="card-link"
          target="_blank">
          Github</a>
      </article>
      <article className="card-2 card">
        <div style={cardImage2}></div>
        <h2 className="card-header">Jet Pack</h2>
        <p className="card-desription">
          An application in Node.js with embedded HTML that uses MongoDB to persist data. Built so users are able to save bookmarked pages with a shortened URL. This allows users to save long URLs and have a shortened version created for them that redirects them to the original URL.
        </p>
        <a
          href="https://github.com/madison-kerndt/jet-pack"
          className="card-link"
          target="_blank">
          Github</a>
      </article>
      <article className="card-3 card">
        <div style={cardImage3}></div>
        <h2 className="card-header">Weather Tracker</h2>
        <p className="card-desription">
          An application in React that also uses React Router for navigation, Redux for data storage and OpenWeatherMap API to recieve current weather data. Built so users are able to see the current local weather as well as cities they can select by zip code.  Allows users to see weather from all locations at once as well as see an extended forecast from their current city.
        </p>
        <a href="https://github.com/07nguyenpaul/weather-forecast" className="card-link" target="_blank">Github</a>
      </article>
    </section>
  )
}

export default Cards;
