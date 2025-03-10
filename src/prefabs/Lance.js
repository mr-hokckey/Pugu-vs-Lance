class Lance extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, playerNo) {
        super(scene, x, y, texture, frame)
        this.playerNo = playerNo

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width / 2, this.height)
        this.body.setOffset(this.width / 3, 0)
        this.body.setCollideWorldBounds(true)

        this.walkSpeed = 120
        this.rollSpeed = 240
        this.rollAccel = 600
        this.rollGravity = 1500
        this.isRolling = false
    }

    roll() {
        this.isRolling = true
        this.play('lance-roll')

        this.y -= this.height / 2
        this.body.setGravityY(this.rollGravity)

        this.body.setCircle(this.width / 4, this.width / 4, this.height / 2)
        this.body.setMaxVelocityX(this.rollSpeed)
        this.body.setDragX(this.rollAccel)
    }

    unroll() {
        this.isRolling = false
        this.play('lance-idle')

        this.body.setSize(this.width / 2, this.height)
        this.body.setOffset(this.width / 3, 0)
    }

    update() {
        this.setAccelerationX(0)
        if (this.isRolling == false) {
            this.setVelocityX(0)
        }

        if (Phaser.Input.Keyboard.JustDown(keydown[this.playerNo])) {
            if (this.isRolling == false) {
                this.roll()
            } else {
                this.unroll()
            }
        }

        if (keyleft[this.playerNo].isDown) {
            if (this.isRolling == true) {
                this.setAccelerationX(-this.rollAccel)
            } else {
                this.setVelocityX(-this.walkSpeed)
            }
        }
        if (keyright[this.playerNo].isDown) {
            if (this.isRolling == true) {
                this.setAccelerationX(this.rollAccel)
            } else {
                this.setVelocityX(this.walkSpeed)
            }
        }
    }
}