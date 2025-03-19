// Pugu VS Lance: Playtest Build
// Name: Leo Assimes
// Date: 3/3/2025

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
