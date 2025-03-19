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
        this.gravity = 1500
        this.isAttacking = false
        this.isHurt = false

        this.hitbox = scene.add.image(width * this.playerNo, height) // creates a transparent, 32x32 image. perfect for a hitbox :)
        scene.physics.world.enable(this.hitbox)

        this.direction = this.playerNo == 0? 1 : -1
        if (this.direction == -1) {
            this.setFlipX(true)
        }

        this.body.setGravityY(this.gravity)
    }

    jab() {
        this.isAttacking = true
        this.play('pugu-jab')
        this.setX(this.x + (48 * this.direction))
        this.body.setOffset(this.width * (1/4 - this.direction/8), this.height / 2)

        this.hitbox.setPosition(this.x + this.direction * this.width / 3, this.y)

        this.scene.time.delayedCall(250, () => {
            this.setX(this.x - (48 * this.direction))
            this.body.setOffset(this.width / 4, this.height / 2)
            this.hitbox.setPosition(width * this.playerNo, height)
        }, null, this.scene)
        this.once('animationcomplete', () => {
            this.play('pugu-idle')
            this.isAttacking = false
        })

        this.scene.sound.play('sfx-pugu-jab')
    }

    takeDamage() {
        this.play('pugu-idle')
        this.hitbox.setPosition(width * this.playerNo, height)
        this.isAttacking = false

        this.setVelocity(-this.direction * 2 * this.walkSpeed, -this.walkSpeed * 2)
        this.setDragX(this.walkSpeed * 2)

        this.isHurt = true
        this.scene.time.delayedCall(1000, () => {
            this.isHurt = false
        }, null, this.scene)

        // placeholder
        // this.setX(this.x - 200 * this.direction)
        console.log("ow")
    }

    update() {
        if (!this.isHurt) {
            this.setVelocityX(0)
        }

        if (Phaser.Input.Keyboard.JustDown(keydown[this.playerNo]) && !this.isAttacking && !this.isHurt) {
            this.jab()
        }

        if (keyleft[this.playerNo].isDown && !this.isAttacking && !this.isHurt) {
            this.setVelocityX(-this.walkSpeed)
        }
        if (keyright[this.playerNo].isDown && !this.isAttacking && !this.isHurt) {
            this.setVelocityX(this.walkSpeed)
        }
    }
}