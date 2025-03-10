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

        if (playerNo == 1) {
            this.down = p1_down
            this.left = p1_left
            this.up = p1_up
            this.right = p1_right
        } else if (playerNo == 2) {
            this.down = p2_down
            this.left = p2_left
            this.up = p2_up
            this.right = p2_right
        }
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
        if (Phaser.Input.Keyboard.JustDown(p1_down) && this.isAttacking == false) {
            this.jab()
        }

        if (p1_left.isDown && this.isAttacking == false) {
            this.x -= this.speed
        }
        if (p1_right.isDown && this.isAttacking == false) {
            this.x += this.speed
        }
    }
}