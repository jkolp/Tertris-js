document.addEventListener("DOMContentLoaded", () => {
	const grid = document.querySelector('.grid') // assigning grid object with class=grid
	let squares = Array.from(document.querySelectorAll('.grid div')) // Array.from collects array-like data/object
	const socreDisplay = document.querySelector('#score')
	const startBtn = document.querySelector('#start-button') // storing <button> object into the variable
	const width = 10;

	// Tetrominoes

	const lTetromino = [
    [1, width+1, width*2+1, 2], 
    [width, width+1, width+2, width*2+2],
    [1, width+1, width*2+1, width*2],
    [width, width*2, width*2+1, width*2+2]
  ]

  const zTetromino = [
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1],
    [0,width,width+1,width*2+1],
    [width+1, width+2,width*2,width*2+1]
  ]

  const tTetromino = [
    [1,width,width+1,width+2],
    [1,width+1,width+2,width*2+1],
    [width,width+1,width+2,width*2+1],
    [1,width,width+1,width*2+1]
  ]

  const oTetromino = [
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1],
    [0,1,width,width+1]
  ]

  const iTetromino = [
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3],
    [1,width+1,width*2+1,width*3+1],
    [width,width+1,width+2,width+3]
  ]

  const tetrominoes = [lTetromino, zTetromino, tTetromino, oTetromino, iTetromino]

  let currentPosition = width/2 - 1; // 4: Top middle div
  let currentRotation = 0;
  
  let random = Math.floor(Math.random()* tetrominoes.length)
  console.log(Math.floor(Math.random()*tetrominoes.length))

  let current = tetrominoes[random][currentRotation] // current shape 


  function draw() {
  	// adding class name to the designated div position to draw the tetromino.
  	current.forEach(index => {
  		squares[currentPosition + index].classList.add('tetromino')
  	})
  }

  draw()


})

