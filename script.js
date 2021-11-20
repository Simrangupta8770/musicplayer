const music = document.querySelector("audio");
const img = document.querySelector("img");
const title = document.getElementById("title");
const artist = document.getElementById("artist");

const prev = document.getElementById("prev");
const next = document.getElementById("next");

// play
const play = document.getElementById("play");
let isPlaying = false;
const playMusic = () => {
    music.play();
    isPlaying = true;

    play.classList.replace('fa-play', 'fa-pause');
    img.classList.add("anime");
};

// pause
const pauseMusic = () => {
    music.pause();
    isPlaying = false;

    play.classList.replace('fa-pause', 'fa-play');
    img.classList.remove("anime");
};
play.addEventListener("click", () => {
    if (isPlaying) {
        pauseMusic();
    } else {
        playMusic();
    }
});


// prev next
const songs = [
    {
        name:"song-1",
        title:"LOTUS LANE",
        artist:"The Loyalist",
    },
    {
        name:"song-2",
        title:"SAPPHEIROS",
        artist:"Aurora",
    }, {
        name:"song-3",
        title:"WALKING FIRIRI",
        artist:"Gorkhali Takma",
    }
];
songIndex=0;
const nextSong =() =>{
    songIndex=(songIndex + 1) % songs.length;
loadSong(songs[songIndex]);
playMusic();
};
const prevSong =() =>{
    songIndex=((songIndex - 1) + songs.length)% songs.length;
loadSong(songs[songIndex]);
playMusic();

};
const loadSong = (songs) => {
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = "music/" + songs.name + ".mp3";
    img.src = "music/" + songs.name + ".jfif";
};
next.addEventListener('click',nextSong);
prev.addEventListener('click',prevSong);
