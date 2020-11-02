basic.forever(function () {
    basic.showNumber(input.temperature())
    basic.showString("°C")
    // if (input.temperature() < 26)
    if (input.temperature() >= 26 && input.temperature() <= 34) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("T ok")
        basic.pause(500)
    } else if (input.temperature() > 34) {
        basic.showIcon(IconNames.No)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("T alta")
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
        basic.showString("T baja")
        basic.pause(500)
    }
    basic.clearScreen()
    basic.pause(2000)
})
