const tracks = [

{
title:"Blinding Lights",
artist:"The Weeknd",
embed:"https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"
},

{
title:"As It Was",
artist:"Harry Styles",
embed:"https://open.spotify.com/embed/track/4LRPiXqCikLlN15c3yImP7"
},

{
title:"Another Love",
artist:"Tom Odell",
embed:"https://open.spotify.com/embed/track/3JvKfv6T31zO0ini8iNItO"
},

{
title:"Sweater Weather",
artist:"The Neighbourhood",
embed:"https://open.spotify.com/embed/track/2QjOHCTQ1Jl3zawyYOpxh6"
},

{
title:"505",
artist:"Arctic Monkeys",
embed:"https://open.spotify.com/embed/track/58ge6dfP91o9oXMzq3XkIS"
},

{
title:"Heat Waves",
artist:"Glass Animals",
embed:"https://open.spotify.com/embed/track/02MWAaffLxlfxAUY7c5dvx"
},

{
title:"Night Changes",
artist:"One Direction",
embed:"https://open.spotify.com/embed/track/5O2P9iiztwhomNh8xkR9lJ"
},

{
title:"Midnight City",
artist:"M83",
embed:"https://open.spotify.com/embed/track/3AhXZa8sUQht0UEdBJgpGc"
},

{
title:"Shape of You",
artist:"Ed Sheeran",
embed:"https://open.spotify.com/embed/track/7qiZfU4dY1lWllzX7mPBI3"
},

{
title:"Perfect",
artist:"Ed Sheeran",
embed:"https://open.spotify.com/embed/track/0tgVpDi06FyKpA1z0VMD4v"
},

{
title:"Believer",
artist:"Imagine Dragons",
embed:"https://open.spotify.com/embed/track/0pqnGHJpmpxLKifKRmU6WP"
},

{
title:"Radioactive",
artist:"Imagine Dragons",
embed:"https://open.spotify.com/embed/track/62yJjFtgkhUrXktIoSjgP2"
},

{
title:"Counting Stars",
artist:"OneRepublic",
embed:"https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1"
},

{
title:"Someone You Loved",
artist:"Lewis Capaldi",
embed:"https://open.spotify.com/embed/track/7qEHsqek33rTcFNT9PFqLf"
},

{
title:"Starboy",
artist:"The Weeknd",
embed:"https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB"
},

{
title:"Take On Me",
artist:"a-ha",
embed:"https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L"
},

{
title:"Bohemian Rhapsody",
artist:"Queen",
embed:"https://open.spotify.com/embed/track/7tFiyTwD0nx5a1eklYtX2J"
},

{
title:"Billie Jean",
artist:"Michael Jackson",
embed:"https://open.spotify.com/embed/track/5ChkMS8OtdzJeqyybCc9R5"
},

{
title:"Thriller",
artist:"Michael Jackson",
embed:"https://open.spotify.com/embed/track/2LlQb7Uoj1kKyGhlkBf9aC"
},

{
title:"Smells Like Teen Spirit",
artist:"Nirvana",
embed:"https://open.spotify.com/embed/track/5ghIJDpPoe3CfHMGu71E6T"
},

{
title:"Hotel California",
artist:"Eagles",
embed:"https://open.spotify.com/embed/track/40riOy7x9W7GXjyGp4pjAv"
},

{
title:"Sweet Child O Mine",
artist:"Guns N Roses",
embed:"https://open.spotify.com/embed/track/7o2CTH4ctstm8TNelqjb51"
},

{
title:"Wonderwall",
artist:"Oasis",
embed:"https://open.spotify.com/embed/track/7ygpwy2qP3NbrxVkHvUhXY"
},

{
title:"Lose Yourself",
artist:"Eminem",
embed:"https://open.spotify.com/embed/track/7MJQ9Nfxzh8LPZ9e9u68Fq"
},

{
title:"Envolver",
artist:"Anitta",
embed:"https://open.spotify.com/embed/track/2qxmye6gAegTMjLKEBoR3d"
},

{
title:"Vai Malandra",
artist:"Anitta",
embed:"https://open.spotify.com/embed/track/6t9F1z5xk2mO4RZ0sZx7MZ"
},

{
title:"Kenny G",
artist:"Matuê",
embed:"https://open.spotify.com/embed/track/4G8gkOterJn0Ywt6uhqbhp"
},

{
title:"Máquina do Tempo",
artist:"Matuê",
embed:"https://open.spotify.com/embed/track/6xX7nYxV1lXHrp236UMtO4"
},

{
title:"Tipo Gin",
artist:"Kevin O Chris",
embed:"https://open.spotify.com/embed/track/3Y1vV7Y2kZZgwyXR0YJIUK"
},

{
title:"Ela É do Tipo",
artist:"Kevin O Chris",
embed:"https://open.spotify.com/embed/track/6K8VQ84M3q2F7YQH7hV7wF"
},

{
title:"Dias de Luta Dias de Glória",
artist:"Charlie Brown Jr",
embed:"https://open.spotify.com/embed/track/0gplL1WMoJ6iYaPgMCL0gX"
},

{
title:"Céu Azul",
artist:"Charlie Brown Jr",
embed:"https://open.spotify.com/embed/track/6GmHnXy1p9N0UEhoJaMItZ"
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

