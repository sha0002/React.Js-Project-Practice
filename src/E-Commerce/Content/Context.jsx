import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../products";

export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const name = "shashank"

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    // const [cart, setCart] = useState([])
    const [search, setSearch] = useState('')

    // useEffect(() => {
    //     const saved = localStorage.getItem('cart')
    //     if (saved) {
    //         setCart(JSON.parse(saved))
    //     }
    //     // return saved ? JSON.parse(saved) : []
    // }, [cart])

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    const addtoCart = (product) => {
        // console.log(product)
        const existed = cart.find(item => item.id === product.id)
        if (existed) {
            const updateCart = cart.map(item =>
                item.id === product.id ? { ...item, qty: item.qty + 1 } : item
            )
            setCart(updateCart)
            localStorage.setItem("cart", JSON.stringify(cart))
        } else {
            setCart([...cart, { ...product, qty: 1 }])
        }
    }

    const deleteCart = (productId) => {
        const existed = cart.find(item => item.id === productId)
        if (existed.qty === 1) {
            setCart(cart.filter(item => item.id !== productId))
            localStorage.removeItem("cart", JSON.stringify(cart))
        } else {
            const updateCart = cart.map(item =>
                item.id === productId ? { ...item, qty: item.qty - 1 } : item
            )
            setCart(updateCart)
            localStorage.setItem("cart", JSON.stringify(cart))
        }
    }

    // const searchbar = (e) => {
    //     setSearch(e.target.value)
    //     console.log(search)
    // }

    const filterSearch = products.filter((item) => {
        const keyword = search.toLowerCase().trim() || ""
        return (
            item.name.toLowerCase().includes(keyword)
        )
    })




    return (
        <CartContext.Provider value={{ name, addtoCart, cart, deleteCart, search, setSearch, filterSearch }}  >
            {children}
        </CartContext.Provider>
    )
}