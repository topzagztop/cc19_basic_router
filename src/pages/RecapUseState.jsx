// import React from 'react'

import { useState } from "react"

function RecapUseState() {
    const num = 6

    const [number, setNumber] = useState(4)

    console.log(number)

    const hdlIncrease = () => {
        console.log('Easy, useState')
    }

  return (
    <div>
        <h1 className="text-8xl">{number}</h1>
        <button
            onClick={hdlIncrease}
            className="bg-green-400 rounded-xl p-3 hover:duration-300 hover:scale-105 hover:bg-green-200"
        >Increase
        </button>
    </div>
  )
}

export default RecapUseState