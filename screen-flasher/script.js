const body = document.body
window.addEventListener('click', () => {
    while (true) {
        body.style.backgroundColor = '#000000'
        body.style.backgroundColor = '#FFFFFF'
        console.log('Loop executed.')
    }
})
