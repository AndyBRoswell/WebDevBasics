const body = document.body

demo();

async function demo() {
    const delay = 250;
    while (true) {
        body.style.backgroundColor = '#000000'
        await sleep(delay)
        body.style.backgroundColor = '#FFFFFF'
        await sleep(delay)
        console.log('Loop executed.')
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
