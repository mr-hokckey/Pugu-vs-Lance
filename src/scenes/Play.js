class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }
    
    create() {
        this.stage = this.add.image(0, 0, 'stage').setOrigin(0);

        this.physics.world.setBounds(0, 0, width, stageFloor)

        this.pugu = new Pugu(this, width / 4, stageFloor, 'pugu', 0, 0).setOrigin(0.5, 1)

        this.lance = new Lance(this, width * 3 / 4, stageFloor, 'lance', 0, 1).setOrigin(0.5, 0.8)

        keyup[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyleft[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keydown[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyright[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        keyup[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyleft[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keydown[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyright[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        this.debugKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.Y)
    }

    update() {
        this.pugu.update()
        this.lance.update()
        
        if (Phaser.Input.Keyboard.JustDown(this.menuKey)) {
            this.scene.start('menuScene')
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.debugKey)) {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }
    }
}