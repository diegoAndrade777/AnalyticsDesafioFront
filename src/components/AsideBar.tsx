import { CheckCircle, XCircle, Laugh, Frown } from 'lucide-react'

interface IGuessedColorsArray {
  id: number
  hex: string
  counter: number
  correct?: boolean
  correctHex: string
}

interface Props {
  colorsArray: IGuessedColorsArray[]
}

const AsideBar: React.FC<Props> = ({ colorsArray }) => {
  return (
    <>
      <div className="flex flex-col w-90 h-screen items-center mt-2">
        <aside className="border-r h-screen overflow-y-auto">
          <span className="text-xl ml-14 font-bold">Current/Latest game</span>

          <div className="grid grid-cols-2 border-solid border-2 mt-2">
            <div className="flex w-40 h-10 border-r-2 items-center justify-center">
              <span className="text-xl font-bold">Guessed Color</span>
            </div>
            <div className="flex w-40 h-10 items-center justify-center">
              <span className="text-xl font-bold">Correct Color</span>
            </div>
          </div>

          {colorsArray?.map((item) => (
            <div key={item.hex} className="border-solid border-2 items-center">
              {item.correct ? (
                <>
                  <div
                    key={item.hex}
                    className="grid grid-cols-2 border-solid border-2"
                  >
                    <div
                      className="flex w-50 h-10 border-r-2 items-center justify-center"
                      style={{ backgroundColor: `#${item.hex}` }}
                    >
                      #{item.hex}
                    </div>
                    <div className="flex w-55 h-10 items-center flex-row justify-center">
                      <span className="flex text-sm gap-1 font-bold flex-row justify-center items-center">
                        <CheckCircle color="#13be35" size={18} />
                        {item.counter}s
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div
                    key={item.hex}
                    className="grid grid-cols-3 border-solid border-2 items-center"
                  >
                    <div
                      className={`flex w-22 gap-1 h-10 border-r-2 items-center justify-center`}
                      style={{ backgroundColor: `#${item.hex}` }}
                    >
                      <Frown color="#be1357" />#{item.hex}
                    </div>
                    <div
                      className={`flex gap-1 w-22 h-10 border-r-2 items-center justify-center`}
                      style={{ backgroundColor: `#${item.correctHex}` }}
                    >
                      <Laugh />#{item.correctHex}
                    </div>
                    <div className="flex w-22 h-10 items-center flex-row justify-center">
                      <span className="flex text-sm gap-1 font-bold flex-row justify-center items-center">
                        <XCircle color="#be1357" size={18} />
                        {item.counter}s
                      </span>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </aside>
      </div>
    </>
  )
}

export default AsideBar
