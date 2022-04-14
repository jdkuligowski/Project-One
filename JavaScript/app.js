function init() {

  // * Section 1: Create a grid and add the game characters to this * //
  // Grid Container
  const grid = document.querySelector('.grid')
  console.log(grid)

  // Grid Creation
  const width = 12
  const height = 8
  const cellCount = width * height
  const cells = []

  // Function to build the grid
  function createGrid() {
    for (let i = 0; i < cellCount; i++) {
      const cell = document.createElement('div')
      grid.appendChild(cell)
      cells.push(cell)
    }
    // addSand()
    waterRow1(); waterRow2(); waterRow3()
    addHyena()
    addScar()
    addWildebeest()
    addZazu()
    addElephant()
    startRocks()
    addSimba(simbaStartPosition)
    addTimon(timonStartPosition)
    addPumbaa(pumbaaStartPosition)
    collisions()
  }

  // * Section 2: Add in characters that will be used to move around the board * //
  // Add simba 
  const simbaClass = 'simba'
  console.log(simbaClass)
  const simbaStartPosition = 93
  let simbaCurrentPosition = simbaStartPosition
  const simbaImage = document.createElement('img')
  simbaImage.src = '../Images/simba-2.png'

  function addSimba(position) {
    cells[position].classList.add(simbaClass)
    cells[position].appendChild(simbaImage)
  }

  // Add timon 
  const timonClass = 'timon'
  const timonStartPosition = 89
  let timonCurrentPosition = timonStartPosition
  // we need to add the image as an element so that it sits on top of other background images
  const timonImage = document.createElement('img')
  timonImage.src = '../Images/timon-3.png'

  function addTimon(position) {
    cells[position].classList.add(timonClass) // adds a class so the image can be edited in css
    cells[position].appendChild(timonImage) // adds the image as an element so that the image sits on top of other background images
  }

  // Add Pumbaa 
  const pumbaaClass = 'pumbaa'
  const pumbaaStartPosition = 86
  let pumbaaCurrentPosition = pumbaaStartPosition
  const pumbaImage = document.createElement('img')
  pumbaImage.src = '../Images/pumba.png'

  function addPumbaa(position) {
    cells[position].classList.add(pumbaaClass)
    cells[position].appendChild(pumbaImage)
  }

  // Add Zazu
  const zazuClass = 'zazu'
  const zazuPositions = [0, 2, 5, 6,9,11,25, 28, 31, 34, 60, 63, 66, 69]

  function addZazu() {
    for (let i = 0; i < zazuPositions.length; i++) {
      cells[zazuPositions[i]].classList.add(zazuClass)
    }
  }

  // Add rocks
  const rockClass = 'rock'
  const rockPositions = [87, 92]

  function startRocks() {
    for (let i = 0; i < 2; i++) {
      cells[rockPositions[i]].classList.add(rockClass)
    }
  }

  // Add sand to the finish area
  // const sandClass = 'finish'

  // function addSand() {
  //   for (let i = 0; i < width; i++) {
  //     cells[i].classList.add(sandClass)
  //   }
  // }

  // * Section 3: Add in obstacles that will cause player to lose a life * //
  // Add Water
  const waterClass = 'water'

  function waterRow1() {
    for (let i = 0; i < width; i++) {
      cells[i].classList.add(waterClass)
    }
  }

  function waterRow2() {
    for (let i = width * 2; i < (width * 3); i++) {
      cells[i].classList.add(waterClass)
    }
  }

  function waterRow3() {
    for (let i = width * 5; i < (width * 6); i++) {
      cells[i].classList.add(waterClass)
    }
  }

  // Add Hyenas and move them around
  const hyenaClass = 'hyena'
  const startingHyenas = [36, 39, 42, 45]
  let currentHyenaPositions = startingHyenas
  let updatedHyena = currentHyenaPositions
  let hyenaTimer

  function addHyena() {
    for (let i = 0; i < 4; i++) {
      cells[currentHyenaPositions[i]].classList.add(hyenaClass)
    }
  }

  function moveHyena() {
    collisions()
    hyenaTimer = setInterval(() => {
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
    }, 900)
  }

  // Add Scar and move him around
  const scarClass = 'scar'
  const scarStarting = [23, 20, 17, 14]
  let currentScarPosition = scarStarting
  let updatedScar = currentScarPosition
  let scarTimer
  function addScar() {
    for (let i = 0; i < 4; i++) {
      cells[currentScarPosition[i]].classList.add(scarClass)
    }
  }

  function moveScar() {
    collisions()
    scarTimer = setInterval(() => {
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
    }, 900)
  }

  // Add Wildebeests and allow them to move around
  const wildeClass = 'wildebeest'
  const wildeStarting = [83, 81, 79, 77, 75, 73]
  let wildeCurrentPosition = wildeStarting
  let updatedWilde = wildeCurrentPosition
  let wildeTimer

  // Function to add a wildebeest to the board
  function addWildebeest() {
    for (let i = 0; i < 6; i++) {
      cells[wildeCurrentPosition[i]].classList.add(wildeClass)
    }
  }

  // Function that will move the wildebeest around
  function moveWildebeest() {
    collisions()
    wildeTimer = setInterval(() => {
      if (updatedWilde[5] === 72) {
        for (let i = 0; i < 6; i++) {
          cells[updatedWilde[i]].classList.remove(wildeClass)
        }
        updatedWilde = wildeStarting
        for (let i = 0; i < 6; i++) {
          cells[updatedWilde[i]].classList.add(wildeClass)
        }
      } else if (updatedWilde[5] > 72) {
        for (let i = 0; i < 6; i++) {
          cells[updatedWilde[i]].classList.remove(wildeClass)
        }
        updatedWilde = updatedWilde.map((val) => val - 1)
        for (let i = 0; i < 6; i++) {
          cells[updatedWilde[i]].classList.add(wildeClass)
        }
      }
    }, 700)
  }

  // Add Elephants and allow them to move around
  const elephantClass = 'elephant'
  const elephantStarting = [59, 56, 53, 50]
  let elephantCurrentPosition = elephantStarting
  let updatedElephant = elephantCurrentPosition
  let elephantTimer

  // Function to add array of elephants to the board
  function addElephant() {
    for (let i = 0; i < 4; i++) {
      cells[elephantStarting[i]].classList.add(elephantClass)
    }
  }

  // Function that will move the elephants around
  function moveElephant() {
    collisions()
    elephantTimer = setInterval(() => {
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
    }, 900)
  }

  // Function to call to move all of the enemies around the board
  function moveEnemies() {
    moveElephant()
    moveHyena()
    moveScar()
    moveWildebeest()
  }

  // Function to call to stop enemies moving around when the game pauses or stops
  function stopEnemies() {
    clearInterval(wildeTimer)
    clearInterval(elephantTimer)
    clearInterval(hyenaTimer)
    clearInterval(scarTimer)
  }

  // Function to remove simba from his position - used when moving around
  function removeSimba(position) {
    cells[position].classList.remove(simbaClass)
  }
  // Function to remove Timon from his position - used when moving around
  function removeTimon(position) {
    cells[position].classList.remove(timonClass)
  }
  // Function to remove Pumbaa from his position - used when moving around
  function removePumbaa(position) {
    cells[position].classList.remove(pumbaaClass)
  }

  // * Section 4: Functions that dictate what happens when collisions occur
  //  Lives lost, different modals appear, music stops

  let collisionTimer //defining the interval variable

  // Function that determines what happens when collisions happen
  function collisions() {
    collisionTimer = setInterval(() => {
      const obstacleArray = [1,3,4,7,8,10,24, 26, 27, 29, 30, 32, 33, 35, 61,
        62, 64, 65, 67, 68, 70, 71].concat(updatedWilde).
        concat(updatedScar).concat(updatedElephant).concat(updatedHyena)
      //First conditional statement determines which character is being used
      if (livesVal === 0) {
        closeSimbaModal()
        closeTimonModal()
        closePumbaaModal()
        gameOver()
        resetScores()
        stopEnemies()
        stopTheme()
        resetPositions()
        gameOverSound()
      } else if (obstacleArray.includes(simbaCurrentPosition) && livesVal > 0) {
        openSimbaModal()
        removeSimba(simbaCurrentPosition)
        simbaCurrentPosition = simbaStartPosition
        addSimba(simbaCurrentPosition)
        livesVal = livesVal - 1
        livesBox.innerText = livesVal
        modalLives = livesVal
        livesSpan.innerText = modalLives
        stopEnemies()
      } else if (obstacleArray.includes(timonCurrentPosition)) {
        openTimonModal()
        removeTimon(timonCurrentPosition)
        timonCurrentPosition = timonStartPosition
        addTimon(timonCurrentPosition)
        livesVal = livesVal - 1
        livesBox.innerText = livesVal
        timLivesModal = livesBox.innerText
        timonSpan.innerText = timLivesModal
        stopEnemies()
      } else if (obstacleArray.includes(pumbaaCurrentPosition)) {
        openPumbaaModal()
        removePumbaa(pumbaaCurrentPosition)
        pumbaaCurrentPosition = pumbaaStartPosition
        addPumbaa(pumbaaCurrentPosition)
        livesVal = livesVal - 1
        livesBox.innerText = livesVal
        pumLivesModal = livesBox.innerText
        pumSpan.innerText = pumLivesModal
        stopEnemies()
      } else if (simbaCurrentPosition < width && pumbaaCurrentPosition < width && timonCurrentPosition < width) {
        winGame()
        resetScores()
        resetPositions()
        stopEnemies()
        stopTheme()
        playWinSong()
      }
    }, 100)
  }

  function stopKeys(event) {
    const key = event.keyCode
  }

  // * Section 5: Enable movement around the board, award points and lose lifes for collisions 
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
    //  First conditional statement determines which character is being used
    if (simbaCurrentPosition > width) {
      // Second conditional statement determins the movement of the current character around the grid
      if (key === left && simbaCurrentPosition % width !== 0 && simbaCurrentPosition !== rockPositions[1] + 1) {
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

      if (key === left && timonCurrentPosition % width !== 0 && timonCurrentPosition !== rockPositions[0] + 1) {
        timonCurrentPosition--

      } else if (key === right && timonCurrentPosition % width !== width - 1 && timonCurrentPosition !== rockPositions[1] - 1) {
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

      } else if (key === right && pumbaaCurrentPosition % width !== width - 1 && pumbaaCurrentPosition !== rockPositions[0] - 1) {
        pumbaaCurrentPosition++

      } else if (key === up && (pumbaaCurrentPosition >= width  1)) {
        pumbaaCurrentPosition -= width
        scoreVal = scoreVal + 10
        scoreBox.innerText = scoreVal

      } else if (key === down && (pumbaaCurrentPosition + width <= cellCount - 1)) {
        pumbaaCurrentPosition += width
      }
    } addSimba(simbaCurrentPosition)
    addTimon(timonCurrentPosition)
    addPumbaa(pumbaaCurrentPosition)
  }

  // `Function to reset the character positions when characters die
  function resetPositions() {
    removePumbaa(pumbaaCurrentPosition)
    removeSimba(simbaCurrentPosition)
    removeTimon(timonCurrentPosition)
    simbaCurrentPosition = simbaStartPosition
    timonCurrentPosition = timonStartPosition
    pumbaaCurrentPosition = pumbaaStartPosition
    addSimba(simbaStartPosition)
    addPumbaa(pumbaaStartPosition)
    addTimon(timonStartPosition)
  }

  // * Section 6 - enable scoring within the game and update this in different locations
  // Score Tracking
  const livesBox = document.querySelector('#lives-val')
  const scoreBox = document.querySelector('#score-val')
  const levelBox = document.querySelector('#level-val')
  const highBox = document.querySelector('#high-val')

  let livesVal = livesBox.innerText = 10
  let scoreVal = scoreBox.innerText = 0
  let levelVal = levelBox.innerText = 1
  let highVal = highBox.innerText = 0

  const livesSpan = document.querySelector('.livesModal')
  const timonSpan = document.querySelector('.timLivesModal')
  const pumSpan = document.querySelector('.pumLivesModal')
  let modalLives = livesSpan.innerText = livesVal
  let timLivesModal = timonSpan.innerText = livesVal
  let pumLivesModal = pumSpan.innerText = livesVal

  // Function to reset scores back to the values at the start of the game
  function resetScores() {
    livesBox.innerText = livesVal = 10
    scoreBox.innerText = scoreVal = 0
    livesSpan.innerText = modalLives = 10
  }


  // * Section 7: Modal pop ups for the start of the game and for loss of life
  // Start game modal
  const loadingModal = document.querySelector('.modal-load')
  console.log(loadingModal)
  const playButton = document.getElementById('play')
  const docBody = document.querySelector('body')

  function loadModal() {
    loadingModal.style.display = 'flex'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function closeModal() {
    loadingModal.style.display = 'none'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  // lose life modals
  const loseLifeSimba = document.querySelector('.simba-pop')
  const loseLifeTimon = document.querySelector('.timon-pop')
  const lostLifePumbaa = document.querySelector('.pumbaa-pop')
  const simbaAgainBtn = document.querySelector('#go-again')
  const timonAgainBtn = document.querySelector('#tim-go-again')
  const pumbaAgainBtn = document.querySelector('#pumba-go-again')

  function openSimbaModal() {
    loseLifeSimba.style.display = 'flex'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function closeSimbaModal() {
    loseLifeSimba.style.display = 'none'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function openTimonModal() {
    loseLifeTimon.style.display = 'flex'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function closeTimonModal() {
    loseLifeTimon.style.display = 'none'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function openPumbaaModal() {
    lostLifePumbaa.style.display = 'flex'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function closePumbaaModal() {
    lostLifePumbaa.style.display = 'none'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  // Modals for restarting game on loss or win
  const gameOverTag = document.querySelector('.game-over')
  const btnRestart = document.querySelector('#game-over-btn')
  const winGametag = document.querySelector('.winning-modal')
  const btnWin = document.querySelector('#new-game')

  function gameOver() {
    gameOverTag.style.display = 'flex'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function closeGameOver() {
    gameOverTag.style.display = 'none'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function winGame() {
    winGametag.style.display = 'flex'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  function closeWinGame() {
    winGametag.style.display = 'none'
    docBody.style.backgroundImage = 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(../Images/pride_rock_no_animals.jpeg)'
  }

  // * Section 8: Sounds

  const themeTune = document.querySelector('#theme')
  let themeInt
  const winSong = document.querySelector('#winner')
  const loseSong = document.querySelector('#not-fair')
  console.log(loseSong)

  // Function to loop around the overall theme tune
  function playTheme() {
    themeTune.src = '../Sounds/theme-tune.m4a'
    themeTune.currentTime = 5.3
    themeTune.play()
    themeInt = setInterval(() => {
      themeTune.currentTime = 5.3
      themeTune.play()
      if (themeTune.currentTime > 24.5) {
        themeTune.pause()
      }
    }, 19500)
  }

  // Function to pause the tune 
  function stopTheme() {
    themeTune.pause()
    clearInterval(themeInt)
  }

  // Function to play a song when the player wins
  function playWinSong() {
    winSong.src = '../Sounds/circle-of-life.m4a'
    console.log(winSong.src)
    winSong.currentTime = 0
    winSong.play()
  }

  // Pause win song
  function pauseWinSong() {
    winSong.pause()
  }

  // Game over sound
  function gameOverSound() {
    loseSong.src = '../Sounds/LifesNotFairIsIt.wav'
    console.log(loseSong.src)
    loseSong.currentTime = 0
    loseSong.play()
  }

  // * Section 9: Event Listeners //

  // Movement of characters around the board
  document.addEventListener('keydown', handleKeyDown)

  // Button to start or restart the game
  playButton.addEventListener('click', () => {
    moveEnemies()
    closeModal()
    playTheme()
    pauseWinSong()
  })

  // Button for simba specific modal
  simbaAgainBtn.addEventListener('click', () => {
    closeSimbaModal()
    moveEnemies()
  })

  // Button for Timon specific modal
  timonAgainBtn.addEventListener('click', () => {
    closeTimonModal()
    moveEnemies()
  })

  // Button for Pumba specific modal
  pumbaAgainBtn.addEventListener('click', () => {
    closePumbaaModal()
    moveEnemies()
  })

  // Button for game over modal
  btnRestart.addEventListener('click', () => {
    closeGameOver()
    playTheme()
    resetScores()
    moveEnemies()
    resetPositions()
  })

  // Button to start game again after win
  btnWin.addEventListener('click', () => {
    closeWinGame()
    pauseWinSong()
    playTheme()
    resetScores()
    moveEnemies()
  })

  // * Section 10: Elements that should be loaded on page load //

  createGrid() // Build the playing arena and add characters
  loadModal() // Load modal for the start of the game thatg overlays the playing arena

}



window.addEventListener('DOMContentLoaded', init)