const tracks = [
  
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
    title: "Viva La Vida",
    artist: "Coldplay",
    embed: "https://open.spotify.com/embed/track/1mea3bSkSGXuIRvnydlB5b"
  },
  {
    title: "The Scientist",
    artist: "Coldplay",
    embed: "https://open.spotify.com/embed/track/75JFxkI2RXiU7L9VXzMkle"
  },
  {
    title: "Yellow",
    artist: "Coldplay",
    embed: "https://open.spotify.com/embed/track/3AJwUDP919kvQ9QcozQPxg"
  },
  {
    title: "Numb",
    artist: "Linkin Park",
    embed: "https://open.spotify.com/embed/track/2nLtzopw4rPReszdYBJU6h"
  },
  {
    title: "In The End",
    artist: "Linkin Park",
    embed: "https://open.spotify.com/embed/track/60a0Rd6pjrkxjPbaKzXjfq"
  },
  {
    title: "Wake Me Up",
    artist: "Avicii",
    embed: "https://open.spotify.com/embed/track/0nrRP2bk19rLc0orkWPQk2"
  },
  {
    title: "Closer",
    artist: "The Chainsmokers",
    embed: "https://open.spotify.com/embed/track/7BKLCZ1jbUBVqRi2FVlTVw"
  },
  {
    title: "Happier",
    artist: "Marshmello",
    embed: "https://open.spotify.com/embed/track/7BqBn9nzAq8spo5e7cZ0dJ"
  },
  {
    title: "Sunflower",
    artist: "Post Malone",
    embed: "https://open.spotify.com/embed/track/3KkXRkHbMCARz0aVfEt68P"
  },
  {
    title: "Rockstar",
    artist: "Post Malone",
    embed: "https://open.spotify.com/embed/track/7wGoVu4Dady5GV0Sv4UIsx"
  },
  {
    title: "Circles",
    artist: "Post Malone",
    embed: "https://open.spotify.com/embed/track/21jGcNKet2qwijlDFuPiPb"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    embed: "https://open.spotify.com/embed/track/2Fxmhks0bxGSBdJ92vM42m"
  },
  {
    title: "Lovely",
    artist: "Billie Eilish",
    embed: "https://open.spotify.com/embed/track/0u2P5u6lvoDfwTYjAADbn4"
  },
  {
    title: "Hello",
    artist: "Adele",
    embed: "https://open.spotify.com/embed/track/4kflIGfjdZJW4ot2ioixTB"
  },
  {
    title: "Rolling In The Deep",
    artist: "Adele",
    embed: "https://open.spotify.com/embed/track/1c8gk2PeTE04A1pIDH9YMk"
  },
  {
    title: "Poker Face",
    artist: "Lady Gaga",
    embed: "https://open.spotify.com/embed/track/6wVWJl64yoTzU27EI8ep20"
  },
  {
    title: "Bad Romance",
    artist: "Lady Gaga",
    embed: "https://open.spotify.com/embed/track/0SiywuOBRcynK0uKGWdCnn"
  },
  {
    title: "Shallow",
    artist: "Lady Gaga",
    embed: "https://open.spotify.com/embed/track/2VxeLyX666F8uXCJ0dZF8B"
  },
  {
    title: "Firework",
    artist: "Katy Perry",
    embed: "https://open.spotify.com/embed/track/4lCv7b86sLynZbXhfScfm2"
  },
  {
    title: "Roar",
    artist: "Katy Perry",
    embed: "https://open.spotify.com/embed/track/27tNWlhdAryQY04Gb2ZhUI"
  },
  {
    title: "Dark Horse",
    artist: "Katy Perry",
    embed: "https://open.spotify.com/embed/track/5jrdCoLpJSvHHorevXBATy"
  },
  {
    title: "Havana",
    artist: "Camila Cabello",
    embed: "https://open.spotify.com/embed/track/1rfofaqEpACxVEHIZBJe6W"
  },
  {
    title: "Señorita",
    artist: "Shawn Mendes",
    embed: "https://open.spotify.com/embed/track/0TK2YIli7K1leLovkQiNik"
  },
  {
    title: "Stitches",
    artist: "Shawn Mendes",
    embed: "https://open.spotify.com/embed/track/5jsw9uXEGuKyJzs0boZ1bT"
  },
  {
    title: "Take Me To Church",
    artist: "Hozier",
    embed: "https://open.spotify.com/embed/track/3dYD57lRAUcMHufyqn9GcI"
  },
  {
    title: "Stressed Out",
    artist: "Twenty One Pilots",
    embed: "https://open.spotify.com/embed/track/3CRDbSIZ4r5MsZ0YwxuEkn"
  },
  {
    title: "Ride",
    artist: "Twenty One Pilots",
    embed: "https://open.spotify.com/embed/track/2Z8WuEywRWYTKe1NybPQEW"
  },
  {
    title: "Heathens",
    artist: "Twenty One Pilots",
    embed: "https://open.spotify.com/embed/track/6i0V12jOa3mr6uu4WYhUBr"
  },
  {
    title: "Thinking Out Loud",
    artist: "Ed Sheeran",
    embed: "https://open.spotify.com/embed/track/34gCuhDGsG4bRPIf9bb02f"
  },
  {
    title: "Love Yourself",
    artist: "Justin Bieber",
    embed: "https://open.spotify.com/embed/track/50kpGaPAhYJ3sGmk6vplg0"
  },

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
title:"Don't Stop Believin'",
artist:"Journey",
embed:"https://open.spotify.com/embed/track/4bHsxqR3GMrXTxEPLuK5ue"
},

{
title:"Livin On A Prayer",
artist:"Bon Jovi",
embed:"https://open.spotify.com/embed/track/37ZJ0p5Jm13JPevGcx4SkF"
},

{
title:"Thunderstruck",
artist:"ACDC",
embed:"https://open.spotify.com/embed/track/57bgtoPSgt236HzfBOd8kj"
},

{
title:"Back In Black",
artist:"ACDC",
embed:"https://open.spotify.com/embed/track/08mG3Y1vljYA6bvDt4Wqkj"
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
title:"Do I Wanna Know?",
artist:"Arctic Monkeys",
embed:"https://open.spotify.com/embed/track/5FVd6KXrgO9B3JPmC8OPst"
},

{
title:"I Wanna Be Yours",
artist:"Arctic Monkeys",
embed:"https://open.spotify.com/embed/track/5XeFesFbtLpXzIVDNQP22n"
},

{
title:"The Less I Know The Better",
artist:"Tame Impala",
embed:"https://open.spotify.com/embed/track/6K4t31amVTZDgR3sKmwUJJ"
},

{
title:"Feels Like We Only Go Backwards",
artist:"Tame Impala",
embed:"https://open.spotify.com/embed/track/0LtOwyZoSNZKJWHqjzADpW"
},

{
title:"Borderline",
artist:"Tame Impala",
embed:"https://open.spotify.com/embed/track/5hM5arv9KDbCHS0k9uqwjr"
},

{
title:"Let It Be",
artist:"The Beatles",
embed:"https://open.spotify.com/embed/track/7iN1s7xHE4ifF5povM6A48"
},

{
title:"Hey Jude",
artist:"The Beatles",
embed:"https://open.spotify.com/embed/track/7pKfPomDEeI4TPT6EOYjn9"
},

{
title:"Come Together",
artist:"The Beatles",
embed:"https://open.spotify.com/embed/track/2EqlS6tkEnglzr7tkKAAYD"
},

{
title:"Beat It",
artist:"Michael Jackson",
embed:"https://open.spotify.com/embed/track/3BovdzfaX4jb5KFQwoPfAw"
},

{
title:"Smooth Criminal",
artist:"Michael Jackson",
embed:"https://open.spotify.com/embed/track/2bCQHF9gdG5BNDVuEIEnNk"
},

{
title:"Bad",
artist:"Michael Jackson",
embed:"https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7"
},

{
title:"Stayin Alive",
artist:"Bee Gees",
embed:"https://open.spotify.com/embed/track/5ubvP9oKmxLUVq506fgLhk"
},

{
title:"September",
artist:"Earth Wind & Fire",
embed:"https://open.spotify.com/embed/track/3cHyrEgdyYRjgJKSOiOtcS"
},

{
title:"Never Gonna Give You Up",
artist:"Rick Astley",
embed:"https://open.spotify.com/embed/track/4uLU6hMCjMI75M1A2tKUQC"
},

{
title:"All Star",
artist:"Smash Mouth",
embed:"https://open.spotify.com/embed/track/3cfOd4CMv2snFaKAnMdnvK"
},

{
title:"Another Brick In The Wall",
artist:"Pink Floyd",
embed:"https://open.spotify.com/embed/track/0vFOzaXqZHahrZp6enQwQb"
},

{
title:"Comfortably Numb",
artist:"Pink Floyd",
embed:"https://open.spotify.com/embed/track/6ZFbXIJkuI1dVNWvzJzown"
},

{
title:"Wish You Were Here",
artist:"Pink Floyd",
embed:"https://open.spotify.com/embed/track/6mFkJmJqdDVQ1REhVfGgd1"
},

{
title:"Come As You Are",
artist:"Nirvana",
embed:"https://open.spotify.com/embed/track/2RsAajgo0g7bMCHxwH3Sk0"
},

{
title:"Lithium",
artist:"Nirvana",
embed:"https://open.spotify.com/embed/track/5O0hQ0nJ7gV9uF3s3sWzPW"
},

{
title:"Riptide",
artist:"Vance Joy",
embed:"https://open.spotify.com/embed/track/3J9LjYIuVq2M8o7rVd6c5U"
},

{
title:"Pompeii",
artist:"Bastille",
embed:"https://open.spotify.com/embed/track/3gbBpTdY8lnQwqxNCcf795"
},

{
title:"Take On Me",
artist:"a-ha",
embed:"https://open.spotify.com/embed/track/2WfaOiMkCvy7F5fcp2zZ8L"
},

{
title:"Seven Nation Army",
artist:"The White Stripes",
embed:"https://open.spotify.com/embed/track/3dPQuX8Gs42Y7b454ybpMR"
},

{
title:"Under Pressure",
artist:"Queen & David Bowie",
embed:"https://open.spotify.com/embed/track/11IzgLRXV7Cgek3tEgGgjw"
},

{
title:"We Will Rock You",
artist:"Queen",
embed:"https://open.spotify.com/embed/track/4pbJqGIASGPr0ZpGpnWkDn"
},

{
title:"We Are The Champions",
artist:"Queen",
embed:"https://open.spotify.com/embed/track/1lCRw5FEZ1gPDNPzy1K4zW"
},

{
title:"Don't Stop Me Now",
artist:"Queen",
embed:"https://open.spotify.com/embed/track/5T8EDUDqKcs6OSOwEsfqG7"
},

{
title:"Take Me To Church",
artist:"Hozier",
embed:"https://open.spotify.com/embed/track/3dYD57lRAUcMHufyqn9GcI"
},

{
title:"Counting Stars",
artist:"OneRepublic",
embed:"https://open.spotify.com/embed/track/2tpWsVSb9UEmDRxAl1zhX1"
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
embed:"https://open.spotify.com/embed/track/0tKcYR2II1VCQWT79i5NrW"
},

{
title:"Can't Feel My Face",
artist:"The Weeknd",
embed:"https://open.spotify.com/embed/track/22VdIZQfgXJea34mQxlt81"
},

{
title:"Save Your Tears",
artist:"The Weeknd",
embed:"https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"
},

{
title:"Blinding Lights",
artist:"The Weeknd",
embed:"https://open.spotify.com/embed/track/0VjIjW4GlUZAMYd2vXMi3b"
},

{
title:"Uptown Funk",
artist:"Mark Ronson ft. Bruno Mars",
embed:"https://open.spotify.com/embed/track/32OlwWuMpZ6b0aN2RZOeMS"
},

{
title:"Just The Way You Are",
artist:"Bruno Mars",
embed:"https://open.spotify.com/embed/track/7BqHUALzNBTanL6OvsqmC1"
},

{
title:"Locked Out Of Heaven",
artist:"Bruno Mars",
embed:"https://open.spotify.com/embed/track/3z8h0TU7ReDPLIbEnYhWZb"
},

{
title:"Grenade",
artist:"Bruno Mars",
embed:"https://open.spotify.com/embed/track/2NVt7fxr5GsqTkGwYXcNTE"
},

{
title:"Treasure",
artist:"Bruno Mars",
embed:"https://open.spotify.com/embed/track/5JBGhnJhsb3lzfVnVqY2Vj"
},

{
title:"Shape Of My Heart",
artist:"Sting",
embed:"https://open.spotify.com/embed/track/6Y1D7rA4hRZ9h4dK8nR9ZT"
},

{
title:"Every Breath You Take",
artist:"The Police",
embed:"https://open.spotify.com/embed/track/1JSTJqkT5qHq8MDJnJbRE1"
},

{
title:"Message In A Bottle",
artist:"The Police",
embed:"https://open.spotify.com/embed/track/1oYYd2gnWZYrt89EBXdFiO"
},
 {
title:"Evidências",
artist:"Chitãozinho & Xororó",
embed:"https://open.spotify.com/embed/track/3n3Ppam7vgaVa1iaRUc9Lp"
},

{
title:"Ai Se Eu Te Pego",
artist:"Michel Teló",
embed:"https://open.spotify.com/embed/track/3U4isOIWM3VvDubwSI3y7a"
},

{
title:"Anna Julia",
artist:"Los Hermanos",
embed:"https://open.spotify.com/embed/track/5E2v8zJ6v0pRkzV9n1tFoE"
},

{
title:"Tempo Perdido",
artist:"Legião Urbana",
embed:"https://open.spotify.com/embed/track/2V4bv1fNWfTcyRJKmej6Sj"
},

{
title:"Pais e Filhos",
artist:"Legião Urbana",
embed:"https://open.spotify.com/embed/track/5K7AMlpc4796JRWXb26nCV"
},

{
title:"Garota de Ipanema",
artist:"Tom Jobim",
embed:"https://open.spotify.com/embed/track/5KkXLu9F1FqVYkFjY0R3jH"
},

{
title:"Mas Que Nada",
artist:"Jorge Ben Jor",
embed:"https://open.spotify.com/embed/track/3dYD57lRAUcMHufyqn9GcI"
},

{
title:"Descobridor dos Sete Mares",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/0ylxF8dRkX6YdJXK2d0F8b"
},

{
title:"Me Adora",
artist:"Pitty",
embed:"https://open.spotify.com/embed/track/6UeSakyzhiEt4NB3UAd6NQ"
},

{
title:"O Segundo Sol",
artist:"Cássia Eller",
embed:"https://open.spotify.com/embed/track/0l5s7pC2J3u7P7o0LZz9gE"
},

{
title:"Garota de Ipanema",
artist:"Tom Jobim",
embed:"https://open.spotify.com/embed/track/3YRCqOhFifThpSRFJ1VWFM"
},

{
title:"Mas Que Nada",
artist:"Jorge Ben Jor",
embed:"https://open.spotify.com/embed/track/6M4bq0yE6W8Jk6aJjR0p9Y"
},

{
title:"País Tropical",
artist:"Jorge Ben Jor",
embed:"https://open.spotify.com/embed/track/2n1sK5p1oX2q3C8V3f6L0X"
},

{
title:"Descobridor dos Sete Mares",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/4M9U0s9UQpC9U9U9L6F1o6"
},

{
title:"Gostava Tanto de Você",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/1wqz8Y8T8nP2E7vZ1T9M2O"
},

{
title:"Sossego",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/3S2Qv2pC4V3F4s8nV5X9g0"
},

{
title:"Fácil",
artist:"Jota Quest",
embed:"https://open.spotify.com/embed/track/4QhJYyZ7x8kQ6Y8L2X5T3F"
},

{
title:"Dias Melhores",
artist:"Jota Quest",
embed:"https://open.spotify.com/embed/track/6X7ZC0nX5E1p3Q6d8Y2U5A"
},

{
title:"Na Sua Estante",
artist:"Pitty",
embed:"https://open.spotify.com/embed/track/4gMgiXfqyzZLMhsksGmbQV"
},

{
title:"Me Adora",
artist:"Pitty",
embed:"https://open.spotify.com/embed/track/1s8tP3sC5J4rR1s6X7K9cY"
},

{
title:"Admirável Chip Novo",
artist:"Pitty",
embed:"https://open.spotify.com/embed/track/5kG8d8H4r2K0s4Q1Y9d5H0"
},

{
title:"Anna Júlia",
artist:"Los Hermanos",
embed:"https://open.spotify.com/embed/track/3Vh0fZC0X8O2R1qNbfOjWJ"
},

{
title:"O Segundo Sol",
artist:"Cássia Eller",
embed:"https://open.spotify.com/embed/track/3E8xYyZ7k9P1s4V2N6X0Y5"
},

{
title:"Exagerado",
artist:"Cazuza",
embed:"https://open.spotify.com/embed/track/6Vh3Fh7o7nJp7n0l6dN0QF"
},

{
title:"O Tempo Não Para",
artist:"Cazuza",
embed:"https://open.spotify.com/embed/track/4K3M7QSkGZ0nYfX8qVd6iK"
},

{
title:"Pro Dia Nascer Feliz",
artist:"Barão Vermelho",
embed:"https://open.spotify.com/embed/track/2h0h6GQeGvV0bH1Zp9J1yO"
},

{
title:"Bete Balanço",
artist:"Barão Vermelho",
embed:"https://open.spotify.com/embed/track/2g3F9pS5pVqX7k3a1f8R3y"
},

{
title:"Lanterna dos Afogados",
artist:"Os Paralamas do Sucesso",
embed:"https://open.spotify.com/embed/track/6zq6V5cVZ7ZzKzbwQ0Vyk8"
},

{
title:"Meu Erro",
artist:"Os Paralamas do Sucesso",
embed:"https://open.spotify.com/embed/track/1dYpZz1X2kz0Yk8C4k0hU5"
},

{
title:"Aonde Quer Que Eu Vá",
artist:"Os Paralamas do Sucesso",
embed:"https://open.spotify.com/embed/track/2r0xWqKqC7j9v8K5F4y4c5"
},

{
title:"Metamorfose Ambulante",
artist:"Raul Seixas",
embed:"https://open.spotify.com/embed/track/4FQ9kG4V7M9v8k7q1g5S4g"
},

{
title:"Maluco Beleza",
artist:"Raul Seixas",
embed:"https://open.spotify.com/embed/track/6q0G9n7X8mP9k4q1v7k8s0"
},

{
title:"Tente Outra Vez",
artist:"Raul Seixas",
embed:"https://open.spotify.com/embed/track/3jH7X8K9V0q7g5P4n8f6s2"
},

{
title:"Velha Infância",
artist:"Tribalistas",
embed:"https://open.spotify.com/embed/track/4Yk6F7s3k5p2x8Q9v1z0F7"
},

{
title:"Já Sei Namorar",
artist:"Tribalistas",
embed:"https://open.spotify.com/embed/track/5s7K8P3v9n1Z0q4Yk6F2x8"
},

{
title:"O Sol",
artist:"Vitor Kley",
embed:"https://open.spotify.com/embed/track/6s4K7q8V2p1Z0F3x9Yk5n6"
},

{
title:"Trem Bala",
artist:"Ana Vilela",
embed:"https://open.spotify.com/embed/track/7K5s4F9v0Z2x6Yk1n8P3q4"
},

{
title:"Pra Você Guardei o Amor",
artist:"Nando Reis",
embed:"https://open.spotify.com/embed/track/2k5F7P9s4v8Z1x6Y0n3Q4K"
},

{
title:"Relicário",
artist:"Nando Reis",
embed:"https://open.spotify.com/embed/track/1F9k5Z0v4P7x6s3Q2Y8n4K"
},

{
title:"Mulher de Fases",
artist:"Raimundos",
embed:"https://open.spotify.com/embed/track/4G9n0v8K2P1x5Y6Z7F3q4S"
},

{
title:"A Mais Pedida",
artist:"Raimundos",
embed:"https://open.spotify.com/embed/track/7P5F3x0K2Z4v6n9Y1Q8s4R"
},

{
title:"Pelados em Santos",
artist:"Mamonas Assassinas",
embed:"https://open.spotify.com/embed/track/4qC3Q2y6Z9F5s8K7v1P0n2"
},

{
title:"Vira-Vira",
artist:"Mamonas Assassinas",
embed:"https://open.spotify.com/embed/track/5K7s2v9F4Z3n1P8Y0Q6x4R"
},

{
title:"Descobridor dos Sete Mares",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/4M7K8v2P0Z3x6F9n1Q5s4R"
},

{
title:"Gostava Tanto de Você",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/3Z5v9K1P8F4s2x7n6Q0Y4R"
},

{
title:"Sossego",
artist:"Tim Maia",
embed:"https://open.spotify.com/embed/track/5P7s9K3v1Z2x8F4n6Q0Y4R"
},

{
title:"Fácil",
artist:"Jota Quest",
embed:"https://open.spotify.com/embed/track/4P7K9v1Z2x5F8n3Q6Y0s4R"
},

{
title:"Dias Melhores",
artist:"Jota Quest",
embed:"https://open.spotify.com/embed/track/3Z5v8K1P7F4s2x9n6Q0Y4R"
},

{
title:"Amor I Love You",
artist:"Marisa Monte",
embed:"https://open.spotify.com/embed/track/7P5K3v9Z2x1F8n4Q6Y0s4R"
},

{
title:"Ainda Bem",
artist:"Marisa Monte",
embed:"https://open.spotify.com/embed/track/5Z7v3K1P9F4s2x8n6Q0Y4R"
},

{
title:"Do Seu Lado",
artist:"Jota Quest",
embed:"https://open.spotify.com/embed/track/4P7K9v1Z2x5F8n3Q6Y0s4R"
},

{
title:"Lugar ao Sol",
artist:"Charlie Brown Jr.",
embed:"https://open.spotify.com/embed/track/5P7K3v9Z2x1F8n4Q6Y0s4R"
},

{
title:"Só os Loucos Sabem",
artist:"Charlie Brown Jr.",
embed:"https://open.spotify.com/embed/track/6P9K3v1Z2x5F8n4Q7Y0s4R"
}
];

const roundNames = {
  64: "32avos de final",
  32: "16avos de final",
  16: "Oitavas de final",
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

const STORAGE_KEY = "soundclash_stats_v1";

function shuffle(array) {
  const cloned = [...array];
  for (let i = cloned.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}

function getTrackKey(track) {
  return `${track.title}__${track.artist}`;
}

function loadStats() {
  const raw = localStorage.getItem(STORAGE_KEY);

  if (!raw) {
    return {
      totalVotes: 0,
      wins: {}
    };
  }

  try {
    const parsed = JSON.parse(raw);
    return {
      totalVotes: parsed.totalVotes || 0,
      wins: parsed.wins || {}
    };
  } catch {
    return {
      totalVotes: 0,
      wins: {}
    };
  }
}

function saveStats(stats) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(stats));
}

function recordWin(track) {
  const stats = loadStats();
  const key = getTrackKey(track);

  stats.totalVotes += 1;
  stats.wins[key] = (stats.wins[key] || 0) + 1;

  saveStats(stats);
}

function getRanking(limit = 5) {
  const stats = loadStats();

  const ranking = Object.entries(stats.wins)
    .map(([key, wins]) => {
      const [title, artist] = key.split("__");
      return { title, artist, wins };
    })
    .sort((a, b) => b.wins - a.wins)
    .slice(0, limit);

  return {
    totalVotes: stats.totalVotes,
    ranking
  };
  function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
}

function startGame() {
  started = true;
  champion = null;
  nextRound = [];
  currentIndex = 0;
 currentRound = shuffle([...tracks]).slice(0, 128);
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
  saveChampion(champion);
  render();
  return;
  }

  currentRound = nextRound;
  nextRound = [];
  currentIndex = 0;
  render();
}

function chooseTrackByIndex(index) {
  chooseTrack(currentRound[index]);
}

function shareChampion() {
  if (!champion) return;

  const text = `🎵 Minha campeã no SoundClash foi: ${champion.title} — ${champion.artist}`;

  if (navigator.share) {
    navigator.share({
      title: "SoundClash",
      text
    }).catch(() => {});
    return;
  }

  navigator.clipboard.writeText(text)
    .then(() => alert("Resultado copiado para a área de transferência!"))
    .catch(() => alert(text));
}

function renderRankingBlock() {
  const { totalVotes, ranking } = getRanking();

  const items = ranking.length
    ? ranking.map((item, index) => `
        <li class="ranking-item">
          <span class="ranking-pos">#${index + 1}</span>
          <div class="ranking-info">
            <strong>${item.title}</strong>
            <span>${item.artist}</span>
          </div>
          <span class="ranking-wins">${item.wins} vitórias</span>
        </li>
      `).join("")
    : `<li class="ranking-empty">Ainda não há vitórias registradas.</li>`;

  return `
    <div class="ranking-box">
      <div class="ranking-header">
        <h3>Ranking Global</h3>
        <div class="votes-badge">Votos globais: <strong>${totalVotes}</strong></div>
      </div>
      <ul class="ranking-list">
        ${items}
      </ul>
    </div>
  `;
}

function renderStartScreen() {
  return `
    <div class="start-screen">
      <h1 class="site-title">SoundClash</h1>
      <button class="main-btn" onclick="startGame()">COMEÇAR</button>
      ${renderRankingBlock()}
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
      <button class="main-btn" onclick="startGame()">NOVA COPA</button>

      <div class="winner-actions">
        <button class="main-btn" onclick="shareChampion()">COMPARTILHAR MINHA CAMPEÃ</button>
        <button class="main-btn secondary-btn" onclick="restartGame()">JOGAR DE NOVO</button>
      </div>

      ${renderRankingBlock()}
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
    ${renderRankingBlock()}
  `;
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










