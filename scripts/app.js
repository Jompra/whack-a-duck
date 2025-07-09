function init() {
    // All code goes here
    const gridElem = document.querySelector('.grid')
    const scoreElem = document.querySelector('#score-display')
    const audioElem = document.querySelector('#quack')

    const cells = []
    const gridWidth = 10
    const numberOfCells = gridWidth * gridWidth

    let duckPosition = 3
    let score = 0
    let totalDucks = 0

    function addDuck() {
        cells[duckPosition].classList.add('duck')
        totalDucks++
    }

    function removeDuck() {
        cells[duckPosition].classList.remove('duck')
    }

    function endGame(){
        alert('Game ended, score: ' + score)
        score = 0
        scoreElem.textContent = 'Your score is 0'
        totalDucks = 0
    }

    function play() {
        setInterval(() => {
            if (totalDucks < 10) {
                removeDuck()
                duckPosition = Math.floor(Math.random() * numberOfCells)
                addDuck()
            } else {
                endGame()
            }

        }, 1000)
    }

    function handleClick(event) {
        console.log('Handle Click has run!')
        if (event.target.classList.contains('duck')) {
            audioElem.pause()
            audioElem.currentTime = 0
            score += 10
            scoreElem.textContent = `Your score is ${score}`
            audioElem.play()
            console.log(score)
        }
    }

    function createGrid() {
        // for every cell that we require create a div
        // append this cell to our grid
        for (let i = 0; i < numberOfCells; i++) {
            const cell = document.createElement('div')
            // cell.classList.add('duck')
            cell.textContent = i
            cell.addEventListener('click', handleClick)
            cells.push(cell)
            gridElem.appendChild(cell)
        }
        console.log(cells)
    }
    createGrid()
    play()

}

document.addEventListener('DOMContentLoaded', init)