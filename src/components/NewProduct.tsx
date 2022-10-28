import React, { useContext, useState } from "react";
import { inventoryContext } from "../Context/inventoryContext";

const NewProduct = () => {
    const{isOpen, id, setOpen, data, setData} = useContext(inventoryContext);
    const[name, setName] = useState('')
    const[size, setSize] = useState('S')
    const[quantity, setQuantity] = useState(0)
    const[category, setCategory] = useState('')
    const[company, setComapny] = useState('');
    const addProduct = (e: React.MouseEvent) => {
        e.preventDefault();
        
        fetch('http://localhost:5000/products',{
            method: "POST",
            headers:{
                'content-type': "application/json"
            },
            body: JSON.stringify({
                name,
                id: data.length + 1,
                category,
                size,
                quantity,
                company,
                data: "0"
            })
        })
        .then(res => res.json())
        .then(Data => setData(prev => [...prev,Data])
        );
        
        setOpen(prev => false);
    }
    
    return(
        <>
            {isOpen && id === 0 ? 
            <div className={isOpen?"pop-up active add":"pop-up add"}>
            <div className="op"></div>
            <div className="form-box">
                <form action="">
                    <label htmlFor="">Name</label>
                    <input onChange={e => setName(e.target.value)} type="text"/>
                    <label htmlFor="">Size</label>
                    <select onChange={e => setSize(e.target.value)} name="" id="">
                        <option value="S">S</option>
                        <option value="M">M</option>
                        <option value="L">L</option>
                    </select>
                    <label htmlFor="">Quantity</label>
                    <input onChange={e => setQuantity(+e.target.value)} type="text"/>
                    <label htmlFor="">Category</label>
                    <input onChange={e => setCategory(e.target.value)} type="text"/>
                    <label htmlFor="">Comapny</label>
                    <input onChange={e => setComapny(e.target.value)} type="text"/>
                    <button type="submit" className='add' onClick={addProduct}>Add</button>
                    <button type="submit" onClick={e => {e.preventDefault();setOpen(prev => false)}}  className='cancel'>Cancel</button>
                </form>
            </div>
        </div>:null    
        }
        </>
    )
}
export default NewProduct;