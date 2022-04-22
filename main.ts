input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P0, 10)
    pins.analogWritePin(AnalogPin.P1, 100)
})
basic.forever(function () {
	
})
