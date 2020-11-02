basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.showString("°C")
    while (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("T ok")
        basic.pause(500)
    }
    // if (input.temperature() < 26)
    while (input.temperature() > 34) {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("T alta")
        basic.pause(500)
    }
    while (input.temperature() < 26) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("T baja")
        basic.pause(500)
    }
})
