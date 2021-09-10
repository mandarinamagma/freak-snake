document.addEventListener('DOMContentLoaded', () => {

        const grid = document.querySelector('.grid')
        let squares = Array.from(document.querySelectorAll('.grid div'))
        const scoreDisplay = document.querySelector('#score')
        const startBtn = document.querySelector('#start-button')
        const width = 10
        let timerId
        let score = 0

        let headPosition = 115
        let tailPosition = 125
        let currentDirection = -10

        let foodPosition = Math.floor(Math.random() * squares.length)

        timerId = setInterval(advance, 50)

        squares[headPosition].classList.add('body')
        squares[tailPosition].classList.add('body')
        squares[foodPosition].classList.add('food')
        squares[headPosition].direction = -10
        squares[tailPosition].direction = -10


        function advance() {
            // advance head store direction
            squares[headPosition].direction = currentDirection

            headPosition = (200 + headPosition + currentDirection) % 200

            squares[headPosition].classList.add('body')

            // check for food
            if (squares[headPosition].classList.contains('food')) {
                // delete food
                squares[headPosition].classList.remove('food')
                    // create new one
                foodPosition = Math.floor(Math.random() * squares.length)
                squares[foodPosition].classList.add('food')

                foodPosition = Math.floor(Math.random() * squares.length)
                squares[foodPosition].classList.add('food')

            } else {
                // delete tail
                squares[tailPosition].classList.remove('body')
                tailPosition = (200 + tailPosition + squares[tailPosition].direction) % 200
            }
        }

        function control(e) {
            if (e.keyCode === 37) { // left
                switch (currentDirection) {
                    case -10:
                        currentDirection = -1
                        break;
                    case -1:
                        currentDirection = +10
                        break;
                    case +10:
                        currentDirection = +1
                        break;
                    case +1:
                        currentDirection = -10
                }
            } else if (e.keyCode === 38) { // up
                advance()
            } else if (e.keyCode === 39) { // right
                switch (currentDirection) {
                    case -10:
                        currentDirection = +1
                        break;
                    case +1:
                        currentDirection = +10
                        break;
                    case +10:
                        currentDirection = -1
                        break;
                    case -1:
                        currentDirection = -10
                }
            } else if (e.keyCode === 40) { // down
            }
        }

        document.addEventListener('keyup', control)

    })
    /*
    function undraw() {
    current.forEach(index => {
    squares[currentPosition + index].classList.remove('tetromino')
    squares[currentPosition + index].style.backgroundColor = ''
    })
    }

    // make the move
    // timerId = setInterval(moveDown, 1000)

    // funcion de teclas
    function control(e){
    if(e.keyCode === 37){
    moveLeft()
    } else if (e.keyCode === 38) {
    rotate()
    } else if (e.keyCode === 39) {
    moveRight()
    } else if (e.keyCode === 40) {
    moveDown()
    }
    }

    document.addEventListener('keyup', control)

    // gravedad
    function moveDown() {
    undraw()
    currentPosition+=width
    draw()
    freeze()
    }

    function freeze(){
    if(current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
    current.forEach(index => squares[currentPosition + index].classList.add('taken'))
    current.forEach(index => squares[currentPosition + index].classList.add('frozen'))
    // empieza uno nuevo
    random = nextRandom
    nextRandom = Math.floor(Math.random()*theTetrominoes.length)
    current = theTetrominoes[random][currentRotation]
    currentPosition = 4
    draw()
    displayShape()
    addScore()
    gameOver()
    }
    }

    function moveLeft(){
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if (!isAtLeftEdge) currentPosition -=1

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition += 1
    }

    draw()
    }

    function moveRight(){
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width-1)

    if (!isAtRightEdge) currentPosition++

    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
    currentPosition--
    }

    draw()
    }

    function rotate(){
    undraw()
    currentRotation++
    if(currentRotation === current.length) {
    currentRotation=0
    }
    current = theTetrominoes[random][currentRotation]
    draw()
    }

    const displaySquares = document.querySelectorAll('.mini-grid div')
    const displayWidth = 4
    let displayIndex=0

    //the tretomino sin rotacion
    const upNextTetrominoes = [
    [1, displayWidth+1, displayWidth*2+1, 2], //l
    [0, displayWidth, displayWidth+1, displayWidth*2+1],//z
    [1, displayWidth, displayWidth+1, displayWidth+2],//t
    [0, 1, displayWidth, displayWidth+1],//o
    [1, displayWidth+1, displayWidth*2+1, displayWidth*3+1]//i
    ]

    function displayShape(){
    displaySquares.forEach(square => {
    square.classList.remove('tetromino')
    square.style.backgroundColor = ''
    })
    upNextTetrominoes[nextRandom].forEach( index => {
    displaySquares[displayIndex + index].classList.add('tetromino')
    displaySquares[displayIndex + index].style.backgroundColor = colors [nextRandom]
    })
    }

    startBtn.addEventListener('click', () => {
    if (timerId) {
    clearInterval(timerId)
    timerId = null
    } else {
    draw()
    timerId = setInterval(moveDown,500)
    //nextRandom = Math.floor(Math.random()*theTetrominoes.length)
    // displayShape()
    }
    })

    function addScore() {
    for (let i = 0; i<199; i += width){
    const row =  [ i,i+1,i+2,i+3,i+4,i+5,i+6,i+7,i+8,i+9]

    if(row.every(index => squares[index].classList.contains('taken'))) {
    score += 10
    scoreDisplay.innerHTML = score
    row.forEach( index => {
    squares[index].classList.remove('taken')
    squares[index].classList.remove('tetromino')
    squares[index].classList.remove('frozen')
    squares[index].style.backgroundColor = ''
    })
    const squaresRemoved = squares.splice(i,width)
    squares = squaresRemoved.concat(squares)
    squares.forEach(cell=>grid.appendChild(cell))
    }
    }
    }

    function gameOver() {
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))){
    scoreDisplay.innerHTML = 'end'
    clearInterval(timerId)
    }
    }
    })

    */