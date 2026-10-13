
const toggleButton = document.getElementById("toggleLyrics");
const lyrics = document.getElementById("lyrics");

toggleButton.addEventListener("click", function () {

    if (lyrics.style.display === "none") {
        lyrics.style.display = "block";
        toggleButton.textContent = "Hide Lyrics";
    } else {
        lyrics.style.display = "none";
        toggleButton.textContent = "Show Lyrics";
    }

});