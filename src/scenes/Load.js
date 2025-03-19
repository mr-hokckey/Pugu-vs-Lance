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

        this.load.audio('sfx-pugu-jab', './assets/pugu-jab.wav')
    }

    create() {
        this.anims.create({
            key: 'pugu-idle',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('pugu', {
                frames: [0]
            })
        })

        this.anims.create({
            key: 'pugu-jab',
            frameRate: 4,
            repeat: 0,
            frames: this.anims.generateFrameNumbers('pugu', {
                frames: [1, 0, 0, 0]
            })
        })

        this.anims.create({
            key: 'lance-idle',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('lance', {
                frames: [0]
            })
        })

        this.anims.create({
            key: 'lance-roll',
            frameRate: 0,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('lance', {
                frames: [1]
            })
        })

        this.scene.start('titleScene')
    }
}