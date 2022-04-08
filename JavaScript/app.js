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

  // Timing variables
  let obstacleTimer



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
    addWater(26); addWater(27); addWater(28); addWater(29); addWater(30)
    addWater(31); addWater(32); addWater(33); addWater(34); addWater(35)
    addWater(36); addWater(37); addWater(38); addWater(65); addWater(66)
    addWater(67); addWater(68); addWater(69); addWater(70); addWater(71)
    addWater(72); addWater(73); addWater(74); addWater(75); addWater(76)
    addWater(77)
    addHyena(hyenaStartPosition)
    addScar(scarStartPosition)
    addWildebeest(wildeStartPosition)
    addZazu(26); addZazu(29); addZazu(32); addZazu(35); addZazu(38); 
  }

  // function waterFeatures () {
  //   for (let i = width * 2; i < (width * 3) - 1; i++) {
  //     cells[i].classList.add(waterClass)
  //   } 
  // }
  // waterFeatures()

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
  let waterPosition = []

  const hyenaClass = 'hyena'
  const hyenaStartPosition = 51
  let hyenaCurrentPosition = hyenaStartPosition

  const scarClass = 'scar'
  const scarStartPosition = 22
  let scarCurrentPosition = scarStartPosition

  const wildeClass = 'wildebeest'
  const wildeStartPosition = 89
  let wildeCurrentPosition = wildeStartPosition

  const zazuClass = 'zazu'



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

  // Hyena movement function
  function addHyena() {
    cells[hyenaCurrentPosition].classList.add(hyenaClass)
    console.log(hyenaCurrentPosition)
    obstacleTimer = setInterval(() => {
      if (hyenaCurrentPosition <= width * 3) {
        cells[hyenaCurrentPosition].classList.remove(hyenaClass)
        hyenaCurrentPosition = hyenaStartPosition + 1
      } else {
        cells[hyenaCurrentPosition].classList.remove(hyenaClass)
        hyenaCurrentPosition--
        cells[hyenaCurrentPosition].classList.add(hyenaClass)
      }
    }, 900)
  }

  function addScar() {
    cells[scarCurrentPosition].classList.add(scarClass)
    console.log(scarCurrentPosition)
    obstacleTimer = setInterval(() => {
      if (scarCurrentPosition <= width) {
        cells[scarCurrentPosition].classList.remove(scarClass)
        scarCurrentPosition = 26
      } else {
        cells[scarCurrentPosition].classList.remove(scarClass)
        scarCurrentPosition--
        cells[scarCurrentPosition].classList.add(scarClass)
      }
    }, 1000)
  }

  function addWildebeest() {
    cells[wildeCurrentPosition].classList.add(wildeClass)
    console.log(wildeCurrentPosition)
    obstacleTimer = setInterval(() => {
      if (wildeCurrentPosition <= width * 6) {
        cells[wildeCurrentPosition].classList.remove(wildeClass)
        wildeCurrentPosition = 91
      } else {
        cells[wildeCurrentPosition].classList.remove(wildeClass)
        wildeCurrentPosition--
        cells[wildeCurrentPosition].classList.add(wildeClass)
      }
    }, 800)
  }

  function addZazu(position) {
    cells[position].classList.add(zazuClass)
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

  // Remove Hyena function
  function removeHyena(position) {
    cells[position].classList.remove(hyenaClass)
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






  // Function to start the game and get the animals moving across the page
  // function startGame() {
  //   addHyena(hyenaStartPosition)
  // hyenaCurrentPosition--
  // obstacleTimer = setInterval(() => {
  //   hyenaCurrentPosition --
  //   removeHyena(hyenaCurrentPosition)
  // },2000)
  // }

  // startGame()








  createGrid()









}

window.addEventListener('DOMContentLoaded', init)