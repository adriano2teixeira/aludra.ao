'use client'
import { useEffect, useState } from "react";
import Header from "../components/common/header";
import { onAuthStateChanged } from "firebase/auth";
import { redirect } from 'next/navigation'
import { useAuth } from "../hooks/useAuth";

export default function Page() {
   const { isLoading, usr } = useAuth()
   useEffect(() => {
        if(usr) redirect("/jogos/rouleta");
    },[usr])

    return <></>
}