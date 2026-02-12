import { useState } from 'react'

type PricesProps = {
  textSize?: string
  selectedColor?: string // bg + text + border for selected
  unselectedColor?: string // bg + text + border for unselected
}

export default function Prices({
  textSize = 'text-lg',
  selectedColor = 'bg-[#416CAE] text-white border-[#416CAE] text-white',
  unselectedColor = 'bg-white text-[#326F33] border-[#416CAE] text-black',
}: PricesProps) {
  const [selected, setSelected] = useState<number | null>(null)

  const prices = ['₱', '₱₱', '₱₱₱']
  return (
    <>
      {prices.map((price, index) => {
        const isSelected = selected === index

        return (
          <button
            key={index}
            onClick={() => setSelected(index)}
            className={`font-bold rounded-xl px-5 py-0.5 border-2 transition border-black ${textSize} ${
              isSelected ? selectedColor : unselectedColor
            }`}
          >
            {price}
          </button>
        )
      })}
    </>
  )
}
