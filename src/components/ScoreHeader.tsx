import Button from './Button'

interface Props {
  counter: number
  hideRestart: string
  restartTimer: () => void
  score: number
  highscore: number
}

const ScoreHeader: React.FC<Props> = ({
  counter,
  restartTimer,
  hideRestart,
  score,
  highscore
}) => {
  return (
    <div className="grid grid-cols-3 border-solid border-2 mt-4 h-30 w-80">
      <div className="items-center flex flex-col justify-center">
        <div className="ml-2">REMAINING TIME (s)</div>
        <div className="text-lg text-orange-500">{counter}</div>
      </div>

      <div className="flex border-solid border-2 bg-cyan-950 items-center justify-center">
        <Button
          buttonType="reset"
          onClick={restartTimer}
          isHidden={hideRestart}
        >
          RESTART
        </Button>
      </div>
      <div className="grid grid-rows-2 border-solid border-2 flex-row">
        <div className="border-b-2 border-solid flex flex-row items-center">
          <p className="ml-2">HIGH SCORE</p>
          <p className="mr-2">{highscore}</p>
        </div>
        <div className="flex flex-row items-center">
          <p className="ml-2">SCORE</p>
          <p className="ml-4">{score}</p>
        </div>
      </div>
    </div>
  )
}

export default ScoreHeader
