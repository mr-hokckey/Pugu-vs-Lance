class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }
    
    create() {
        this.stage = this.add.image(0, 0, 'stage').setOrigin(0);

        this.physics.world.setBounds(0, 0, width, stageFloor)

        this.pugu = new Pugu(this, width / 4, stageFloor, 'pugu', 0, 0).setOrigin(0.5, 1)

        this.lance = new Lance(this, width * 3 / 4, stageFloor, 'lance', 0, 1).setOrigin(0.5, 1)

        keyup[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyleft[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keydown[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyright[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        keyup[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyleft[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keydown[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyright[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
    }

    update() {
        // if (Phaser.Input.Keyboard.JustDown(p1_down) && this.p1_isAttacking == false) {
        //     this.p1_isAttacking = true
        //     this.pugu.play('pugu-jab')
        //     this.pugu.setX(this.pugu.x + 48)
        //     this.pugu.body.setOffset(this.pugu.width / 8, this.pugu.height / 2)
        //     this.time.delayedCall(250, () => {
        //         this.pugu.setX(this.pugu.x - 48)
        //         this.pugu.body.setOffset(this.pugu.width / 4, this.pugu.height / 2)
        //     }, null, this)
        //     this.pugu.once('animationcomplete', () => {
        //         this.p1_isAttacking = false
        //     })
        // }

        // if (p1_left.isDown && this.p1_isAttacking == false) {
        //     this.pugu.x -= 3
        // }
        // if (p1_right.isDown && this.p1_isAttacking == false) {
        //     this.pugu.x += 3
        // }

        this.pugu.update()
        this.lance.update()
        
        if (Phaser.Input.Keyboard.JustDown(this.menuKey)) {
            this.scene.start('menuScene')
        }
    }
}