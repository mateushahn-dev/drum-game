for(let n = 0; n < document.querySelectorAll('.drum').length; n++) {
    
    document.querySelectorAll('.drum')[n].addEventListener('click', function() {

        playSound(this.innerHTML)
        buttonAnimation(this.innerHTML)
    })
}

document.addEventListener('keydown', function(e) {

    playSound(e.key)
    buttonAnimation(e.key)
})

function playSound(key) {
    switch (key) {
        case 'w':
            const tom1 = new Audio('sound/tom-1.mp3')
            tom1.play()
            break;

        case 'a':
            const tom2 = new Audio('sound/tom-2.mp3')
            tom2.play()
            break;

        case 's':
            const tom3 = new Audio('sound/tom-3.mp3')
            tom3.play()
            break;

        case 'd':
            const tom4 = new Audio('sound/tom-4.mp3')
            tom4.play()
            break;

        case 'j':
            const snare = new Audio('sound/snare.mp3')
            snare.play()
            break;

        case 'k':
            const crash = new Audio('sound/crash.mp3')
            crash.play()
            break;

        case 'l':
            const kick = new Audio('sound/kick-bass.mp3')
            kick.play()
            break;

        default: console.log(key)
            break;
    }
}

buttonAnimation = (key) => {

    document.querySelector('.' + key).classList.add('pressed')

    setTimeout(() => {
        document.querySelector('.' + key).classList.remove('pressed')
    }, 400)
}
