// Pugu VS Lance: Playtest Build
// Name: Leo Assimes
// Date: 3/3/2025

// 5 components:
// - physics systems
// - animation manager
// - text objects
// - timers
// - particle effects (didn't get time)

// ughhhh i didn't get to finish. i'm sorry that this game isn't fully playable.
// i knew exactly what i wanted to do but finals week has been extremely chaotic and taxing, and
// so many things are just completely missing. if anything though, i'm proud of what i managed to get working.

"use strict"

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 320,
    render: {
        pixelArt: true
    },
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
        },
    },
    scene: [ Load, Title, Menu, Play ]
}

let game = new Phaser.Game(config)

let keyup = []
let keyleft = []
let keydown = []
let keyright = []

let stageFloor = 230

let { width, height } = game.config

let normalTextConfig = {
    fontFamily: 'Oswald',
    fontSize: '28px',
    color: '#000000',
    align: 'right',
}
