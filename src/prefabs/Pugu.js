class Pugu extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, playerNo) {
        super(scene, x, y, texture, frame)
        this.playerNo = playerNo

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width / 2, this.height / 2)
        this.body.setOffset(this.width / 4, this.height / 2)
        this.body.setCollideWorldBounds(true)

        this.walkSpeed = 150
        this.isAttacking = false

        this.hitbox = scene.add.image(0, height) // creates a completely transparent, 32x32 
        scene.physics.world.enable(this.hitbox)
    }


    jab() {
        this.isAttacking = true
        this.play('pugu-jab')
        this.setX(this.x + 48)
        this.body.setOffset(this.width / 8, this.height / 2)

        this.hitbox.setPosition(this.x + this.width / 3, this.y - this.height / 4)

        this.scene.time.delayedCall(250, () => {
            this.setX(this.x - 48)
            this.body.setOffset(this.width / 4, this.height / 2)
            this.hitbox.setPosition(0, height)
        }, null, this.scene)
        this.once('animationcomplete', () => {
            this.play('pugu-idle')
            this.isAttacking = false
        })

        this.scene.sound.play('sfx-pugu-jab')
    }

    update() {
        this.setVelocityX(0)

        if (Phaser.Input.Keyboard.JustDown(keydown[this.playerNo]) && this.isAttacking == false) {
            this.jab()
        }

        if (keyleft[this.playerNo].isDown && this.isAttacking == false) {
            this.setVelocityX(-this.walkSpeed)
        }
        if (keyright[this.playerNo].isDown && this.isAttacking == false) {
            this.setVelocityX(this.walkSpeed)
        }
    }
}