'use client'
import { Roboto_Mono } from "@next/font/google"
import { Chips } from "./chips";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const _h1 = Roboto_Mono({
    weight: "600",
    subsets: ["latin"]
})

export const Wheel = ({ playround, setPlayround, setRounds, setWallet, wallet }) => {
    const [isRolling, setIsRolling] = React.useState(false)
    const [bet, setBet] = React.useState('')
    const [rot, setRT] = useState(0)
    const [mt, setMt] = useState(null)

    const onChipClick = (chip: string) => {
        if (bet == chip) {
            setBet('')
            return;
        }

        setBet(chip)
    }

    const onSpin = () => {
        if (!bet) {
            toast("Escolha o quanto quer apostar!", { type: "error" })
            return;
        }
        if (Number(bet) > wallet.total) {
            toast("Não tem dinheiro suficiente para essa aposta!", { type: "warning" })
            return;
        }
        setIsRolling(true)
        setRT(0)
        let number = Math.ceil(Math.random() * 10000);
        number += Math.ceil(Math.random() * 10000);
        setRT(number)

        // Calculate the effective rotation angle within 360 degrees
        let rotation = number % 360;
        // Determine which element is at the top position based on the rotation angle
        let topElement;
        if (rotation > 0 && rotation <= 29) {
            topElement = 0;
        } else if (rotation > 30 && rotation <= 89) {
            topElement = 1
        } else if (rotation > 90 && rotation <= 149) {
            topElement = 0
        } else if (rotation > 150 && rotation <= 209) {
            topElement = 5
        }
        else if (rotation > 210 && rotation <= 269) {
            topElement = 0
        }
        else if (rotation > 270 && rotation <= 329) {
            topElement = 2
        }
        else if (rotation > 329) {
            topElement = 0
        }
        console.log(rotation, topElement)
        setMt(topElement)
    }

    const onEnd = () => {
        const multiplier = Number(mt);
        setRounds(prev => [...prev, { betted: bet, multiplier: mt }])
        setBet('')
        setMt(null)
        setIsRolling(false)

        if(multiplier !== 1) {
            if(multiplier == 0) {
                setWallet(({total}) => ({ total: total-Number(bet)}))
            } else {
                setWallet(({total}) => ({ total: total + Number(bet) * multiplier}))
            }
        }
    }

    return (<>
        <ToastContainer />
        <div className="flex items-center justify-between content-center flex-col pb-16">
            <div className="wheel-container" style={rot ? {
                transform: "rotate(" + rot + "deg)",
                transition: "3s all"
            } : {}} onTransitionEnd={onEnd}>
                <div className="one bg-red-500 text-white">0x</div>
                <div className="two bg-blue-500">2x</div>
                <div className="three bg-red-500">0x</div>
                <div className="four bg-purple-500">5x</div>
                <div className="five bg-red-500">0x</div>
                <div className="six bg-yellow-500">1x</div>
            </div>
            <div className="stoper"></div>
            <Chips onChipSelect={onChipClick} selectedChip={bet} />
            <div className="pt-8 flex-row">
                <input
                    id="email-address"
                    name="email"
                    type="number"
                    required
                    className="min-w-0 mx-4 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6 placeholder-gray-300 w-46 h-12"
                    placeholder="Quanta quer apostar?"
                    disabled={isRolling}
                    value={bet}
                    onChange={e => setBet(e.target.value)}

                />
                <button
                    onClick={onSpin}
                    type="submit"
                    style={_h1.style}
                    className="flex-none w-40 h-12 rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    disabled={isRolling}
                >
                    Apostar
                </button>
            </div>
        </div>
    </>
    )
}