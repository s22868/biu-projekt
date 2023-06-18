'use client'
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useReducer,
} from 'react'
import { MenuItem } from '@/db'

export interface CartItem extends MenuItem {
  quantity: number
}

interface CartState {
  cartItems: CartItem[]
  deliveryOption: 'eat-in' | 'take-away' | 'delivery'
}

type CartAction =
  | { type: 'ADD_TO_CART'; payload: CartItem }
  | { type: 'REMOVE_FROM_CART'; payload: { index: number } }
  | { type: 'CLEAR_CART' }
  | {
      type: 'SET_DELIVERY_OPTION'
      payload: 'eat-in' | 'take-away' | 'delivery'
    }

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
          (item, index) => index !== action.payload.index
        ),
      }
    case 'CLEAR_CART':
      return { ...state, cartItems: [] }
    case 'SET_DELIVERY_OPTION':
      return { ...state, deliveryOption: action.payload }
    default:
      return state
  }
}

export const CartProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, {
    cartItems: [],
    deliveryOption: 'eat-in',
  })

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
