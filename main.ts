basic.forever(function () {
    // muestra la temperatura
    // actual del sensor del microbit, por defecto aparece en 21 grados celsius, pero se puede modificar durante las pruebas
    basic.showNumber(input.temperature())
    // muestra el símbolo de grados celsius
    basic.showString("°C")
    if (input.temperature() >= 26 && input.temperature() <= 34) {
        // muestre carita feliz
        basic.showIcon(IconNames.Happy)
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje OK
        basic.showString("T ok")
        // pausa de 500 milisegundos
        basic.pause(500)
    } else if (input.temperature() > 34) {
        // muestre símbolo de X ó alerta
        basic.showIcon(IconNames.No)
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Temp. alta        basic.pause(500) // pausa de 500 milisegundos
        basic.showString("T alta")
    } else {
        // condicional final si la temperatura es inferior a 26 grados, devuelva que la temperatura está baja. también se podía colocar
        // else if (input.temperature() < 26) pero no es necesario.
        // muestre símbolo de cara triste
        basic.showIcon(IconNames.Sad)
        // pausa de 500 milisegundos
        basic.pause(500)
        // limpiar pantalla
        basic.clearScreen()
        // muestre mensaje Temp. baja
        basic.showString("T baja")
        // pausa de 500 milisegundos
        basic.pause(500)
    }
    // limpiar pantalla
    basic.clearScreen()
    // espera de 2 segundos hasta volver a empezar
    basic.pause(2000)
})
