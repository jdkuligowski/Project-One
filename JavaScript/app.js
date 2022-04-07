function init() {

  // ? Define Elements
  // Grid Container
  const grid = document.querySelector('.grid')
  console.log(grid)

  // Grid Creation
  const width = 13
  const height = 8
  const cellCount = width * height
  const cells = []

  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = cell.id = i
      grid.appendChild(cell)
      cells.push(cell)
    }
    
    addSimba(simbaStartPosition)
    addTimon(timonStartPosition)
    addPumbaa(pumbaaStartPosition)
    addWater(waterPosition)
  }
  

  // Character setup
  const simbaClass = 'simba'
  console.log(simbaClass)
  const simbaStartPosition = 100
  let simbaCurrentPosition = simbaStartPosition

  const timonClass = 'timon'
  const timonStartPosition = 97
  let timonCurrentPosition = timonStartPosition

  const pumbaaClass = 'pumbaa'
  const pumbaaStartPosition = 94
  let pumbaaCurrentPosition = pumbaaStartPosition

  const waterClass = 'water'
  const waterPosition = width * 2

  // * Functions for adding players and to help them move
  // Add simba function
  function addSimba(position) {
    cells[position].classList.add(simbaClass)
  }
  // Add timon function
  function addTimon(position) {
    cells[position].classList.add(timonClass)
  }
  // Add Pumbaa function
  function addPumbaa(position) {
    cells[position].classList.add(pumbaaClass)
  }

  function addWater(position) {
    cells[position].classList.add(waterClass)
  }

  // * Functions for removing players from previous square, so only one image appears
  // Add simba function
  function removeSimba(position) {
    cells[position].classList.remove(simbaClass)
  }
  // Add timon function
  function removeTimon(position) {
    cells[position].classList.remove(timonClass)
  }
  // Add Pumbaa function
  function removePumbaa(position) {
    cells[position].classList.remove(pumbaaClass)
  }



  // Moving characters around
  function handleKeyDown(event) {
    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39

    removeSimba(simbaCurrentPosition)
    removeTimon(timonCurrentPosition)
    removePumbaa(pumbaaCurrentPosition)
    if (simbaCurrentPosition > width) {

      if (key === left && simbaCurrentPosition % width !== 0) {
        simbaCurrentPosition--

      } else if (key === right && simbaCurrentPosition % width !== width - 1) {
        simbaCurrentPosition++

      } else if (key === up && (simbaCurrentPosition >= width)) {
        simbaCurrentPosition -= width

      } else if (key === down && (simbaCurrentPosition + width <= cellCount - 1)) {
        simbaCurrentPosition += width
      } else {
        console.log('invalid key movemenet')
      }
    } else if (timonCurrentPosition > width) {

      if (key === left && timonCurrentPosition % width !== 0) {
        timonCurrentPosition--

      } else if (key === right && timonCurrentPosition % width !== width - 1) {
        timonCurrentPosition++

      } else if (key === up && (timonCurrentPosition >= width)) {
        timonCurrentPosition -= width

      } else if (key === down && (timonCurrentPosition + width <= cellCount - 1)) {
        timonCurrentPosition += width
      } else {
        console.log('invalid key movemenet')
      }
    } else if (pumbaaCurrentPosition > width) {

      if (key === left && pumbaaCurrentPosition % width !== 0) {
        pumbaaCurrentPosition--

      } else if (key === right && pumbaaCurrentPosition % width !== width - 1) {
        pumbaaCurrentPosition++

      } else if (key === up && (pumbaaCurrentPosition >= width)) {
        pumbaaCurrentPosition -= width

      } else if (key === down && (pumbaaCurrentPosition + width <= cellCount - 1)) {
        pumbaaCurrentPosition += width
      } else {
        console.log('invalid key movemenet')
      }
    } addSimba(simbaCurrentPosition)
    addTimon(timonCurrentPosition)
    addPumbaa(pumbaaCurrentPosition)
  }

  document.addEventListener('keydown', handleKeyDown)




  createGrid()









}

window.addEventListener('DOMContentLoaded', init)