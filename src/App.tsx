import { useRef, useState } from 'react'
import Button from './components/Button'
import useGenerateRandomColor from './utils/generateColors'

import Header from './components/Header'
import AsideBar from './components/AsideBar'
import ScoreHeader from './components/ScoreHeader'

interface IGuessedColorsArray {
  id: number
  hex: string
  counter: number
  correct?: boolean
  correctHex: string
}

let guessedColorsArray: IGuessedColorsArray[] = []
let correctAswer = ''
let guessedAswer = ''

function App() {
  const [counter, setCounter] = useState(30)

  const [hideStart, setHideStart] = useState('')
  const [hideRestart, setHideRestart] = useState('')

  const [newIndex, setNewIndex] = useState(0)
  const [guessedColorArray, setGuessedColorArray] = useState<
    IGuessedColorsArray[]
  >([])
  const [disableButton, setDisableButton] = useState(false)

  const [score, setScore] = useState(0)
  const [highscore] = useState(localStorage.getItem('userPoints') || 0)

  const timerRef = useRef()

  const { colors, generateColor } = useGenerateRandomColor()

  const colorsArray = colors || undefined
  let shuffledArray = colorsArray || undefined

  const generateRandomIndex = () => {
    return setNewIndex(Math.floor(Math.random() * (3 - 0 + 1)) + 0)
  }

  const startTimer = () => {
    let sec = counter
    setHideStart('hidden')
    setDisableButton(false)
    setHideRestart('')

    correctAswer = ''
    guessedAswer = ''

    generateRandomIndex()

    //@ts-ignore
    timerRef.current = setInterval(() => {
      sec--
      setCounter(sec)

      if (sec < 0) {
        alert('Tempo esgotado')
        clearInterval(timerRef.current)
        setCounter(30)

        setHideStart('')
      }
    }, 1000)
  }

  const restartTimer = () => {
    clearInterval(timerRef.current)
    setCounter(30)

    setHideRestart('hidden')

    setHideStart('')
  }

  const setGuessedColor = (
    id: number,
    hex: string,
    counter: number,
    correct: boolean,
    correctHex: string
  ) => {
    let array = []
    array = guessedColorsArray

    correctAswer = correctHex
    guessedAswer = hex

    let isCorrect = false

    if (correctAswer === guessedAswer) {
      isCorrect = true
    }

    const points = isCorrect ? score + 1 : score

    setLocalStoragePoints(points)

    const newData = [
      ...array,
      { id, hex, counter, correct: isCorrect, correctHex }
    ]

    guessedColorsArray = newData

    clearInterval(timerRef.current)

    setGuessedColorArray(guessedColorsArray)

    setDisableButton(true)
  }

  const setLocalStoragePoints = (userPoints: any) => {
    localStorage.setItem('userPoints', userPoints)

    setScore(userPoints)
  }

  const resetAllData = () => {
    location.reload()
    localStorage.clear()
  }

  return (
    <>
      <Header />

      <div className="h-screen w-screen flex flex-row items-center">
        <AsideBar colorsArray={guessedColorArray} />

        <div className="flex-1 flex-col mb-32">
          <main className="p-6 gap-6 ">
            <div className="flex flex-col items-center gap-4">
              <div className="gap-4 flex-1">
                <span className="text-xl font-bold">Guess the Color</span>
              </div>

              <ScoreHeader
                counter={counter}
                restartTimer={restartTimer}
                hideRestart={hideRestart}
                score={score}
                highscore={Number(highscore)}
              />

              <div
                className={`flex items-center justify-center border-solid border-2 mt-4 h-80 w-80`}
                style={{
                  backgroundColor: shuffledArray
                    ? // @ts-ignore
                      `#${shuffledArray[newIndex]?.hex}`
                    : '#242424'
                }}
              >
                <Button
                  buttonType="start"
                  onClick={() => {
                    startTimer(), generateColor()
                  }}
                  isHidden={hideStart}
                >
                  START
                </Button>
              </div>

              <div className="grid grid-cols-3 border-solid border-2 w-80 items-center">
                {colorsArray?.map((item) => (
                  <button
                    key={item.id}
                    disabled={disableButton}
                    onClick={() =>
                      setGuessedColor(
                        item.id,
                        item.hex,
                        counter,
                        false,
                        // @ts-ignore
                        shuffledArray[newIndex]?.hex
                      )
                    }
                    className="flex items-center justify-center h-10 border-r-2 cursor-pointer"
                  >
                    <span className="text-sm font-bold">#{item.hex}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="absolute bottom-0 right-0 mb-4 mr-4">
              <Button buttonType="reset" onClick={resetAllData}>
                Reset All
              </Button>
            </div>
          </main>
        </div>
      </div>
    </>
  )
}

export default App
