// import React from 'react'
import { ShoppingCart, Trash2 } from 'lucide-react';
import useProductStore from '../store/product-store';

function ProductCard(props) {

    const { id, title, description, thumbnail, category, tags, price } = props.product
    const { product } = props
    const actionAddToCart = useProductStore((state) => state.actionAddToCart)
    const actionRemoveProduct = useProductStore((state) => state.actionRemoveProduct)

    // console.log(props.product)

    return (
        <div key={id} className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={thumbnail}
                    alt={title} />
            </figure>
            <div className="card-body">
                <h2 className="card-title">
                    {title}
                    <div className="badge badge-secondary">{category}</div>
                </h2>
                <p className='text-2xl font-bold'>${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end mb-4">
                    {tags.map(el => 
                        <div key={el} className="badge badge-outline">{el}</div>
                    )}
                </div>
                <div className="card-actions justify-end">
                    <button 
                        onClick={()=> actionRemoveProduct(id)}
                        className='btn hover:bg-red-600 hover:text-white'>
                        <Trash2 />
                    </button>
                    <button 
                        onClick={()=>actionAddToCart(product)}
                        className="btn btn-primary">
                        <ShoppingCart />
                        Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductCard