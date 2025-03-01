import React from "react";


import Card from "./components/Card";

const cardData = [
  {
    image: "hunterxhunter.jpg",
    title: "#1: Hunter x Hunter",
    subtitle: "Genre: Action, Adventure",
    link: "https://www.crunchyroll.com/series/GY3VKX1MR/hunter-x-hunter",
  },
  {
    image: "haikyuu.jpg",
    title: "#2: Haikyuu",
    subtitle: "Genre: Sports",
    link: "https://www.crunchyroll.com/series/GY8VM8MWY/haikyu",
  },
  {
    image: "madmen.jpg",
    title: "#3: Mad Men",
    subtitle: "Genre: Historical Fiction",
    link: "https://www.amazon.com/Mad-Men-Season-1/dp/B001A5HBAG",
  },
  {
    image: "aot.png",
    title: "#4: Attack On Titan",
    subtitle: "Genre: Action",
    link: "https://www.crunchyroll.com/series/GR751KNZY/attack-on-titan",
  },
  {
    image: "bettercallsaul.jpg",
    title: "#5: Better Call Saul",
    subtitle: "Genre: Drama",
    link: "https://www.netflix.com/title/80021955",
  },
  {
    image: "breakingbad.jpg",
    title: "#6: Breaking Bad",
    subtitle: "Genre: Drama",
    link: "https://www.netflix.com/title/70143836",
  },
  {
    image: "onepiece.jpg",
    title: "#7: One Piece",
    subtitle: "Genre: Adventure",
    link: "https://www.crunchyroll.com/series/GRMG8ZQZR/one-piece?utm_campaign=media_actions&utm_medium=deep_link&utm_source=google",
  },
  {
    image: "truedetective.jpg",
    title: "#8: True Detective",
    subtitle: "Genre: Detective Fiction",
    link: "https://www.amazon.com/True-Detective-Season-1/dp/B00KF7OOIW",
  },
  {
    image: "severance-poster.png",
    title: "#9: Severance",
    subtitle: "Genre: Sci-Fi, Mystery",
    link: "https://tv.apple.com/us/show/severance/umc.cmc.1srk2goyh2q2zdxcx605w8vtx",
  },
  {
    image: "arcane.jpg",
    title: "#10: Arcane",
    subtitle: "Genre: Animation",
    link: "https://www.netflix.com/title/81435684",
  }
  
];

const App = () => {
  return (
    <div className="App">
      <h1>Favorite TV Shows</h1>
      <div className="container">
        {cardData.map((item, index) => (
          <Card
            key={index}
            image={item.image}
            title={item.title}
            subtitle={item.subtitle}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
