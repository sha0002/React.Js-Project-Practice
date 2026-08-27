import { createContext, useContext, useEffect, useState } from "react";

export const BioContext = createContext()

export const useAuth = () => useContext(BioContext)

export const BioProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const saved = localStorage.getItem("count")
        if (saved) {
            setCounter(JSON.parse(saved))
        }
    }, [])


    const increment = () => {
        setCounter(counter + 1)
        localStorage.setItem("count", JSON.stringify(counter))
    }

    const decrement = () => {
        setCounter(counter - 1)
        localStorage.setItem("count", JSON.stringify(counter))
    }

    const removeLocalStorage = () => {
        setCounter(0)
        localStorage.removeItem("count", JSON.stringify(counter))
    }

    return (
        <BioContext.Provider value={{ counter, setCounter, increment, decrement, removeLocalStorage }}>
            {children}
        </BioContext.Provider>
    )
}