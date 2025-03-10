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
    scene: [ Load, Menu, Play ]
}

let game = new Phaser.Game(config)

let p1_up, p1_left, p1_down, p1_right
let p2_up, p2_left, p2_down, p2_right

let stageFloor = 230
