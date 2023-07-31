import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/auth/signIn";
import { redirect } from "next/navigation";

export const useAuth = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [usr, setUsr] = useState<any>(null)
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,(user) => {
            if(!user) {
                setIsLoading(false);
                redirect("/auth/login");
                return;
            }
            setUsr(user);
            setIsLoading(false);
          });

          return () => unsubscribe()
    },[])

        if(!isLoading && !usr) redirect("/auth/login");

    return { isLoading, usr }
}