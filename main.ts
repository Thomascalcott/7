input.onGesture(Gesture.Shake, function () {
    N += 1
    display.show(N)
    basic.pause(100)
})
let N = 0
let display: grove.TM1637 = null
display = grove.createDisplay(DigitalPin.P0, DigitalPin.P14)
