// import React from 'react'

import axios from "axios"
import { create } from "zustand"
import { persist } from "zustand/middleware"

const productStore = (set) => ({
    products: [],
    actionGetData: async() => {
        try {
            const resp = await axios.get("https://dummyjson.com/products")
            // console.log(resp.data.products)
            set({ products: resp.data.products })
        } catch (error) {
            console.log(error)
        }
    },
    cart: [],
    actionAddToCart: (product) => {
        // console.log(product)
        set((state)=> ({cart: [...state.cart, product]}))
    },
    actionClear: () => {
        set({cart: []})
    },
    actionRemoveProduct: (id)=> {
        set((state)=> ({cart: state.cart.filter(item => item.id !== id)}))
    }
})

const persistStore = {
    name: 'product-store',
    partialize: (state) => ({
        cart: state.cart,
    })
}

// const useProductStore = create(persist(productStore,{name: 'product-store'}))
const useProductStore = create(persist(productStore,persistStore))

export default useProductStore