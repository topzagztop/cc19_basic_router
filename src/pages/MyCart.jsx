// import React from 'react'

import ProductCard from "../components/ProductCard"
import useProductStore from "../store/product-store"

function MyCart() {
    const cart = useProductStore((state)=> state.cart)
    const actionClear = useProductStore((state)=> state.actionClear)
    // console.log(cart)
  return (
    <div>
        <h1 className="text-4xl font-bold text-center my-6">My Cart</h1>
        <button onClick={actionClear}>Clear</button>
        <div className="flex flex-wrap gap-8 m-auto justify-around">
            {cart.map((product) => {
                return <ProductCard
                        key={product.id}
                        product={product}
                        />
            })}
        </div>
    </div>
  )
}

export default MyCart