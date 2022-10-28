import React, { useContext, useRef, useState } from 'react'
import { product } from '../App';
import { inventoryContext } from '../Context/inventoryContext';

export default function Searching() {
    const {setOpen, setId, searchedProduct, setProduct, data} = useContext(inventoryContext);
    const searchProduct = (name: string) => {
        
        setProduct(prev => {
            let products: product[] = []
            data.map(element => {
                if(element.name === name){
                    return products.push(element);
                }else{
                    return products
                }
            })
            return products;
        })
        
        
    }
    return (
        <div className='search-flex'>
            <div className="search-box">
                <input  placeholder={'please enter product name'} onChange={e => searchProduct(e.target.value)} type="text"/>
            </div>
            <button className="new-product" onClick={() => {setId(0); setOpen(true)}}>Add new Product</button>
        </div>
    )
}
