import { createContext, useContext, useEffect, useState } from "react";

export const BioContext = createContext()

export const useAuth = () => useContext(BioContext)

export const BioProvider = ({ children }) => {

    const [counter, setCounter] = useState(0)

    useEffect(() => {
        const saved = localStorage.getItem("count")
        if (saved !== null) {
            setCounter(JSON.parse(saved))
        }
    }, [])


    const increment = () => {
        // setCounter(counter + 1)
        setCounter((prev) => {
            const newCount = prev + 1
            localStorage.setItem("count", JSON.stringify(newCount))
            return newCount
        })
    }
    // const increment = () => {
    //     setCounter(counter + 1)
    //     localStorage.setItem("count", JSON.stringify(counter))
    // }

    const decrement = () => {
        setCounter((prev) => {
            const newCount = prev - 1
            localStorage.setItem("count", JSON.stringify(newCount))
            return newCount
        })
    }
    // const decrement = () => {
    //     setCounter(counter - 1)
    //     localStorage.setItem("count", JSON.stringify(counter))
    // }

    const removeLocalStorage = () => {
        setCounter(0)
        localStorage.removeItem("count")
    }

    return (
        <BioContext.Provider value={{ counter, setCounter, increment, decrement, removeLocalStorage }}>
            {children}
        </BioContext.Provider>
    )
}








// import { createContext, useContext, useEffect, useState } from "react";

// export const BioContext = createContext();

// export const useAuth = () => useContext(BioContext);

// export const BioProvider = ({ children }) => {
//     const [counter, setCounter] = useState(0);

//     // Load saved counter when the provider mounts
//     useEffect(() => {
//         const saved = localStorage.getItem("count");

//         if (saved !== null) {
//             setCounter(JSON.parse(saved));
//         }
//     }, []);

//     const increment = () => {
//         setCounter((prev) => {
//             const newValue = prev + 1;
//             localStorage.setItem("count", JSON.stringify(newValue));
//             return newValue;
//         });
//     };

//     const decrement = () => {
//         setCounter((prev) => {
//             const newValue = prev - 1;
//             localStorage.setItem("count", JSON.stringify(newValue));
//             return newValue;
//         });
//     };

//     const removeLocalStorage = () => {
//         setCounter(0);
//         localStorage.removeItem("count");
//     };

//     return (
//         <BioContext.Provider
//             value={{
//                 counter,
//                 setCounter,
//                 increment,
//                 decrement,
//                 removeLocalStorage,
//             }}
//         >
//             {children}
//         </BioContext.Provider>
//     );
// };
