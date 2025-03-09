class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    create() {
        this.playKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.playKey)) {
            this.scene.start('playScene')
        }
    }
}