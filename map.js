// Empire - map.js

// Version 0.4

// Accessible Map and Tile Engine

function createTile(row, column, terrain) {

    return {

        row: row,

        column: column,

        terrain: terrain,

        owner: null,

        city: null,

        unit: null,

        road: false,

        river: false,

        fort: false,

        resource: null,

        improvement: null

    };

}

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

    for (let row = 1; row <= mapData.rows; row++) {

        const rowContainer = document.createElement("div");

        rowContainer.className = "map-row";

        rowContainer.dataset.row = row;

        const rowTiles = mapData.tiles

            .filter(tileData => tileData.row === row)

            .sort((firstTile, secondTile) => {

                return firstTile.column - secondTile.column;

            });

        rowTiles.forEach(tileData => {

            const tile = createTile(

                tileData.row,

                tileData.column,

                tileData.terrain

            );

            Object.assign(tile, tileData);

            addUnitsToTile(tile);

            const tileButton = createTileButton(tile);

            rowContainer.appendChild(tileButton);

        });

        mapContainer.appendChild(rowContainer);

    }

    const firstTile = mapContainer.querySelector(".map-tile");

    if (firstTile) {

        firstTile.focus();

    }

}

function addUnitsToTile(tile) {

    if (typeof getUnitsAtTile !== "function") {

        return;

    }

    const unitsOnTile = getUnitsAtTile(

        tile.row,

        tile.column

    );

    if (unitsOnTile.length === 0) {

        return;

    }

    tile.unit = unitsOnTile

        .map(unit => unit.type)

        .join(", ");

    const owners = [

        ...new Set(

            unitsOnTile.map(unit => unit.owner)

        )

    ];

    tile.owner = owners.join(", ");

}

function createTileButton(tile) {

    const tileButton = document.createElement("button");

    tileButton.type = "button";

    tileButton.className =

        "map-tile terrain-" +

        tile.terrain.toLowerCase();

    tileButton.textContent =

        tile.row + "," + tile.column;

    tileButton.dataset.row = tile.row;

    tileButton.dataset.column = tile.column;

    tileButton.dataset.terrain = tile.terrain;

    /*

     * The tile remains a normal button.

     * We deliberately do not change it to role="gridcell",

     * because VoiceOver handles native buttons more reliably.

     */

    tileButton.setAttribute(

        "aria-label",

        createTileDescription(tile)

    );

    tileButton.addEventListener("focus", function () {

        announceTileDescription(tile);

    });

    tileButton.addEventListener("click", function () {

        openTileDetails(tile);

    });

    return tileButton;

}

function createTileDescription(tile) {

    const information = [

        "Tile " + tile.row + "," + tile.column,

        tile.terrain

    ];

    if (tile.city) {

        information.push("City: " + tile.city);

    }

    if (tile.unit) {

        information.push("Unit: " + tile.unit);

    }

    if (tile.road) {

        information.push("Road");

    }

    if (tile.fort) {

        information.push("Fort");

    }

    if (tile.improvement) {

        information.push(

            "Improvement: " + tile.improvement

        );

    }

    if (tile.resource) {

        information.push(

            "Resource: " + tile.resource

        );

    }

    if (tile.river) {

        information.push("River");

    }

    if (tile.owner) {

        information.push("Owner: " + tile.owner);

    }

    return information.join(". ") + ".";

}

function announceTileDescription(tile) {

    const tileInfo = document.getElementById("tileInfo");

    if (!tileInfo) {

        return;

    }

    tileInfo.textContent =

        createTileDescription(tile);

}

function openTileDetails(tile) {

    const details = document.getElementById("tileDetails");

    if (!details) {

        return;

    }

    const detailedInformation = [

        "Tile: " + tile.row + "," + tile.column,

        "Terrain: " + tile.terrain,

        "Owner: " + (tile.owner || "None"),

        "City: " + (tile.city || "None"),

        "Unit: " + (tile.unit || "None"),

        "Road: " + (tile.road ? "Yes" : "No"),

        "River: " + (tile.river ? "Yes" : "No"),

        "Fort: " + (tile.fort ? "Yes" : "No"),

        "Resource: " + (tile.resource || "None"),

        "Improvement: " +

            (tile.improvement || "None")

    ];

    details.textContent =

        detailedInformation.join(". ") + ".";

}