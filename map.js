// Empire - map.js

// Version 0.3

// Map Engine

function loadTutorialMap() {

    if (typeof tutorialMap === "undefined") {

        console.error("Tutorial map data was not found.");

        return;

    }

    drawMap(tutorialMap);

}

function drawMap(mapData) {

    const mapContainer = document.getElementById("gameMap");

    if (!mapContainer) {

        console.error("The gameMap element was not found.");

        return;

    }

    mapContainer.innerHTML = "";

    mapContainer.style.gridTemplateColumns =

        `repeat(${mapData.columns}, 1fr)`;

    mapData.tiles.forEach(tile => {

        const tileButton = document.createElement("button");

        tileButton.classList.add("map-tile");

        tileButton.classList.add(

            `terrain-${tile.terrain.toLowerCase()}`

        );

        tileButton.textContent = `${tile.row},${tile.column}`;

        tileButton.setAttribute(

            "aria-label",

            `Tile ${tile.row},${tile.column}. ${tile.terrain}.`

        );

        tileButton.dataset.row = tile.row;

        tileButton.dataset.column = tile.column;

        tileButton.dataset.terrain = tile.terrain;

        tileButton.addEventListener("focus", () => {

            announceTile(

                tile.row,

                tile.column,

                tile.terrain

            );

        });

        tileButton.addEventListener("click", () => {

            openTileDetails(tile);

        });

        mapContainer.appendChild(tileButton);

    });

    const firstTile = mapContainer.querySelector(".map-tile");

    if (firstTile) {

        firstTile.focus();

    }

}

function openTileDetails(tile) {

    const details = document.getElementById("tileDetails");

    if (!details) {

        return;

    }

    details.textContent =

        `Tile ${tile.row},${tile.column}. ` +

        `Terrain: ${tile.terrain}. ` +

        `No additional information is available yet.`;

}
