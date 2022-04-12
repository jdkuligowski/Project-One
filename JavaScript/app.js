function init() {

  // ? Define Elements
  // Grid Container
  const grid = document.querySelector('.grid')
  console.log(grid)

  // Grid Creation
  const width = 12
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



  // * Section 2: Create a grid and add the game characters to this * //
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      cell.innerText = cell.id = i
      grid.appendChild(cell)
      cells.push(cell)

    }
    waterRow1(); waterRow2()
    addHyena()
    addScar()
    addWildebeest()
    addZazu()
    addElephant()
    addSimba(simbaStartPosition)
    addTimon(timonStartPosition)
    addPumbaa(pumbaaStartPosition)
    collisions()
  }


  // * Section 2: Add in characters that will be used to move around the board * //
  // Add simba 
  const simbaClass = 'simba'
  console.log(simbaClass)
  const simbaStartPosition = 92
  let simbaCurrentPosition = simbaStartPosition

  function addSimba(position) {
    cells[position].classList.add(simbaClass)
  }

  // Add timon 
  const timonClass = 'timon'
  const timonStartPosition = 89
  let timonCurrentPosition = timonStartPosition

  function addTimon(position) {
    cells[position].classList.add(timonClass)
  }

  // Add Pumbaa 
  const pumbaaClass = 'pumbaa'
  const pumbaaStartPosition = 86
  let pumbaaCurrentPosition = pumbaaStartPosition

  function addPumbaa(position) {
    cells[position].classList.add(pumbaaClass)
  }

  // Add Zazu
  const zazuClass = 'zazu'
  const zazuPositions = [25, 28, 31, 34, 60, 63, 66, 69]

  function addZazu() {
    for (let i = 0; i < zazuPositions.length; i++) {
      cells[zazuPositions[i]].classList.add(zazuClass)
    }
  }

  // * Section 2b: Add in obstacles that will cause player to lose a life * //
  // Add Water
  const waterClass = 'water'

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

  // Add Hyenas and move them around
  const hyenaClass = 'hyena'
  const startingHyenas = [36, 39, 42, 45]
  let currentHyenaPositions = startingHyenas
  let updatedHyena = currentHyenaPositions

  function addHyena() {
    for (let i = 0; i < 4; i++) {
      cells[currentHyenaPositions[i]].classList.add(hyenaClass)
    }
  }

  function moveHyena(){
    collisions()
    obstacleTimer = setInterval(() => {
      if (updatedHyena[3] === 47) {
        for (let i = 0; i < 4; i++) {
          cells[updatedHyena[i]].classList.remove(hyenaClass)
        }
        updatedHyena = startingHyenas
        for (let i = 0; i < 4; i++) {
          cells[startingHyenas[i]].classList.add(hyenaClass)
        }
      } else if (updatedHyena[3] < 47) {
        for (let i = 0; i < 4; i++) {
          cells[updatedHyena[i]].classList.remove(hyenaClass)
        }
        updatedHyena = updatedHyena.map((val) => val + 1)
        for (let i = 0; i < 4; i++) {
          cells[updatedHyena[i]].classList.add(hyenaClass)
        }
      }
    }, 2000)
  }


  // Add Scar and move him around
  const scarClass = 'scar'
  const scarStarting = [23, 20, 17, 14]
  let currentScarPosition = scarStarting
  let updatedScar = currentScarPosition

  function addScar() {
    for (let i = 0; i < 4; i++) {
      cells[currentScarPosition[i]].classList.add(scarClass)
    }
  }

  function moveScar() {
    collisions()
    obstacleTimer = setInterval(() => {
      if (updatedScar[3] === 12) {
        for (let i = 0; i < 4; i++) {
          cells[updatedScar[i]].classList.remove(scarClass)
        }
        updatedScar = scarStarting
        for (let i = 0; i < 4; i++) {
          cells[updatedScar[i]].classList.add(scarClass)
        }
      } else if (updatedScar[3] > 12) {
        for (let i = 0; i < 4; i++) {
          cells[updatedScar[i]].classList.remove(scarClass)
        }
        updatedScar = updatedScar.map((val) => val - 1)
        for (let i = 0; i < 4; i++) {
          cells[updatedScar[i]].classList.add(scarClass)
        }
      }
    }, 2000)
  }

  // Add Wildebeests and allow them to move around

  const wildeClass = 'wildebeest'
  const wildeStarting = [77, 75, 73]
  let wildeCurrentPosition = wildeStarting
  let updatedWilde = wildeCurrentPosition

  function addWildebeest() {
    for (let i = 0; i < 3; i++) {
      cells[wildeCurrentPosition[i]].classList.add(wildeClass)
    }
  }

  function moveWildebeest() {
    collisions()
    obstacleTimer = setInterval(() => {
      if (updatedWilde[2] === 72) {
        for (let i = 0; i < 3; i++) {
          cells[updatedWilde[i]].classList.remove(wildeClass)
        }
        updatedWilde = wildeStarting
        for (let i = 0; i < 3; i++) {
          cells[updatedWilde[i]].classList.add(wildeClass)
        }
      } else if (updatedWilde[2] > 72) {
        for (let i = 0; i < 3; i++) {
          cells[updatedWilde[i]].classList.remove(wildeClass)
        }
        updatedWilde = updatedWilde.map((val) => val - 1)
        for (let i = 0; i < 3; i++) {
          cells[updatedWilde[i]].classList.add(wildeClass)
        }
      }
    }, 2000)
  }

  // Add Elephants and allow them to move around

  const elephantClass = 'elephant'
  const elephantStarting = [59, 56, 53, 50]
  let elephantCurrentPosition = elephantStarting
  let updatedElephant = elephantCurrentPosition

  function addElephant() {
    for (let i = 0; i < 4; i++) {
      cells[elephantStarting[i]].classList.add(elephantClass)
    }
  }

  function moveElephant() {
    collisions()
    obstacleTimer = setInterval(() => {
      if (updatedElephant[3] === 48) {
        for (let i = 0; i < 4; i++) {
          cells[updatedElephant[i]].classList.remove(elephantClass)
        }
        updatedElephant = elephantStarting
        for (let i = 0; i < 4; i++) {
          cells[updatedElephant[i]].classList.add(elephantClass)
        }
      } else if (updatedElephant[3] > 48) {
        for (let i = 0; i < 4; i++) {
          cells[updatedElephant[i]].classList.remove(elephantClass)
        }
        updatedElephant = updatedElephant.map((val) => val - 1)
        for (let i = 0; i < 4; i++) {
          cells[updatedElephant[i]].classList.add(elephantClass)
        }
      }
    }, 2000)
  }

  function moveEnemies() {
    moveElephant()
    moveHyena()
    moveScar()
    moveWildebeest()
  }

  // * Section 3: Functions for removing players from previous square, so only one image appears
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

  // const waterObstacles = 

  function collisions() {
    const obstacleArray = [24, 26, 27, 29, 30, 32, 33, 35, 61,
      62, 64, 65, 67, 68, 70, 71].concat(updatedWilde).
      concat(updatedScar).concat(updatedElephant).concat(updatedHyena)
    console.log(obstacleArray)
    obstacleTimer = setInterval(() => {
      //First conditional statement determines which character is being used
      if (obstacleArray.includes(simbaCurrentPosition)) {
        alert('life lost!')
        removeSimba(simbaCurrentPosition)
        simbaCurrentPosition = simbaStartPosition
        addSimba(simbaCurrentPosition)
        livesVal = livesVal - 1
        livesBox.innerText = livesVal
      } else if (obstacleArray.includes(timonCurrentPosition)) {
        alert('life lost!')
        removeTimon(timonCurrentPosition)
        timonCurrentPosition = timonStartPosition
        addTimon(timonCurrentPosition)
        livesVal = livesVal - 1
        livesBox.innerText = livesVal
      } else if (obstacleArray.includes(pumbaaCurrentPosition)) {
        alert('life lost!')
        removePumbaa(pumbaaCurrentPosition)
        pumbaaCurrentPosition = pumbaaStartPosition
        addPumbaa(pumbaaCurrentPosition)
        livesVal = livesVal - 1
        livesBox.innerText = livesVal
      }
    }, 100)
  }







  // * Section 4: Enable movement around the board, award points and lose lifes for collisions 
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
    collisions()
    //  Second conditional statement determines which character is being used
    if (simbaCurrentPosition > width) {



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
        simbaCurrentPosition = simbaStartPosition
      }
    } addSimba(simbaCurrentPosition)
    addTimon(timonCurrentPosition)
    addPumbaa(pumbaaCurrentPosition)
  }



  document.addEventListener('keydown', handleKeyDown)
  // document.addEventListener('keyup', collisions)


  // * Section 5: Modal pop ups for the start of the game and for loss of life

  const loadingModal = document.querySelector('.modal-load')
  console.log(loadingModal)
  const playButton = document.getElementById('play')
  const docBody = document.querySelector('.wrap')

  function loadModal() {
    loadingModal.style.display = 'flex'
    docBody.style.background = 'rgba(0,0,0,0.75)'
    console.log('display changed')
  }

  function closeModal() {
    loadingModal.style.display = 'none'
  }

  const themeTune = document.querySelector('#theme')
  console.log(themeTune)
  const startGame = document.querySelector('#start')

  startGame.addEventListener('click', loadModal)
  playButton.addEventListener('click', moveEnemies)
  playButton.addEventListener('click', closeModal)






  // * Section 6: Sounds

  // const themeTune = document.querySelector('#theme')
  // console.log(themeTune)
  // const startGame = document.querySelector('#start')


  // Function to loop around the overall theme tune
  // function playTheme() {
  //   themeTune.src = '../Sounds/theme.wav'
  //   console.log('started playing theme')
  //   themeTune.play()
  //   themeTune.currentTime = 0
  //   int = setInterval(() => {
  //     if (themeTune.currentTime > 9) {
  //       themeTune.pause()
  //     } themeTune.play()
  //   }, 10000)
  //   console.log('stopped playing theme')
  // }


  //startGame.addEventListener('click', playTheme)

  const HyenaLaugh = document.querySelector('#hyena-laugh')

  function hyenaSound() {
    HyenaLaugh.src = '../Sounds/hyena-laugh.wav'
    console.log('hyena laugh')
    if (currentHyenaPositions.includes(simbaCurrentPosition)) {
      HyenaLaugh.play()
    }
  }

 







  createGrid()

}

window.addEventListener('DOMContentLoaded', init)