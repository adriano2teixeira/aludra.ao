import { Roboto_Mono } from "@next/font/google"
import { FC } from "react"

const _h1 = Roboto_Mono({
    weight: "600",
    subsets: ["latin"]
})

const _p = Roboto_Mono({
  weight: "400",
  subsets: ["latin"]
})

const formatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'AOA',

  // These options are needed to round to whole numbers if that's what you want.
  //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
  //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
});


export const UserWallet: FC<{ rounds: { betted: number, multiplier: number }[] , wallet: { total: number }}> = ({ rounds = [], wallet }) => {
  const getRes = (mutiplier, bet) => {
    switch(mutiplier) {
      case 0: return <p className="text-gray-100 my-2 text-sm" style={_p.style}><span className="text-red-500">-{formatter.format(bet)}</span> ({formatter.format(bet)} 0x)</p>;
      case 1: return <p className="text-gray-100 my-2 text-sm" style={_p.style}><span className="text-gray-100">~{formatter.format(bet)}</span> ({formatter.format(bet)} 1x)</p>;
      default: return <p className="text-gray-100 my-2 text-sm" style={_p.style}><span className="text-green-300">+{formatter.format(bet*mutiplier)}</span> ({formatter.format(bet)} {mutiplier}x)</p>;
    }
    
  }
    return (
        <div>
        <div className="flex flex-row justify-between">
            <h3 className={"text-2xl font-bold text-white"} style={{..._h1.style }}>Total : <span className="text-yellow-700">{formatter.format(wallet.total)}</span></h3>
        </div>
        <div className="flex flex-row my-4">
        <button
              type="submit"
              style={_h1.style}
              className="flex-none rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-slate-950 shadow-sm hover:bg-grey-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Retirar dinheiro
            </button>
            <button
              type="submit"
              style={_h1.style}
              className="flex-none rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ml-4"
            >
              Depositar
            </button>
        </div>
        {rounds.map((round,i) => getRes(round.multiplier, round.betted))}
    </div>
    )
}