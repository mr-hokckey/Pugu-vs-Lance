class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }

    init() {

    }
    
    create() {
        this.stage = this.add.image(0, 0, 'stage').setOrigin(0);

        this.pugu = new Pugu(this, 160, stageFloor, 'pugu', 0, 1).setOrigin(0.5, 1)

        // this.lance = this.add.sprite(300, stageFloor, 'lance', 0).setOrigin(0, 1)



        this.menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        p1_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        p1_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        p1_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        p1_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        p2_up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        p2_left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        p2_down = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        p2_right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)
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
        
        if (Phaser.Input.Keyboard.JustDown(this.menuKey)) {
            this.scene.start('menuScene')
        }
    }
}