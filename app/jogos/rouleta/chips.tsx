'use client'
import React from "react"


export const Chips = ({ onChipSelect, selectedChip }) => {
    return (
        <div className="">
            <ul>
                {[20,50,100,200].map(coin => (
                  <a onClick={_ => onChipSelect(coin)}key={coin}>
                    <li className={"board-chip"}>
                    <span key={"chip_10"}>
                      <div
                        className={`chip-${selectedChip == coin ? coin + "-placed" : coin} `}
                      >
                        {coin}
                      </div>
                    </span>
                  </li>
                  </a>
                ))}
            </ul>
        </div>
    )
}