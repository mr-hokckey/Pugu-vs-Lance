class Menu extends Phaser.Scene {
    constructor() {
        super('menuScene')
    }

    create() {
        this.playKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        game.player = []
        game.player[0] = {
            health: 100,
            character: 0
        }
        game.player[1] = {
            health: 100,
            character: 0
        }

        this.p0character = ''
        this.p1character = ''

        this.selectScreen = this.add.text(width / 2, height / 4, `${this.p0character} vs ${this.p1character}`).setOrigin(0.5)
        this.add.text(width / 2, height / 2, "P1 uses WASD, P2 uses arrows").setOrigin(0.5)
        this.add.text(width / 2, height * 3 / 4, "Press DOWN to lock in your characters!").setOrigin(0.5)

        keyup[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyleft[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keydown[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyright[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        keyup[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyleft[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keydown[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyright[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.lockedIn = [false, false]
    }

    update() {
        
        // press left/right to scroll between characters
        if (Phaser.Input.Keyboard.JustDown(keyleft[0]) && this.lockedIn[0] == false) {
            game.player[0].character = (game.player[0].character - 1 + 3) % 3
        }
        if (Phaser.Input.Keyboard.JustDown(keyright[0]) && this.lockedIn[0] == false) {
            game.player[0].character = (game.player[0].character + 1) % 3
        }
        if (Phaser.Input.Keyboard.JustDown(keyleft[1]) && this.lockedIn[1] == false) {
            game.player[1].character = (game.player[1].character - 1 + 3) % 3
        }
        if (Phaser.Input.Keyboard.JustDown(keyright[1]) && this.lockedIn[1] == false) {
            game.player[1].character = (game.player[1].character + 1) % 3
        }

        // press down to lock in your character
        if (Phaser.Input.Keyboard.JustDown(keydown[0])) {
            this.lockedIn[0] = true
        }
        if (Phaser.Input.Keyboard.JustDown(keydown[1])) {
            this.lockedIn[1] = true
        }

        // press up to un-lock in
        if (Phaser.Input.Keyboard.JustDown(keyup[0])) {
            this.lockedIn[0] = false
        }
        if (Phaser.Input.Keyboard.JustDown(keyup[1])) {
            this.lockedIn[1] = false
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.playKey)) {
            this.scene.start('playScene')
        }

        if (this.lockedIn[0] == true && this.lockedIn[1] == true) {
            this.scene.start('playScene')
        }

        if (Phaser.Input.Keyboard.JustDown(this.menuKey)) {
            this.scene.start('titleScene')
        }

        if (game.player[0].character == 0) this.p0character = 'Pugu'
        if (game.player[0].character == 1) this.p0character = 'Lance'
        if (game.player[0].character == 2) this.p0character = 'Random'

        if (game.player[1].character == 0) this.p1character = 'Pugu'
        if (game.player[1].character == 1) this.p1character = 'Lance'
        if (game.player[1].character == 2) this.p1character = 'Random'

        this.selectScreen.text = `${this.p0character} vs ${this.p1character}`
    }
}