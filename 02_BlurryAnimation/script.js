const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')

let load = 0
let interval = setInterval(blurring,20)

function blurring() {
    load ++

    if (load > 99) {
        clearInterval(interval)
    }

    loadText.innerText = `${load}%`
    loadText.style.opacity = 1 - (load/100) // opacity will go from 1 to 0
    bg.style.filter = `blur(${30-((load/100)*30)}px)` // blur filter will go from 30 to 0
}

/*
NOTE:

1) Opacity 0 - Completely Visible
2) Opacity 1 - Completely Invisible
*/