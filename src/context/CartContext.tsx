"use client"
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react'
import { MenuItem } from '@/db'

interface CartItem extends MenuItem {
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: CartItem }
  | { type: 'CLEAR_CART' }

interface CartContextType {
  cartState: CartState
  cartDispatch: React.Dispatch<CartAction>
}

export const CartContext = createContext<CartContextType | undefined>(undefined)

export function useCart() {
  return useContext(CartContext)
}

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cartItems: [...state.cartItems, action.payload] }
    case 'REMOVE_FROM_CART':
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item) => item.name !== action.payload.name
        ),
      }
    case 'CLEAR_CART':
      return { ...state, cartItems: [] }
    default:
      return state
  }
}

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { cartItems: [] })

  const cartContextValue: CartContextType = {
    cartState,
    cartDispatch,
  }

  return (
    <CartContext.Provider value={cartContextValue}>
      {children}
    </CartContext.Provider>
  )
}
