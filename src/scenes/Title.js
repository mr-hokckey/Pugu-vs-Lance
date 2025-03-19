class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.playKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.add.text(width / 2, height / 4, "Pugu VS Lance").setOrigin(0.5)
        this.add.text(width / 2, height / 2, "Press SPACE to play").setOrigin(0.5)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.playKey)) {
            this.scene.start('menuScene')
        }
    }
}