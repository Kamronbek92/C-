window.addEventListener('DOMContentLoaded', function () {

    let button = document.querySelector('.btn'),
    
        button7 = document.querySelector('.btn7'),
        button9 = document.querySelector('.btn9'),
        segment_mount = document.querySelector('.segment-mount'),
        segment_sound = document.querySelector('.segment-sound')

    button.addEventListener('click', function () {
        segment_mount.style.display = 'block'
    })
    button7.addEventListener('click', function () {
        segment_mount.style.display = 'none'
    })

    button7.addEventListener('click', function () {
        segment_sound.style.display = 'block'
    })

    button9.addEventListener('click', function () {
        segment_mount.style.display = 'none'
        segment_sound.style.display = 'none'
    })
})

