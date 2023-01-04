import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductProps } from "../components/Card";

interface OrderProps {
    id: string
    items: ProductProps
    subtotal: number
    delivery: number
    total: number
}

interface Order {
    order: OrderProps[]
}

interface CartContextProps {
    order: any
    setOrder: any
    orderFinaly: any
    setOrderFinaly: any
}

export const CartContext = createContext({} as CartContextProps)

interface CartContextProviderProps {
    children: ReactNode
}

export function CartContextProvider({ children }: CartContextProviderProps) {
    const [orderFinaly, setOrderFinaly] = useState({})

    const orderFromLocalStorage = localStorage.getItem('@coffee-delivery')

    const [order, setOrder] = useState<Order[]>([])

    useEffect(() => {
        const orderToLocalStorage = JSON.stringify(order)
        localStorage.setItem('@coffee-delivery', orderToLocalStorage)

    }, [order])

    useEffect(() => {
        setOrder(JSON.parse(orderFromLocalStorage))
    }, [])

    return (
        <CartContext.Provider value={{ order, setOrder, orderFinaly, setOrderFinaly }}>
            {children}
        </CartContext.Provider>
    )
}