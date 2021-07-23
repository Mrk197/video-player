const $video = document.querySelector('#video')
const $play = document.querySelector('#play')
const $pause = document.querySelector('#pause')
const $backward = document.querySelector('#back')
const $forward = document.querySelector('#avanzar')

$play.addEventListener('click',handlePlay)
$pause.addEventListener('click',handlePause)
$backward.addEventListener('click',handleBack)
$forward.addEventListener('click',handleForw)

function handlePlay(){
    $video.play()
    $play.hidden = true
    $pause.hidden = false
    console.log('le diste clic al botón de play')
}

function handlePause(){
    $video.pause()
    $play.hidden = false
    $pause.hidden = true
    console.log('le diste clic al botón de pausa')
}

function handleBack (){
    console.log("Para atrás 10 segundos",  $video.currentTime)
    $video.currentTime = $video.currentTime - 10
}

function handleForw (){
    console.log("Para adelante  10 segundos", $video.currentTime)
    $video.currentTime += 10
}

const $progress = document.querySelector('#progress')
$video.addEventListener('loadedmetadata', handleLoaded)
$video.addEventListener('timeupdate', handleTimeUpdate)

function handleLoaded() {
    console.log('ha cargado el video', $video.duration)
    $progress.max = $video.duration
}

function handleTimeUpdate(){
    $progress.value = $video.currentTime
    //console.log('Tiempo actual', $video.currentTime)
}

$progress.addEventListener('input',handleInput)

function handleInput(){
    console.log($progress.value)
    $video.currentTime = $progress.value
}
