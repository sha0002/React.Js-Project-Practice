import { createContext, useContext, useEffect, useState } from "react";
import { products } from "../products";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../FireBase/firebase";

export const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const name = "shashank"

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [search, setSearch] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)
    const [cartCount, setCartCount] = useState(0)

    const navigate = useNavigate()


    useEffect(() => {
        setCartCount(cart.length)
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    // Add to Cart System Start

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

    const totalPrice = cart.reduce((total, item) => total + item.price * item.qty, 0)
    // Add to Cart System End

    // Search System Start

    const filterSearch = products.filter((item) => {
        const keyword = search.toLowerCase().trim() || ""
        return (
            item.name.toLowerCase().includes(keyword)
        )
    })
    // Search System End


    // Register System Start

    const handleRegister = async (e) => {
        e.preventDefault()
        try {
            const userCredentail = await createUserWithEmailAndPassword(auth, email, password)

            const user = userCredentail.user

            if (user) {
                console.log(user)
                setEmail('')
                setPassword('')
                navigate('/login')
                // navigate('/')

            }

        } catch (error) {
            console.log(error.message)
            console.log(error.code)
        }
    }

    // Register System End

    // login System Start

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            const existedUser = await signInWithEmailAndPassword(auth, email, password)

            if (existedUser) {
                console.log(existedUser)
                setEmail('')
                setPassword('')
                navigate('/')
            }

        } catch (error) {
            console.log(error.message)
            console.log(error.code)
        }

    }
    // login System End


    // logout System Start

    // const [user, setUser] = useState(null)

    useEffect(() => {
        const userExisted = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            // console.log(user)
            if (userExisted) {
                console.log("Logged In: ", currentUser)

            } else {
                console.log("Logged Out")
            }
        })

        return () => userExisted()
    }, [])

    const handleLogout = async () => {
        try {
            await auth.signOut()
            console.log("logout successfully...")
            navigate('/login');

        } catch (error) {
            console.log(error.message)
        }
    }

    // const handleLogout = async () => {
    //     try {
    //         const user = auth.currentUser;

    //         if (user) {
    //             console.log("Logout user:", user);
    //         }

    //         await signOut(auth);

    //         navigate('/login');

    //     } catch (error) {
    //         console.log(error.message);
    //         console.log(error.code);
    //     }
    // };

    // logout System End




    return (
        <CartContext.Provider value={{ name, addtoCart, cart, deleteCart, search, setSearch, filterSearch, handleRegister, setEmail, setPassword, email, password, handleLogin, handleLogout, user, navigate, cartCount, totalPrice }}  >
            {children}
        </CartContext.Provider>
    )
}