// import React from 'react'

import { useState } from "react"

function RecapUseState() {
    const num = 6

    const [number, setNumber] = useState(4)
    const [number2, setNumber2] = useState({
        num: 5
    })
    console.log(number2)

    const hdlIncrease = () => {
        console.log('Easy, useState')
        setNumber((prev) => prev + 1)
    }

    const hdlDecrease = () => {
        setNumber((prev) => prev - 1)
    }

    const hdlIncrease2 = () => {
        setNumber2((prev) => (
            { num: prev.num + 1 }
        ))
    }

    const hdlIncreasex2 = () => {
        setNumber2((prev) => (
            { num: prev.num * 2 }
        ))
    }

    const hdlAddTitle = (title) => {
        setNumber2(
            { ...number2, title: title }
        )
    }

    const hdlDecrease2 = () => {
        setNumber2((prev) => (
            { num: prev.num - 1 }
        ))
    }

    const hdlDecrease22 = () => {
        setNumber2((prev) => (
            { num: prev.num / 2 }
        ))
    }

    const hdlMulti = () => {
        setNumber2((state) => ({ num: state.num * 2 }))
    }

    const hdlDivide = () => {
        setNumber2((state) => ({ num: state.num / 2 }))
    }

    return (
        <div>
            <h1 className="text-8xl">{number}</h1>
            <button
                onClick={hdlIncrease}
                className="bg-green-400 rounded-xl p-3 hover:duration-300 hover:scale-105 hover:bg-green-200"
            >
                Increase
            </button>
            <button
                onClick={hdlDecrease}
                className="bg-green-400 rounded-xl p-3 hover:duration-300 hover:scale-105 hover:bg-green-200"

            >Decrease
            </button>
            <hr />
            <p className="text-8xl">{number2.num}</p>
            <button onClick={hdlIncrease2} className="p-3 bg-slate-300 mr-2">+1</button>
            <button onClick={hdlIncreasex2} className="p-3 bg-slate-300 mr-2">* 2</button>
            <button className="p-3 bg-slate-300 mr-2" onClick={() => hdlAddTitle('Lorem')}>Title: Lorem, ipsum dolor.</button>
            <button onClick={hdlDecrease2} className="p-3 bg-slate-300 mr-2">-1</button>
            <button onClick={hdlDecrease22} className="p-3 bg-slate-300 mr-2">/2</button>
        </div>
    )
}

export default RecapUseState