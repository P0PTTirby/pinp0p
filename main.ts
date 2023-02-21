input.onButtonPressed(Button.A, function () {
    pins.servoWritePin(AnalogPin.P0, 180)
})
input.onButtonPressed(Button.B, function () {
    pins.servoSetPulse(AnalogPin.P0, 1500)
    basic.pause(200)
    pins.servoSetPulse(AnalogPin.P0, 1500)
    basic.pause(200)
    pins.servoSetPulse(AnalogPin.P0, 1500)
    basic.pause(200)
})
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . # # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # . .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . # # # .
    . # # # .
    . # # # .
    . . . . .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # # # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # # # .
    # # . # #
    . # # # .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . . . .
    # . . . #
    . . . . .
    . . # . .
    `)
basic.showLeds(`
    . . # . .
    . . # . .
    # # # # #
    . . # . .
    . . # . .
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    . . # . .
    . # . # .
    # . . . #
    . # . # .
    . . # . .
    `)
basic.showLeds(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    led.plotBrightness(2, 0, 270)
    led.plotBrightness(2, 1, 270)
    led.plotBrightness(2, 2, 270)
    led.plotBrightness(1, 2, 70)
    led.plotBrightness(3, 2, 70)
    led.plotBrightness(1, 3, 70)
    led.plotBrightness(3, 3, 70)
    led.plotBrightness(2, 4, 70)
    for (let index = 0; index < 1; index++) {
        led.plotBrightness(1, 1, 270)
        led.plotBrightness(3, 1, 270)
    }
    basic.pause(500)
    for (let index = 0; index < 1; index++) {
        led.plotBrightness(1, 1, 0)
        led.plotBrightness(3, 1, 0)
    }
    basic.pause(500)
})
basic.forever(function () {
	
})
