/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Murali Kothuri
 * Created on: Feb 2026
 * This program is a rock, paper, scissors game module.
*/

// variables
let randomNumber = (0,2)
let score = 0

// setup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.SmallSquare)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.Square)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
        basic.pause(5000)
        basic.showIcon(IconNames.Happy)
    }

    basic.clearScreen()
})

// press A to increase score
input.onButtonPressed(Button.A, function() {
    score = score + 1
    basic.showIcon(IconNames.Yes)
    basic.clearScreen()
    basic.showIcon(IconNames.Happy)
    basic.clearScreen()
})

// press B to check the current score
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString("Score:" + score)
})
