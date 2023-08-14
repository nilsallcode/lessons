const audioElement = document.querySelector("audio");

const playButton = document.querySelector(".player-play-btn");
const playIcon = document.querySelector(".player-icon-play");
const pauseIcon = document.querySelector(".player-icon-pause");
const progress = document.querySelector(".player-progress");
const progressFilled = document.querySelector(".player-progress-filled");
const playerCurrentTime = document.querySelector(".player-time-current");
const playerDuration = document.querySelector(".player-time-duration");
const playlist = document.querySelector(".playlist");
const songOne = document.querySelector(".song-1");
const songTwo = document.querySelector(".song-2");
const songThree = document.querySelector(".song-3");
const songFour = document.querySelector(".song-4");
const songFive = document.querySelector(".song-5");

const songs = [
    "songs/style-taylor-swift.mp3",
    "songs/counting-stars-onerepublic.mp3",
    "songs/sorry-justin-bieber.mp3",
    "songs/see-you-again-wiz-khalifa.mp3",
    "songs/sugar-maroon-5.mp3",
]

audioElement.src = songs[0];

window.addEventListener("load", () => {

    // Player controls

    setTimes();

    audioElement.addEventListener("timeupdate", () => {
        setTimes();
        progressUpdate();
    });

    audioElement.addEventListener("ended", () => {
        playButton.dataset.playing = "false";
        pauseIcon.classList.add("hidden");
        playIcon.classList.remove("hidden");
        progressFilled.style.flexBasis = "0%";
        audioElement.currentTime = 0;
        audioElement.duration = audioElement.duration;

        for (const song of songs) {
            if (audioElement.getAttribute("src") === song) {
                const currentSong = songs.indexOf(song);
                audioElement.src = songs[currentSong + 1];
                playSong(audioElement);
                break;
            }
        }

    });

    playButton.addEventListener("click", () => {

        if (playButton.dataset.playing === "false") {
            
            playSong(audioElement);

        } else if (playButton.dataset.playing === "true") {
            
            pauseSong(audioElement);

        }

    });

    function playSong(audio) {
        audio.play();

        playButton.dataset.playing = "true";
        playIcon.classList.add("hidden");
        pauseIcon.classList.remove("hidden");
    }

    function pauseSong(audio) {
        audio.pause();

        playButton.dataset.playing = "false";
        playIcon.classList.remove("hidden");
        pauseIcon.classList.add("hidden");
    }

    function setTimes() {
        const newCurrentTime = new Date(audioElement.currentTime * 1000);
        const newDuration = new Date(audioElement.duration * 1000);

        playerCurrentTime.textContent = newCurrentTime.getMinutes() + ':' + newCurrentTime.getSeconds();
        playerDuration.textContent = newDuration.getMinutes() + ':' + newDuration.getSeconds();
    }

    function progressUpdate() {
        const percent = (audioElement.currentTime / audioElement.duration) * 100;
        progressFilled.style.flexBasis = `${percent}%`;
    }

    function scrub (event) {
        const scrubTime = (event.offsetX / progress.offsetWidth) * audioElement.duration;
        audioElement.currentTime = scrubTime;
    }

    progress.addEventListener("click", scrub);
    progress.addEventListener("mousemove", (e) => mousedown && scrub(e));
    progress.addEventListener("mousedown", () => (mousedown = true));
    progress.addEventListener("mouseup", () => (mousedown = false));


    // Playlist

    songOne.addEventListener("dblclick", () => {
        audioElement.src = songs[0];
        playSong(audioElement);
    });

    songTwo.addEventListener("dblclick", () => {
        audioElement.src = songs[1];
        playSong(audioElement);
    });

    songThree.addEventListener("dblclick", () => {
        audioElement.src = songs[2];
        playSong(audioElement);
    });

    songFour.addEventListener("dblclick", () => {
        audioElement.src = songs[3];
        playSong(audioElement);
    });

    songFive.addEventListener("dblclick", () => {
        audioElement.src = songs[4];
        playSong(audioElement);
    });

});