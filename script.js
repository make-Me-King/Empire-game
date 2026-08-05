// Empire - script.js

// Version 0.3

let currentScreen = "mainMenu";

function showScreen(id) {

    document.querySelectorAll(".screen").forEach(screen => {

        screen.classList.remove("active");

    });

    document.getElementById(id).classList.add("active");

    currentScreen = id;

}

function showSetup() {

    showScreen("gameSetup");

}

function showMainMenu() {

    showScreen("mainMenu");

}

function showLoading() {

    showScreen("loadingScreen");

    const steps = [

        "Initializing World...",

        "Creating Continents...",

        "Growing Forests...",

        "Raising Mountains...",

        "Filling Seas...",

        "Preparing World..."

    ];

    const text = document.getElementById("loadingText");

    const bar = document.getElementById("loadingBar");

    let index = 0;

    bar.value = 0;

    const timer = setInterval(() => {

        if (index < steps.length) {

            text.textContent = steps[index];

            bar.value = ((index + 1) / steps.length) * 100;

            index++;

        } else {

            clearInterval(timer);

            showGame();

        }

    }, 600);

}

function showGame() {

    showScreen("gameScreen");

    if (typeof loadTutorialMap === "function") {

        loadTutorialMap();

    }

}

function openPicker(id) {

    document.getElementById(id).classList.add("open");

}

function closePicker(id) {

    document.getElementById(id).classList.remove("open");

}

function setValue(buttonId, value, popupId) {

    document.getElementById(buttonId).textContent = value;

    closePicker(popupId);

}

function startGame() {

    showLoading();

}

function announceTile(row, column, terrain) {

    const info = document.getElementById("tileInfo");

    if (info) {

        info.textContent = `Tile ${row},${column}. ${terrain}.`;

    }

}

document.addEventListener("keydown", event => {

    if (event.key === "Escape" && currentScreen === "gameSetup") {

        showMainMenu();

    }

});
