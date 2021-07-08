let dice = 0
input.onButtonPressed(Button.A, function () {
    basic.showArrow(ArrowNames.West)
})
input.onButtonPressed(Button.B, function () {
    basic.showArrow(ArrowNames.East)
})
input.onGesture(Gesture.Shake, function () {
   dice = randint(1, 6) 
   basic.showNumber(dice) 
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
      if (dice = 2,4,6) {
    }
    basic.pause(100)
    basic.showString("Yay!")
})