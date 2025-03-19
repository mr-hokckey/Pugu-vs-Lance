class Title extends Phaser.Scene {
    constructor() {
        super('titleScene')
    }

    create() {
        this.playKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)

        this.text1 = this.add.text(width / 2, height / 4, "Pugu VS Lance").setOrigin(0.5)
        this.text2 = this.add.text(width / 2, height / 2, "Press SPACE to play").setOrigin(0.5)

        this.creditsKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C)
        this.text3 = this.add.text(width / 2, height * 3 / 4, "Press C to view credits").setOrigin(0.5)
        this.unCreditsKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC)
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(this.playKey)) {
            this.scene.start('menuScene')
        }

        if (Phaser.Input.Keyboard.JustDown(this.creditsKey)) {
            this.text1.text = 'Pugu VS Lance is a recreation of the unnamed\nfake fighting game from Inside Out 2.'
            this.text2.text = 'The 4 second shot from the movie can be seen here:\nhttps://www.youtube.com/watch?v=L7rRoMrTZ8g'
            this.text3.text = 'Sprites were made using piskelapp.com.\nThere were plans to add more, but I unfortunately ran out of time.\nPress ESC to return to menu'
        }

        if (Phaser.Input.Keyboard.JustDown(this.unCreditsKey)) {
            this.text1.text = "Pugu VS Lance"
            this.text2.text = "Press SPACE to play"
            this.text3.text = "Press C to view credits"
        }
    }
}