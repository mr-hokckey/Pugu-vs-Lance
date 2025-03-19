class Lance extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, texture, frame, playerNo) {
        super(scene, x, y, texture, frame)
        this.playerNo = playerNo

        scene.add.existing(this)
        scene.physics.add.existing(this)

        this.body.setSize(this.width / 2, this.height)
        this.body.setOffset(this.width * (1/6 + this.playerNo * 1/6), 0)
        this.body.setCollideWorldBounds(true)

        this.walkSpeed = 120
        this.rollSpeed = 240
        this.rollAccel = 1000
        this.rollGravity = 1500
        this.isRolling = false
        this.isHurt = false

        // AP PHYSICS COMING IN CLUTCH FOR THIS!!!
        // omega = v / r = 240 / 24 = 10 radians = 573 degrees
        // i don't feel like writing out the rest of this but it's rotational kinematics and stuff :)
        this.rollSpeedA = 573
        this.rollAccelA = 2388

        this.hitbox = scene.add.image(width * this.playerNo, height) // creates a transparent, 32x32 image. perfect for a hitbox :)
        scene.physics.world.enable(this.hitbox)

        this.direction = this.playerNo == 0? -1 : 1
        if (this.direction == -1) {
            this.setFlipX(true)
        }
    }

    roll() {
        this.isRolling = true
        this.play('lance-roll')

        this.y -= this.height / 2
        this.body.setGravityY(this.rollGravity)

        this.body.setCircle(24, 64-24, 128-48)
        this.body.setMaxVelocityX(this.rollSpeed)
        this.body.maxAngular = this.rollSpeedA
        this.body.setAngularDrag(this.rollAccelA)
        this.body.setDragX(this.rollAccel)
    }

    unroll() {
        this.isRolling = false
        this.play('lance-idle')

        this.body.setSize(this.width / 2, this.height)
        this.body.setOffset(this.width * (1/6 + this.playerNo * 1/6), 0)
        this.setRotation(0)
        this.setAngularVelocity(0)
    }

    update() {
        this.setAccelerationX(0)
        this.setAngularAcceleration(0)
        if (this.isRolling == false) {
            this.setVelocityX(0)
            this.setAngularVelocity(0)
            this.setRotation(0)
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
                this.setAngularAcceleration(-this.rollAccelA)
            } else {
                this.setVelocityX(-this.walkSpeed)
            }
        }
        if (keyright[this.playerNo].isDown) {
            if (this.isRolling == true) {
                this.setAccelerationX(this.rollAccel)
                this.setAngularAcceleration(this.rollAccelA)
            } else {
                this.setVelocityX(this.walkSpeed)
            }
        }
    }
}