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
    }
})

const useProductStore = create(persist(productStore,{name: 'product-store'}))

export default useProductStore