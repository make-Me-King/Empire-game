// Empire - map.js

// Version 0.4

// Map and Tile Engine

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

        console.error("Tutorial map not found.");

        return;

    }

    drawMap(tutorialMap);

}

function drawMap(mapData) {

    const mapContainer = document.getElementById("gameMap");

    if (!mapContainer) {

        console.error("gameMap element not found.");

        return;

    }

    mapContainer.innerHTML = "";

    mapContainer.setAttribute("role", "grid");

    mapContainer.setAttribute("aria-rowcount", mapData.rows);

    mapContainer.setAttribute("aria-colcount", mapData.columns);

    for (let row = 1; row <= mapData.rows; row++) {

        const rowContainer = document.createElement("div");

        rowContainer.className = "map-row";

        rowContainer.setAttribute("role", "row");

        rowContainer.setAttribute(

            "aria-label",

            "Map row " + row

        );

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

            const unitsOnTile =

                typeof getUnitsAtTile === "function"

                    ? getUnitsAtTile(tile.row, tile.column)

                    : [];

            if (unitsOnTile.length > 0) {

                tile.unit = unitsOnTile

                    .map(unit => unit.type)

                    .join(", ");

            }

            const button = document.createElement("button");

            button.type = "button";

            button.className =

                "map-tile terrain-" +

                tile.terrain.toLowerCase();

            button.textContent =

                tile.row + "," + tile.column;

            button.dataset.row = tile.row;

            button.dataset.column = tile.column;

            button.dataset.terrain = tile.terrain;

            button.setAttribute("role", "gridcell");

            button.setAttribute(

                "aria-rowindex",

                tile.row

            );

            button.setAttribute(

                "aria-colindex",

                tile.column

            );

            button.setAttribute(

                "aria-label",

                createTileDescription(tile)

            );

            button.addEventListener("focus", function () {

                announceTileDescription(tile);

            });

            button.addEventListener("click", function () {

                openTileDetails(tile);

            });

            rowContainer.appendChild(button);

        });

        mapContainer.appendChild(rowContainer);

    }

    const firstTile =

        mapContainer.querySelector(".map-tile");

    if (firstTile) {

        firstTile.focus();

    }

}

function createTileDescription(tile) {

    let text =

        "Tile " +

        tile.row +

        "," +

        tile.column +

        ". " +

        tile.terrain;

    if (tile.city) {

        text += ". City: " + tile.city;

    }

    if (tile.unit) {

        text += ". Unit: " + tile.unit;

    }

    if (tile.road) {

        text += ". Road";

    }

    if (tile.fort) {

        text += ". Fort";

    }

    if (tile.improvement) {

        text +=

            ". Improvement: " +

            tile.improvement;

    }

    if (tile.resource) {

        text +=

            ". Resource: " +

            tile.resource;

    }

    if (tile.river) {

        text += ". River";

    }

    if (tile.owner) {

        text += ". Owner: " + tile.owner;

    }

    return text + ".";

}

function announceTileDescription(tile) {

    const tileInfo =

        document.getElementById("tileInfo");

    if (!tileInfo) {

        return;

    }

    tileInfo.textContent =

        createTileDescription(tile);

}

function openTileDetails(tile) {

    const details =

        document.getElementById("tileDetails");

    if (!details) {

        return;

    }

    details.innerHTML =

        "<strong>Tile:</strong> " +

        tile.row +

        "," +

        tile.column +

        "<br><strong>Terrain:</strong> " +

        tile.terrain +

        "<br><strong>Owner:</strong> " +

        (tile.owner || "None") +

        "<br><strong>City:</strong> " +

        (tile.city || "None") +

        "<br><strong>Unit:</strong> " +

        (tile.unit || "None") +

        "<br><strong>Road:</strong> " +

        (tile.road ? "Yes" : "No") +

        "<br><strong>River:</strong> " +

        (tile.river ? "Yes" : "No") +

        "<br><strong>Fort:</strong> " +

        (tile.fort ? "Yes" : "No") +

        "<br><strong>Resource:</strong> " +

        (tile.resource || "None") +

        "<br><strong>Improvement:</strong> " +

        (tile.improvement || "None");

}