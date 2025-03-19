class Play extends Phaser.Scene {
    constructor() {
        super('playScene')
    }
    
    create() {
        this.stage = this.add.image(0, 0, 'stage').setOrigin(0);

        this.physics.world.setBounds(0, 0, width, stageFloor)

        this.fighter = []
        
        // Health bars and icons!
        this.icon = []
        // this.icon[0] = this.add.sprite(width/10, height/8, 'icons', 0).setOrigin(0.5)
        // this.icon[1] = this.add.sprite(width * 9/10, height/8, 'icons', 0).setOrigin(0.5)

        const createFighter = (playerNo) => {
            if (game.player[playerNo].character == 2) {
                game.player[playerNo].character = Phaser.Math.Between(0, 1);
            }
            if (game.player[playerNo].character == 0) {    
                this.fighter[playerNo] = new Pugu(this, width / 4 + (width * playerNo / 2), stageFloor, 'pugu', 0, playerNo).setOrigin(0.5, 0.8)
                this.icon[playerNo] = this.add.sprite(width * (1 + playerNo * 10)/12, height/8, 'icons', playerNo*2).setOrigin(0.5)
            } else if (game.player[playerNo].character == 1) {
                this.fighter[playerNo] = new Lance(this, width / 4 + (width * playerNo / 2), stageFloor, 'lance', 0, playerNo).setOrigin(0.5, 0.8)
                this.icon[playerNo] = this.add.sprite(width * (1 + playerNo * 10)/12, height/8, 'icons', playerNo*2 + 1).setOrigin(0.5)
            }
        }

        createFighter(0)
        createFighter(1)

        keyup[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W)
        keyleft[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A)
        keydown[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S)
        keyright[0] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D)

        keyup[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP)
        keyleft[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT)
        keydown[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.DOWN)
        keyright[1] = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT)

        this.menuKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)

        this.debugKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U)

        // "Collision" detection - detect when hitboxes overlap, so characters properly take damage.
        this.physics.add.overlap(this.fighter[0].hitbox, this.fighter[1], (h0, p1) => {
            p1.takeDamage()
            game.player[1].health -= Phaser.Math.Between(8, 12)
            h0.setPosition(0, height) // to make sure it only hits once
        })
        this.physics.add.overlap(this.fighter[1].hitbox, this.fighter[0], (h1, p0) => {
            p0.takeDamage()
            game.player[0].health -= Phaser.Math.Between(8, 12)
            h1.setPosition(width, height)
        })

        this.gameOver = false
    }

    update() {
        if ((game.player[0].health <= 0 || game.player[1].health <= 0) && !this.gameOver) {
            this.add.text(width/2, height/2, "gameover", normalTextConfig).setOrigin(0.5)
            this.gameOver = true
        }
        this.fighter[0].update()
        this.fighter[1].update()
        
        if (Phaser.Input.Keyboard.JustDown(this.menuKey)) {
            this.scene.start('menuScene')
        }
        
        if (Phaser.Input.Keyboard.JustDown(this.debugKey)) {
            this.physics.world.drawDebug = this.physics.world.drawDebug ? false : true
            this.physics.world.debugGraphic.clear()
        }
    }
}