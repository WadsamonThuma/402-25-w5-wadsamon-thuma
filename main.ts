let action = 0
input.onGesture(Gesture.Shake, function () {
    action = randint(1, 3)
    if (action == 1) {
        basic.showLeds(`
            . . . # #
            . . . # #
            # # # # #
            . . . # #
            . . . # #
            `)
        music.playMelody("C5 B A G F E D C ", 120)
    } else if (action == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        music.playMelody("C D E F G A B C5 ", 120)
    } else {
        basic.showLeds(`
            # # . . #
            # # . # .
            . # # . .
            # # . # .
            # # . . #
            `)
        music.playMelody("B A G A G F A C5 ", 120)
    }
    basic.clearScreen()
})
