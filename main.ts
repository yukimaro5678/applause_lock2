input.onLogoEvent(TouchButtonEvent.Touched, function () {
    ろっく = 1
    if (パスワード == -1) {
        パスワード = はくしゅのかず
        soundExpression.giggle.playUntilDone()
        for (let index = 0; index < 3; index++) {
            basic.showNumber(パスワード)
            basic.pause(100)
            basic.clearScreen()
            basic.pause(100)
        }
        はくしゅのかず = 0
    } else {
        if (はくしゅのかず == パスワード) {
            basic.showIcon(IconNames.Happy)
            soundExpression.spring.playUntilDone()
        } else {
            basic.showIcon(IconNames.No)
            soundExpression.sad.playUntilDone()
        }
        はくしゅのかず = 0
        basic.clearScreen()
    }
    ろっく = 0
})
input.onSound(DetectedSound.Loud, function () {
    if (ろっく == 0) {
        はくしゅのかず += 1
        basic.showNumber(はくしゅのかず)
    }
})
let ろっく = 0
let パスワード = 0
let はくしゅのかず = 0
はくしゅのかず = 0
パスワード = -1
ろっく = 0
basic.forever(function () {
	
})
