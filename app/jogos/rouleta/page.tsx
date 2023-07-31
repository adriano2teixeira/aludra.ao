'use client'
import * as React from "react"
import { Roboto_Mono } from "@next/font/google"
import { Wheel } from "./wheel"
import { UserWallet } from "./user-wallet"
import { LastWinners } from "./winners"
import { useAuth } from "../../../hooks/useAuth"
import { redirect } from "next/navigation"



const _h1 = Roboto_Mono({
    weight: "600",
    subsets: ["latin"]
})

const RouleteGamePlayground = ()=> {
    const auth = useAuth()
    const [playround, setPlayround] = React.useState({
        selectedChip: null, 
        toBet: null
    })

    const [rounds, setRounds] = React.useState<{ betted: number, multiplier: number }[]>([]);
    const [wallet, setWallet] = React.useState({ total: 5000 })
    return (
        <div className="p-20 flex flex-1 w-screen h-screen flex-row justify-between roulette-container">
            <div>
                <UserWallet rounds={rounds} wallet={wallet}  />
            </div>
        {/** rouleta */}
        <Wheel playround={playround} wallet={wallet} setWallet={setWallet} setPlayround={setPlayround} setRounds={setRounds} />
        <LastWinners />
        </div>
    )
}

export default RouleteGamePlayground