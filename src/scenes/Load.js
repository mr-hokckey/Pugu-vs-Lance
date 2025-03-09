class Load extends Phaser.Scene {
    constructor() {
        super('loadScene')
    }

    preload() {
        this.load.image('stage', './assets/stage.png')

        this.load.spritesheet('pugu', './assets/pugu-sheet.png', {
            frameWidth: 128,
            frameHeight: 128
        })
        this.load.spritesheet('lance', './assets/lance-sheet.png', {
            frameWidth: 128,
            frameHeight: 128
        })
    }

    create() {
        this.scene.start('menuScene')

        this.anims.create({
            key: 'pugu-jab',
            frameRate: 4,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('pugu', {
                frames: [1, 0, 0, 0]
            })
        })
    }
}