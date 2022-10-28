import React, { useContext, useEffect, useState } from 'react'
import { product } from '../App'
import { inventoryContext } from '../Context/inventoryContext'

export default function DeleteProduct() {
    const [product, setProduct] = useState({} as product)
    const {isDelete,setData, data, setIsDelete, id} = useContext(inventoryContext)
    const DeleteProduct = () => {
        setData(prev => data.filter(ele => ele.id !== product.id));
        setIsDelete(prev => false);

        //if you need to delete item from json file make code down below uncomment
        /* fetch(`http://localhost:5000/products/${id}`,{
            method: "DELETE"
        }) */
    }
    useEffect(() => {
        if(id !== 0){
            fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
        }
    },[isDelete])
    return (
        <>
          <div className={isDelete ? 'pop-up active update':'pop-up update'}>
            <div className="op"></div>
            <div className="form-box">
                <div className="deleted-product-details">
                <h3>Do you need to delete this product?</h3>
                <p>Name: <span className="details">{product.name}</span></p>
                <p>Category: <span className="details">{product.category}</span></p>
                <p>Size: <span className="details">{product.size}</span></p>
                <p>Quantity: <span className="details">{product.quantity}</span></p>
                <p>Comapny: <span>{product.company}</span></p>
                <button type="button" onClick={e => DeleteProduct()}  className='delete'>Accept</button>
                <button type="button" onClick={e => {e.preventDefault();setIsDelete(prev => false)}}  className='cancel'>Cancel</button>
                </div>
            </div>
            </div> 
        </>
    )
}
