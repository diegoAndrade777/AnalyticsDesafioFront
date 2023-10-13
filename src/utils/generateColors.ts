import { useState } from 'react'

export interface IColorsArray {
  id: number
  hex: string
}

const useGenerateRandomColor = () => {
  const [colors, setColors] = useState<IColorsArray[]>()

  const generateColor = () => {
    let colorsArray = []

    for (let i = 0; i < 3; i++) {
      colorsArray.push({ id: i, hex: Math.random().toString(16).substr(-6) })
    }

    setColors(colorsArray)
  }

  return { colors, generateColor }
}
export default useGenerateRandomColor
