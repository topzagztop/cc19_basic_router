// import React from 'react'

import { useEffect } from "react"
import useProductStore from "../store/product-store"
import ProductCard from "../components/ProductCard"

function Product() {
    const products = useProductStore((state)=> state.products)
    const actionGetData = useProductStore((state)=> state.actionGetData)

    useEffect(()=> {
        actionGetData()
    },[])

  return (
    <div>
        <h1 className="my-6 text-4xl font-bold text-center">Product</h1>
        <div className="flex flex-wrap gap-8 m-auto justify-around">
            {products?.map((product)=> {
                return <ProductCard key={product.id} product={product} />
            }
            )}
        </div>
    </div>
  )
}

export default Product