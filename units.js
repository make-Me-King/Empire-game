// Empire - units.js

// Version 0.4

// Unit types and active units

const unitTypes = {

    Settler: {

        name: "Settler",

        maxHealth: 100,

        movementPoints: 2,

        attack: 0,

        defense: 1,

        actions: [

            "move",

            "foundCity",

            "sleep",

            "disband"

        ]

    }

};

const activeUnits = [

    {

        id: "player-settler-1",

        type: "Settler",

        owner: "Player",

        row: 5,

        column: 6,

        health: 100,

        remainingMovement: 2,

        experience: 0,

        hasMoved: false

    }

];

function getUnitsAtTile(row, column) {

    return activeUnits.filter(unit => {

        return unit.row === row &&

               unit.column === column;

    });

}

function getUnitType(unit) {

    return unitTypes[unit.type] || null;

}

function getUnitDescription(unit) {

    const type = getUnitType(unit);

    if (!type) {

        return "Unknown unit.";

    } 
    return (

        type.name +

        ". Owner: " +

        unit.owner +

        ". Health: " +

        unit.health +

        " of " +

        type.maxHealth +

        ". Movement: " +

        unit.remainingMovement +

        " of " +

        type.movementPoints +

        "."

    );

}
