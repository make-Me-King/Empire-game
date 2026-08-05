// Empire - tutorial.js

// Version 0.3

// First 10 x 10 tutorial map

const terrainLayout = [

    ["Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea"],

    ["Sea", "Plains", "Plains", "Forest", "Plains", "Plains", "Forest", "Plains", "Plains", "Sea"],

    ["Sea", "Plains", "Mountain", "Forest", "Plains", "Mountain", "Forest", "Plains", "Plains", "Sea"],

    ["Sea", "Plains", "Plains", "Plains", "Plains", "Plains", "Plains", "Forest", "Plains", "Sea"],

    ["Sea", "Forest", "Plains", "Plains", "Mountain", "Plains", "Plains", "Plains", "Forest", "Sea"],

    ["Sea", "Plains", "Plains", "Forest", "Plains", "Plains", "Forest", "Plains", "Plains", "Sea"],

    ["Sea", "Plains", "Mountain", "Plains", "Plains", "Forest", "Plains", "Mountain", "Plains", "Sea"],

    ["Sea", "Plains", "Plains", "Plains", "Forest", "Plains", "Plains", "Plains", "Plains", "Sea"],

    ["Sea", "Plains", "Forest", "Plains", "Plains", "Plains", "Forest", "Plains", "Plains", "Sea"],

    ["Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea", "Sea"]

];

const tutorialMap = {

    name: "First Island",

    rows: 10,

    columns: 10,

    tiles: []

};

for (let row = 0; row < terrainLayout.length; row++) {

    for (let column = 0; column < terrainLayout[row].length; column++) {

        tutorialMap.tiles.push({

            row: row + 1,

            column: column + 1,

            terrain: terrainLayout[row][column]

        });

    }

}
