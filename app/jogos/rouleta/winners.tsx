import { Roboto_Mono } from "@next/font/google"
import { onAuthStateChanged, signOut } from "firebase/auth"
import { auth } from "../../../firebase/auth/signIn"
import { useState } from "react"
import { useAuth } from "../../../hooks/useAuth"

const nameFont = Roboto_Mono({
    weight: "500",
    subsets: ["latin"]
})

const emailFont = Roboto_Mono({
    weight: "400",
    subsets: ["latin"]
})

export const LastWinners = () => {
    const { usr: user, isLoading } = useAuth()
   
    const onEnSession = () => signOut(auth)

    return (
        <div>
            {user && <div className="flex flex-row items-center justify-between">
                <img src={user?.photoURL} className="rounded-full w-10 h-10" />
                <div className="ml-4">
                    <h3 className="text-white text-md leading-4" style={nameFont.style}>{user.displayName}</h3>
                    <h4 className="text-gray-300 text-sm leading-7" style={emailFont.style}>{user.email}</h4>
                </div>
            </div>}
                <button className="border-0 bg-none ml-14 text-purple-500 text-sm" onClick={onEnSession}>Sair</button>
        </div>
    )
}