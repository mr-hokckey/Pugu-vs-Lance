class Pugu extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, playerNo) {
        super(scene, x, y, texture, frame)
        this.playerNo = playerNo

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setOffset(this.width / 4, this.height / 2)
        this.body.setCollideWorldBounds(true)

        this.speed = 3
        this.isAttacking = false
    }

    jab() {
        this.isAttacking = true
        this.play('pugu-jab')
        this.setX(this.x + 48)
        this.body.setOffset(this.width / 8, this.height / 2)
        this.scene.time.delayedCall(250, () => {
            this.setX(this.x - 48)
            this.body.setOffset(this.width / 4, this.height / 2)
        }, null, this.scene)
        this.once('animationcomplete', () => {
            this.isAttacking = false
        })
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keydown[this.playerNo]) && this.isAttacking == false) {
            this.jab()
        }

        if (keyleft[this.playerNo].isDown && this.isAttacking == false) {
            this.x -= this.speed
        }
        if (keyright[this.playerNo].isDown && this.isAttacking == false) {
            this.x += this.speed
        }
    }
}