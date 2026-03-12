const tracks = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    embed: "https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"
  },
  {
    title: "As It Was",
    artist: "Harry Styles",
    embed: "https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7"
  },
  {
    title: "Another Love",
    artist: "Tom Odell",
    embed: "https://open.spotify.com/embed/track/3JvKfv6T31zO0ini8iNItO"
  },
  {
    title: "Sweater Weather",
    artist: "The Neighbourhood",
    embed: "https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6"
  },
  {
    title: "505",
    artist: "Arctic Monkeys",
    embed: "https://open.spotify.com/embed/track/58ge6dfP91o9oXMzq3XkIS"
  },
  {
    title: "Heat Waves",
    artist: "Glass Animals",
    embed: "https://open.spotify.com/embed/track/02MWAaffLxlfxAUY7c5dvx"
  },
  {
    title: "Night Changes",
    artist: "One Direction",
    embed: "https://open.spotify.com/embed/track/5O2P9iiztwhomNh8xkR9lJ"
  },
  {
    title: "Midnight City",
    artist: "M83",
    embed: "https://open.spotify.com/embed/track/3AhXZa8sUQht0UEdBJgpGc"
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    embed: "https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3"
  },
  {
    title: "Perfect",
    artist: "Ed Sheeran",
    embed: "https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v"
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    embed: "https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP"
  },
  {
    title: "Radioactive",
    artist: "Imagine Dragons",
    embed: "https://open.spotify.com/embed/track/62yJjFtgkhUrXktIoSjgP2"
  },
  {
    title: "Counting Stars",
    artist: "OneRepublic",
    embed: "https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1"
  },
  {
    title: "Someone You Loved",
    artist: "Lewis Capaldi",
    embed: "https://open.spotify.com/embed/track/7qEHsqek33rTcFNT9PFqLf"
  },
  {
    title: "Starboy",
    artist: "The Weeknd",
    embed: "https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB"
  },
  {
    title: "Take On Me",
    artist: "a-ha",
    embed: "https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L"
  },
  {
    title: "Bohemian Rhapsody",
    artist: "Queen",
    embed: "https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J"
  },
  {
    title: "Billie Jean",
    artist: "Michael Jackson",
    embed: "https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5"
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    embed: "https://open.spotify.com/embed/track/2LlQb7Uoj1kKyGhlkBf9aC"
  },
  {
    title: "Smells Like Teen Spirit",
    artist: "Nirvana",
    embed: "https://open.spotify.com/embed/track/5ghIJDpPoe3CfHMGu71E6T"
  },
  {
    title: "Hotel California",
    artist: "Eagles",
    embed: "https://open.spotify.com/embed/track/40riOy7x9W7GXjyGp4pjAv"
  },
  {
    title: "Sweet Child O' Mine",
    artist: "Guns N' Roses",
    embed: "https://open.spotify.com/embed/track/7o2CTH4ctstm8TNelqjb51"
  },
  {
    title: "Wonderwall",
    artist: "Oasis",
    embed: "https://open.spotify.com/embed/track/7ygpwy2qP3NbrxVkHvUhXY"
  },
  {
    title: "Lose Yourself",
    artist: "Eminem",
    embed: "https://open.spotify.com/embed/track/7MJQ9Nfxzh8LPZ9e9u68Fq"
  },
  {
    title: "Envolver",
    artist: "Anitta",
    embed: "https://open.spotify.com/embed/track/2qxmye6gAegTMjLKEBoR3d"
  },
  {
    title: "Vai Malandra",
    artist: "Anitta",
    embed: "https://open.spotify.com/embed/track/6t9F1z5xk2mO4RZ0sZx7MZ"
  },
  {
    title: "Kenny G",
    artist: "Matuê",
    embed: "https://open.spotify.com/embed/track/4G8gkOterJn0Ywt6uhqbhp"
  },
  {
    title: "Máquina do Tempo",
    artist: "Matuê",
    embed: "https://open.spotify.com/embed/track/6xX7nYxV1lXHrp236UMtO4"
  },
  {
    title: "Tipo Gin",
    artist: "Kevin O Chris",
    embed: "https://open.spotify.com/embed/track/3Y1vV7Y2kZZgwyXR0YJIUK"
  },
  {
    title: "Ela É do Tipo",
    artist: "Kevin O Chris",
    embed: "https://open.spotify.com/embed/track/6K8VQ84M3q2F7YQH7hV7wF"
  },
  {
    title: "Dias de Luta, Dias de Glória",
    artist: "Charlie Brown Jr.",
    embed: "https://open.spotify.com/embed/track/0gplL1WMoJ6iYaPgMCL0gX"
  },
  {
    title: "Céu Azul",
    artist: "Charlie Brown Jr.",
    embed: "https://open.spotify.com/embed/track/6GmHnXy1p9N0UEhoJaMItZ"
  },
  {

  
title:"Viva La Vida",
artist:"Coldplay",
embed:"https://open.spotify.com/embed/track/1mea3bSkSGXuIRvnydlB5b"
},

{
title:"The Scientist",
artist:"Coldplay",
embed:"https://open.spotify.com/embed/track/75JFxkI2RXiU7L9VXzMkle"
},

{
title:"Yellow",
artist:"Coldplay",
embed:"https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg"
},

{
title:"Numb",
artist:"Linkin Park",
embed:"https://open.spotify.com/embed/track/2nLtzopw4rPReszdYBJU6h"
},

{
title:"In The End",
artist:"Linkin Park",
embed:"https://open.spotify.com/embed/track/60a0Rd6pjrkxjPbaKzXjfq"
},

{
title:"Faded",
artist:"Alan Walker",
embed:"https://open.spotify.com/embed/track/698ItKASDavgwZ3WjaWjtz"
},

{
title:"Animals",
artist:"Martin Garrix",
embed:"https://open.spotify.com/embed/track/6Jv5y6xv9mZzZJ8U5zq4xF"
},

{
title:"Wake Me Up",
artist:"Avicii",
embed:"https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2"
},

{
title:"Levels",
artist:"Avicii",
embed:"https://open.spotify.com/embed/track/6XeXH6QK4uF0yS9z5eO3nT"
},

{
title:"Titanium",
artist:"David Guetta",
embed:"https://open.spotify.com/embed/track/1VdZ0vKfR5jneCmWIUAMxK"
},

{
title:"Lean On",
artist:"Major Lazer",
embed:"https://open.spotify.com/embed/track/1Lim1Py7xBgbAkAys3AGAG"
},

{
title:"Closer",
artist:"The Chainsmokers",
embed:"https://open.spotify.com/embed/track/7BKLCZ1jbUBVqRi2FVlTVw"
},

{
title:"Happier",
artist:"Marshmello",
embed:"https://open.spotify.com/embed/track/7BqBn9nzAq8spo5e7cZ0dJ"
},

{
title:"Sunflower",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P"
},

{
title:"Rockstar",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/7wGoVu4Dady5GV0Sv4UIsx"
},

{
title:"Circles",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/21jGcNKet2qwijlDFuPiPb"
},

{
title:"Old Town Road",
artist:"Lil Nas X",
embed:"https://open.spotify.com/embed/track/2YpeDb67231RjR0MgVLzsG"
},

{
title:"Industry Baby",
artist:"Lil Nas X",
embed:"https://open.spotify.com/embed/track/27NovPIUIRrOZoCHxABJwK"
},

{
title:"Bad Guy",
artist:"Billie Eilish",
embed:"https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m"
},

{
title:"Lovely",
artist:"Billie Eilish",
embed:"https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4"
},

{
title:"Hello",
artist:"Adele",
embed:"https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB"
},

{
title:"Rolling In The Deep",
artist:"Adele",
embed:"https://open.spotify.com/embed/track/1c8gk2PeTE04A1pIDH9YMk"
},

{
title:"Someone Like You",
artist:"Adele",
embed:"https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB"
},

{
title:"Poker Face",
artist:"Lady Gaga",
embed:"https://open.spotify.com/embed/track/6wVWJl64yoTzU27EI8ep20"
},

{
title:"Bad Romance",
artist:"Lady Gaga",
embed:"https://open.spotify.com/embed/track/0SiywuOBRcynK0uKGWdCnn"
},

{
title:"Shallow",
artist:"Lady Gaga",
embed:"https://open.spotify.com/embed/track/2VxeLyX666F8uXCJ0dZF8B"
},

{
title:"Firework",
artist:"Katy Perry",
embed:"https://open.spotify.com/embed/track/4lCv7b86sLynZbXhfScfm2"
},

{
title:"Roar",
artist:"Katy Perry",
embed:"https://open.spotify.com/embed/track/27tNWlhdAryQY04Gb2ZhUI"
},

{
title:"Dark Horse",
artist:"Katy Perry",
embed:"https://open.spotify.com/embed/track/5jrdCoLpJSvHHorevXBATy"
},

{
title:"Havana",
artist:"Camila Cabello",
embed:"https://open.spotify.com/embed/track/1rfofaqEpACxVEHIZBJe6W"
},

{
title:"Señorita",
artist:"Shawn Mendes",
embed:"https://open.spotify.com/embed/track/0TK2YIli7K1leLovkQiNik"
},

{
title:"Stitches",
artist:"Shawn Mendes",
embed:"https://open.spotify.com/embed/track/5jsw9uXEGuKyJzs0boZ1bT"
},

 {
title:"Take Me To Church",
artist:"Hozier",
embed:"https://open.spotify.com/embed/track/3dYD57lRAUcMHufyqn9GcI"
},

{
title:"Riptide",
artist:"Vance Joy",
embed:"https://open.spotify.com/embed/track/3J9LjYIuVq2M8o7rVd6c5U"
},

{
title:"Stressed Out",
artist:"Twenty One Pilots",
embed:"https://open.spotify.com/embed/track/3CRDbSIZ4r5MsZ0YwxuEkn"
},

{
title:"Ride",
artist:"Twenty One Pilots",
embed:"https://open.spotify.com/embed/track/2Z8WuEywRWYTKe1NybPQEW"
},

{
title:"Heathens",
artist:"Twenty One Pilots",
embed:"https://open.spotify.com/embed/track/6i0V12jOa3mr6uu4WYhUBr"
},

{
title:"Counting Stars",
artist:"OneRepublic",
embed:"https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1"
},

{
title:"Apologize",
artist:"OneRepublic",
embed:"https://open.spotify.com/embed/track/2NBQmPrOEEjA8VbeWOQGxO"
},

{
title:"Photograph",
artist:"Ed Sheeran",
embed:"https://open.spotify.com/embed/track/1HNkqx9Ahdgi1Ixy2xkKkL"
},

{
title:"Thinking Out Loud",
artist:"Ed Sheeran",
embed:"https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f"
},

{
title:"Love Yourself",
artist:"Justin Bieber",
embed:"https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0"
},

{
title:"Sorry",
artist:"Justin Bieber",
embed:"https://open.spotify.com/embed/track/09CtPGIpYB4BrO8qb1RGsF"
},

{
title:"Stay",
artist:"Justin Bieber",
embed:"https://open.spotify.com/embed/track/5HCyWlXZPP0y6Gqq8TgA20"
},

{
title:"Peaches",
artist:"Justin Bieber",
embed:"https://open.spotify.com/embed/track/4iJyoBOLtHqaGxP12qzhQI"
},

{
title:"God's Plan",
artist:"Drake",
embed:"https://open.spotify.com/embed/track/6DCZcSspjsKoFjzjrWoCdn"
},

{
title:"Hotline Bling",
artist:"Drake",
embed:"https://open.spotify.com/embed/track/0wwPcA6wtMf6HUMpIRdeP7"
},

{
title:"One Dance",
artist:"Drake",
embed:"https://open.spotify.com/embed/track/1zi7xx7UVEFkmKfv06H8x0"
},

{
title:"Sicko Mode",
artist:"Travis Scott",
embed:"https://open.spotify.com/embed/track/2xLMifQCjDGFmkHkpNLD9h"
},

{
title:"Goosebumps",
artist:"Travis Scott",
embed:"https://open.spotify.com/embed/track/6gBFPUFcJLzWGx4lenP6h2"
},

{
title:"HUMBLE",
artist:"Kendrick Lamar",
embed:"https://open.spotify.com/embed/track/7KXjTSCq5nL1LoYtL7XAwS"
},

{
title:"DNA",
artist:"Kendrick Lamar",
embed:"https://open.spotify.com/embed/track/6HZILIRieu8S0iqY8kIKhj"
},

{
title:"Lucid Dreams",
artist:"Juice WRLD",
embed:"https://open.spotify.com/embed/track/285pBltuF7vW8TeWk8hdRR"
},

{
title:"All Girls Are The Same",
artist:"Juice WRLD",
embed:"https://open.spotify.com/embed/track/0t3ZvGKlmYmVsDzBJAXK8C"
},

{
title:"XO TOUR Llif3",
artist:"Lil Uzi Vert",
embed:"https://open.spotify.com/embed/track/7GX5flRQZVHRAGd6B4TmDO"
},

{
title:"Mask Off",
artist:"Future",
embed:"https://open.spotify.com/embed/track/0VgkVdmE4gld66l8iyGjgx"
},

{
title:"HUMBLE",
artist:"Kendrick Lamar",
embed:"https://open.spotify.com/embed/track/7KXjTSCq5nL1LoYtL7XAwS"
},

{
title:"Praise The Lord",
artist:"A$AP Rocky",
embed:"https://open.spotify.com/embed/track/7ycWLEP1GsNjVvcjawXz3z"
},

{
title:"Sunflower",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P"
},

{
title:"Better Now",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/7dt6x5M1jzdTEt8oCbisTK"
},

{
title:"Congratulations",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/3a1lNhkSLSkpJE4MSHpDu9"
},

{
title:"Rockstar",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/7wGoVu4Dady5GV0Sv4UIsx"
},

{
title:"Circles",
artist:"Post Malone",
embed:"https://open.spotify.com/embed/track/21jGcNKet2qwijlDFuPiPb"
},

{
title:"I Wanna Be Yours",
artist:"Arctic Monkeys",
embed:"https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n"
},

{
  {
title:"Africa",
artist:"Toto",
embed:"https://open.spotify.com/embed/track/2374M0fQpWi3dLnB54qaLX"
},

{
title:"Eye Of The Tiger",
artist:"Survivor",
embed:"https://open.spotify.com/embed/track/2KH16WveTQWT6KOG9Rg6e2"
},

{
title:"Take Me Home Country Roads",
artist:"John Denver",
embed:"https://open.spotify.com/embed/track/1YYhDizHx7PnDhAhko6cDS"
},

{
title:"Dancing Queen",
artist:"ABBA",
embed:"https://open.spotify.com/embed/track/0GjEhVFGZW8afUYGChu3Rr"
},

{
title:"Mamma Mia",
artist:"ABBA",
embed:"https://open.spotify.com/embed/track/2TxCwUlqaOH3TIyJqGgR91"
},

{
title:"Gimme Gimme Gimme",
artist:"ABBA",
embed:"https://open.spotify.com/embed/track/3vkQ5DAB1qQMYO4Mr9zJN6"
},

{
title:"Don't Stop Believin",
artist:"Journey",
embed:"https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue"
},

{
title:"Livin On A Prayer",
artist:"Bon Jovi",
embed:"https://open.spotify.com/embed/track/37ZJ0p5Jm13JPevGcx4SkF"
},

{
title:"It's My Life",
artist:"Bon Jovi",
embed:"https://open.spotify.com/embed/track/0v1XpBHnsbkCn7iJ9Ucr1l"
},

{
title:"Thunderstruck",
artist:"AC/DC",
embed:"https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj"
},

{
title:"Back In Black",
artist:"AC/DC",
embed:"https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj"
},

{
title:"Highway To Hell",
artist:"AC/DC",
embed:"https://open.spotify.com/embed/track/2zYzyRzz6pRmhPzyfMEC8s"
},

{
title:"Seven Nation Army",
artist:"The White Stripes",
embed:"https://open.spotify.com/embed/track/3dPQuX8Gs42Y7b454ybpMR"
},

{
title:"Mr Brightside",
artist:"The Killers",
embed:"https://open.spotify.com/embed/track/7oK9VyNzrYvRFo7nQEYkWN"
},

{
title:"Somebody Told Me",
artist:"The Killers",
embed:"https://open.spotify.com/embed/track/4FgdJ4vJrYzF6kV6PpVZBq"
},

{
title:"Boulevard Of Broken Dreams",
artist:"Green Day",
embed:"https://open.spotify.com/embed/track/5GorCbAP4aL0EJ16frG2hd"
},

{
title:"American Idiot",
artist:"Green Day",
embed:"https://open.spotify.com/embed/track/6nTiIhLmQ3FWhvrGafw2zj"
},

{
title:"Basket Case",
artist:"Green Day",
embed:"https://open.spotify.com/embed/track/6L89mwZXSOwYl76YXfX13s"
},

{
title:"Californication",
artist:"Red Hot Chili Peppers",
embed:"https://open.spotify.com/embed/track/48UPSzbZjgc449aqz8bxox"
},

{
title:"Can't Stop",
artist:"Red Hot Chili Peppers",
embed:"https://open.spotify.com/embed/track/3ZOEytgrvLwQaqXreDs2Jx"
},

{
title:"Otherside",
artist:"Red Hot Chili Peppers",
embed:"https://open.spotify.com/embed/track/2i5K0EdMY5hG7L6vFQXG5E"
},

{
title:"Zombie",
artist:"The Cranberries",
embed:"https://open.spotify.com/embed/track/7EZC6E7UjZe63f1jRmkWxt"
},

{
title:"Take Me Out",
artist:"Franz Ferdinand",
embed:"https://open.spotify.com/embed/track/6ooluO7DiEhI1zmK94nRCM"
},

{
title:"Feel Good Inc",
artist:"Gorillaz",
embed:"https://open.spotify.com/embed/track/0d28khcov6AiegSCpG5TuT"
},

{
title:"Clint Eastwood",
artist:"Gorillaz",
embed:"https://open.spotify.com/embed/track/7yMiX7n9SBvadzox8T5jzT"
},

{
title:"Pompeii",
artist:"Bastille",
embed:"https://open.spotify.com/embed/track/3gbBpTdY8lnQwqxNCcf795"
},

{
title:"Radioactive",
artist:"Imagine Dragons",
embed:"https://open.spotify.com/embed/track/62yJjFtgkhUrXktIoSjgP2"
},

{
title:"Demons",
artist:"Imagine Dragons",
embed:"https://open.spotify.com/embed/track/3LlAyCYU26dvFZBDUIMb7a"
},

{
title:"Thunder",
artist:"Imagine Dragons",
embed:"https://open.spotify.com/embed/track/1zB4vmk8tFRmM9UULNzbLB"
},

{
title:"Counting Stars",
artist:"OneRepublic",
embed:"https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1"
},

{
title:"Apologize",
artist:"OneRepublic",
embed:"https://open.spotify.com/embed/track/2NBQmPrOEEjA8VbeWOQGxO"
},

{
title:"Love Yourself",
artist:"Justin Bieber",
embed:"https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0"
}
];

const roundNames = {
  8: "Quartas de final",
  4: "Semifinal",
  2: "Final",
  1: "Campeã"
};

let started = false;
let currentRound = [];
let nextRound = [];
let currentIndex = 0;
let champion = null;

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function startGame() {
  started = true;
  champion = null;
  nextRound = [];
  currentIndex = 0;
  currentRound = shuffle(tracks);
  render();
}

function restartGame() {
  startGame();
}

function chooseTrack(track) {
  nextRound.push(track);
  currentIndex += 2;

  if (currentIndex < currentRound.length) {
    render();
    return;
  }

  if (nextRound.length === 1) {
    champion = nextRound[0];
    render();
    return;
  }

  currentRound = nextRound;
  nextRound = [];
  currentIndex = 0;
  render();
}

function renderStartScreen() {
  return `
    <div class="start-screen">
      <h1 class="site-title">SoundClash</h1>
      <button class="main-btn" onclick="startGame()">COMEÇAR</button>
    </div>
  `;
}

function renderWinnerScreen() {
  return `
    <div class="winner-screen">
      <p class="winner-title">CAMPEÃ DA SUA COPA</p>
      <h2 class="winner-song">${champion.title}</h2>
      <p class="winner-artist">${champion.artist}</p>

      <div class="card" style="max-width:700px; width:100%;">
        <div class="player">
          <iframe
            src="${champion.embed}"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
      </div>

      <button class="main-btn" onclick="restartGame()">JOGAR DE NOVO</button>
    </div>
  `;
}

function renderBattleScreen() {
  const left = currentRound[currentIndex];
  const right = currentRound[currentIndex + 1];
  const duel = Math.floor(currentIndex / 2) + 1;
  const totalDuels = currentRound.length / 2;
  const phase = roundNames[currentRound.length] || `${currentRound.length / 2} confrontos`;

  return `
    <div class="topbar">
      <div class="badge">Fase: <strong>${phase}</strong></div>
      <div class="badge">Duelo: <strong>${duel}</strong> de <strong>${totalDuels}</strong></div>
      <button class="main-btn" onclick="restartGame()">REINICIAR</button>
    </div>

    <div class="battle-grid">
      <div class="card">
        <h2>${left.title}</h2>
        <p>${left.artist}</p>
        <div class="player">
          <iframe
            src="${left.embed}"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
        <button class="choice-btn" onclick="chooseTrackByIndex(${currentIndex})">ESCOLHER</button>
      </div>

      <div class="vs">ISSO OU AQUILO</div>

      <div class="card">
        <h2>${right.title}</h2>
        <p>${right.artist}</p>
        <div class="player">
          <iframe
            src="${right.embed}"
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy">
          </iframe>
        </div>
        <button class="choice-btn" onclick="chooseTrackByIndex(${currentIndex + 1})">ESCOLHER</button>
      </div>
    </div>
  `;
}

function chooseTrackByIndex(index) {
  chooseTrack(currentRound[index]);
}

function render() {
  const game = document.getElementById("game");

  if (!started) {
    game.innerHTML = renderStartScreen();
    return;
  }

  if (champion) {
    game.innerHTML = renderWinnerScreen();
    return;
  }

  game.innerHTML = renderBattleScreen();
}

render();



