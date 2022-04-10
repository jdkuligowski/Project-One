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

  // Score Traking
  const livesBox = document.querySelector('#lives-val')
  const scoreBox = document.querySelector('#score-val')
  const levelBox = document.querySelector('#level-val')
  const highBox = document.querySelector('#high-val')

  let livesVal = livesBox.innerText = 10
  let scoreVal = scoreBox.innerText = 0
  let levelVal = levelBox.innerText = 1
  let highVal = highBox.innerText = 0


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
    waterRow1(); waterRow2()
    
    addScar(scarStartPosition)
    addWildebeest(wildeStartPosition)
    addZazu(26); addZazu(29); addZazu(32); addZazu(35); addZazu(38)
    addZazu(66); addZazu(69); addZazu(73); addZazu(76)
    addElephant(elephantStartPosition)
    addHyena()
    moveHyena()
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

  const hyenaClass = 'hyena'
  // let hyenaStartPosition = [39, 42, 45, 48]
  const hyenaStartPosition = 39
  let hyenaCurrentPosition = hyenaStartPosition

  const scarClass = 'scar'
  const scarStartPosition = 22
  let scarCurrentPosition = scarStartPosition

  const wildeClass = 'wildebeest'
  const wildeStartPosition = 89
  let wildeCurrentPosition = wildeStartPosition

  const zazuClass = 'zazu'

  const elephantClass = 'elephant'
  const elephantStartPosition = 58
  let elephantCurrentPosition = elephantStartPosition


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

  function waterRow1() {
    for (let i = width * 2; i < (width * 3); i++) {
      cells[i].classList.add(waterClass)
    }
  }

  function waterRow2() {
    for (let i = width * 5; i < (width * 6); i++) {
      cells[i].classList.add(waterClass)
    }
  }

  const newHyenaPositions = [39, 42, 45, 48]
  console.log(newHyenaPositions[2])
  console.log(newHyenaPositions.length)
  function addHyena() {
    for (let i = 0; i < 4; i++) {
      cells[newHyenaPositions[i]].classList.add(hyenaClass)
    }
  }


  // Hyena movement function
  function moveHyena() {
    cells[hyenaCurrentPosition].classList.add(hyenaClass)
    console.log(hyenaCurrentPosition)
    obstacleTimer = setInterval(() => {
      if (hyenaCurrentPosition > 50) {
        cells[hyenaCurrentPosition].classList.remove(hyenaClass)
        hyenaCurrentPosition = hyenaStartPosition - 1
      } else {
        cells[hyenaCurrentPosition].classList.remove(hyenaClass)
        hyenaCurrentPosition++
        cells[hyenaCurrentPosition].classList.add(hyenaClass)
      }
    }, 700)
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
    }, 700)
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
    }, 700)
  }

  function addElephant() {
    cells[elephantCurrentPosition].classList.add(elephantClass)
    console.log(elephantCurrentPosition)
    obstacleTimer = setInterval(() => {
      if (elephantCurrentPosition <= width * 4) {
        cells[elephantCurrentPosition].classList.remove(elephantClass)
        elephantCurrentPosition = 65
      } else {
        cells[elephantCurrentPosition].classList.remove(elephantClass)
        elephantCurrentPosition--
        cells[elephantCurrentPosition].classList.add(elephantClass)
      }
    }, 700)
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

  let collisionDetection

  //Collision function
  // function collisions() {
  //   const obstacleArray = [27, 28, 30, 31, 33, 34, 36, 37, 65, 67, 68, 70, 71, 72, 74, 75, 77,
  //     wildeCurrentPosition, elephantCurrentPosition, hyenaCurrentPosition, scarCurrentPosition]
  //   collisionDetection = setInterval(() => {
  //     if (obstacleArray.includes(simbaCurrentPosition)) {
  //       alert('life lost!')
  //       simbaCurrentPosition = simbaStartPosition
  //       livesVal = livesVal - 1
  //       livesBox.innerText = livesVal
  //       removeSimba(simbaCurrentPosition)
  //     } else if (obstacleArray.includes(timonCurrentPosition)) {
  //       alert('life lost!')
  //       timonCurrentPosition = timonStartPosition
  //       livesVal = livesVal - 1
  //       livesBox.innerText = livesVal
  //     } else if (obstacleArray.includes(pumbaaCurrentPosition)) {
  //       alert('life lost!')
  //       pumbaaCurrentPosition = pumbaaStartPosition
  //       livesVal = livesVal - 1
  //       livesBox.innerText = livesVal
  //     } else {
  //       console.log('continue playing')
  //     }
  //   }, 100)
  // }

  // collisions()





  // Moving characters around
  function handleKeyDown(event) {
    const key = event.keyCode
    const up = 38
    const down = 40
    const left = 37
    const right = 39
    const obstacleArray = [27, 28, 30, 31, 33, 34, 36, 37, 65, 67, 68, 70, 71, 72, 74, 75, 77,
      wildeCurrentPosition, elephantCurrentPosition, hyenaCurrentPosition, scarCurrentPosition]
    removeSimba(simbaCurrentPosition)
    removeTimon(timonCurrentPosition)
    removePumbaa(pumbaaCurrentPosition)
    // First conditional statement determines which character is being used
    if (obstacleArray.includes(simbaCurrentPosition)) {
      alert('life lost!')
      simbaCurrentPosition = simbaStartPosition
      livesVal = livesVal - 1
      livesBox.innerText = livesVal
    } else if (obstacleArray.includes(timonCurrentPosition)) {
      alert('life lost!')
      timonCurrentPosition = timonStartPosition
      livesVal = livesVal - 1
      livesBox.innerText = livesVal
    } else if (obstacleArray.includes(pumbaaCurrentPosition)) {
      alert('life lost!')
      pumbaaCurrentPosition = pumbaaStartPosition
      livesVal = livesVal - 1
      livesBox.innerText = livesVal
    } else {


      if (simbaCurrentPosition > width) {

        // Second conditional statement sends character back to the start if they crash

        // Third conditional statement determins the movement of the current character around the grid
        if (key === left && simbaCurrentPosition % width !== 0) {
          simbaCurrentPosition--

        } else if (key === right && simbaCurrentPosition % width !== width - 1) {
          simbaCurrentPosition++

        } else if (key === up && (simbaCurrentPosition >= width)) {
          simbaCurrentPosition -= width
          scoreVal = scoreVal + 10
          scoreBox.innerText = scoreVal

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
          scoreVal = scoreVal + 10
          scoreBox.innerText = scoreVal

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
          scoreVal = scoreVal + 10
          scoreBox.innerText = scoreVal

        } else if (key === down && (pumbaaCurrentPosition + width <= cellCount - 1)) {
          pumbaaCurrentPosition += width
        } else {
          console.log('invalid key movemenet')
        }
      }
    } addSimba(simbaCurrentPosition)
    addTimon(timonCurrentPosition)
    addPumbaa(pumbaaCurrentPosition)
  }



  document.addEventListener('keydown', handleKeyDown)
  // document.addEventListener('keyup', collisions)


  // Sounds



  const themeTune = document.querySelector('#theme')
  console.log(themeTune)
  const startGame = document.querySelector('#start')

  function playAudio() {
    themeTune.src = '../Sounds/theme.wav'
    themeTune.play()
    console.log('playing theme')
  }

  //startGame.addEventListener('click',playAudio)


  createGrid()









}

window.addEventListener('DOMContentLoaded', init)