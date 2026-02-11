import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [badgePulse, setBadgePulse] = useState(false)

    const addToCart = (product) => {
        setItems(prev => {
            const existing = prev.find(item => item.id === product.id)
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            }
            return [...prev, { ...product, quantity: 1 }]
        })
        setBadgePulse(true)
        setTimeout(() => setBadgePulse(false), 600)
        setIsOpen(true)
    }

    const removeFromCart = (id) => {
        setItems(prev => prev.filter(item => item.id !== id))
    }

    const updateQuantity = (id, delta) => {
        setItems(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) }
            }
            return item
        }))
    }

    const toggleCart = () => setIsOpen(!isOpen)
    const closeCart = () => setIsOpen(false)

    const checkCount = items.reduce((acc, item) => acc + item.quantity, 0)
    const subtotal = items.reduce((acc, item) => acc + (item.price * item.quantity), 0)

    return (
        <CartContext.Provider value={{
            items,
            addToCart,
            removeFromCart,
            updateQuantity,
            isOpen,
            toggleCart,
            closeCart,
            checkCount,
            subtotal,
            badgePulse
        }}>
            {children}
        </CartContext.Provider>
    )
}
