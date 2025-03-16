class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    create() {
        this.playKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)

        this.add.text(width / 2, height / 4, "Pugu vs Lance").setOrigin(0.5)
        this.add.text(width / 2, height / 2, "Press ENTER to play").setOrigin(0.5)
        this.add.text(width / 2, height * 3 / 4, "P1 uses WASD, P2 uses arrows").setOrigin(0.5)

    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.playKey)) {
            this.scene.start('playScene')
        }
    }
}