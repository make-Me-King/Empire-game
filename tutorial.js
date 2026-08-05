// Empire - tutorial.js

// Version 0.3

// First 10 x 10 tutorial map

const tutorialMap = {

    name: "First Island",

    rows: 10,

    columns: 10,

    tiles: [

        { row: 1, column: 1, terrain: "Sea" },

        { row: 1, column: 2, terrain: "Sea" },

        { row: 1, column: 3, terrain: "Sea" },

        { row: 1, column: 4, terrain: "Sea" },

        { row: 1, column: 5, terrain: "Sea" },

        { row: 1, column: 6, terrain: "Sea" },

        { row: 1, column: 7, terrain: "Sea" },

        { row: 1, column: 8, terrain: "Sea" },

        { row: 1, column: 9, terrain: "Sea" },

        { row: 1, column: 10, terrain: "Sea" },

        { row: 2, column: 1, terrain: "Sea" },

        { row: 2, column: 2, terrain: "Plains" },

        { row: 2, column: 3, terrain: "Plains" },

        { row: 2, column: 4, terrain: "Forest" },

        { row: 2, column: 5, terrain: "Plains" },

        { row: 2, column: 6, terrain: "Plains" },

        { row: 2, column: 7, terrain: "Forest" },

        { row: 2, column: 8, terrain: "Plains" },

        { row: 2, column: 9, terrain: "Plains" },

        { row: 2, column: 10, terrain: "Sea" },

        { row: 3, column: 1, terrain: "Sea" },

        { row: 3, column: 2, terrain: "Plains" },

        { row: 3, column: 3, terrain: "Mountain" },

        { row: 3, column: 4, terrain: "Forest" },

        { row: 3, column: 5, terrain: "Plains" },

        { row: 3, column: 6, terrain: "Mountain" },

        { row: 3, column: 7, terrain: "Forest" },

        { row: 3, column: 8, terrain: "Plains" },

        { row: 3, column: 9, terrain: "Plains" },

        { row: 3, column: 10, terrain: "Sea" },

        { row: 4, column: 1, terrain: "Sea" },

        { row: 4, column: 2, terrain: "Plains" },

        { row: 4, column: 3, terrain: "Plains" },

        { row: 4, column: 4, terrain: "Plains" },

        { row: 4, column: 5, terrain: "Plains" },

        { row: 4, column: 6, terrain: "Plains" },

        { row: 4, column: 7, terrain: "Plains" },

        { row: 4, column: 8, terrain: "Forest" },

        { row: 4, column: 9, terrain: "Plains" },

        { row: 4, column: 10, terrain: "Sea" },

        { row: 5, column: 1, terrain: "Sea" },

        { row: 5, column: 2, terrain: "Forest" },

        { row: 5, column: 3, terrain: "Plains" },

        { row: 5, column: 4, terrain: "Plains" },

        { row: 5, column: 5, terrain: "Mountain" },

        { row: 5, column: 6, terrain: "Plains" },

        { row: 5, column: 7, terrain: "Plains" },

        { row: 5, column: 8, terrain: "Plains" },

        { row: 5, column: 9, terrain: "Forest" },

        { row: 5, column: 10, terrain: "Sea" },

        { row: 6, column: 1, terrain: "Sea" },

        { row: 6, column: 2, terrain: "Plains" },

        { row: 6, column: 3, terrain: "Plains" },

        { row: 6, column: 4, terrain: "Forest" },

        { row: 6, column: 5, terrain: "Plains" },

        { row: 6, column: 6, terrain: "Plains" },

        { row: 6, column: 7, terrain: "Forest" },

        { row: 6, column: 8, terrain: "Plains" },

        { row: 6, column: 9, terrain: "Plains" },

        { row: 6, column: 10, terrain: "Sea" },

        { row: 7, column: 1, terrain: "Sea" },

        { row: 7, column: 2, terrain: "Plains" },

        { row: 7, column: 3, terrain: "Mountain" },

        { row: 7, column: 4, terrain: "Plains" },

        { row: 7, column: 5, terrain: "Plains" },

        { row: 7, column: 6, terrain: "Forest" },

        { row: 7, column: 7, terrain: "Plains" },

        { row: 7, column: 8, terrain: "Mountain" },

        { row: 7, column: 9, terrain: "Plains" },

        { row: 7, column: 10, terrain: "Sea" },

        { row: 8, column: 1, terrain: "Sea" },

        { row: 8, column: 2, terrain: "Plains" },

        { row: 8, column: 3, terrain: "Plains" },

        { row: 8, column: 4, terrain: "Plains" },

        { row: 8, column: 5, terrain: "Forest" },

        { row: 8, column: 6, terrain: "Plains" },

        { row: 8, column: 7, terrain: "Plains" },

        { row: 8, column: 8, terrain: "Plains" },

        { row: 8, column: 9, terrain: "Plains" },

        { row: 8, column: 10, terrain: "Sea" },

        { row: 9, column: 1, terrain: "Sea" },

        { row: 9, column: 2, terrain: "Plains" },

        { row: 9, column: 3, terrain: "Forest" },

        { row: 9, column: 4, terrain: "Plains" },

        { row: 9, column: 5, terrain: "Plains" },

        { row: 9, column: 6, terrain: "Plains" },

        { row: 9, column: 7, terrain: "Forest" },

        { row: 9, column: 8, terrain: "Plains" },

        { row: 9, column: 9, terrain: "Plains" },

        { row: 9, column: 10, terrain: "Sea" },

        { row: 10, column: 1, terrain: "Sea" },

        { row: 10, column: 2, terrain: "Sea" },

        { row: 10, column: 3, terrain: "Sea" },

        { row: 10, column: 4, terrain:
