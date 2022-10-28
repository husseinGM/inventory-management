import React, { MouseEvent, useContext, useEffect, useState } from "react"
import { product } from "../App";
import { inventoryContext } from "../Context/inventoryContext"

const UpdateProduct = () => {
    const{isOpen, setOpen, id, setData, setId} = useContext(inventoryContext);
    const[name, setName] = useState('')
    const[size, setSize] = useState("")
    const[quantity, setQuantity] = useState(0)
    const[category, setCategory] = useState('')
    const[company, setComapny] = useState('');
    const[pending, setPending] = useState(true);
    const handleUpdate = (e:MouseEvent) => {        
        e.preventDefault();

        fetch(`http://localhost:5000/products/${id}`,{
            method: "PUT",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                id: id,
                name,
                size,
                category,
                quantity,
                company,
                data: "0"
            })
        })
        .then(res => res.json())
        .then(data => setData(prev => {
            let product: product[] = [];
            prev.find(ele => {
                if(ele.id === data.id){
                    ele = {
                        id: id,
                        name,
                        size,
                        quantity,
                        category,
                        company,
                        data: "0"
                    };
                     product.push(ele)
                }else{
                     product.push(ele)
                }
            })
            console.log(product);
            return product
        }))
        
        setOpen(prev => false);
        setId(0)
    }

    //take current value from selected product
    useEffect(() => {
        if(id !== 0){
            fetch(`http://localhost:5000/products/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setPending(prev => false);
                setName(prev => data.name);
                setSize(prev =>data.size);
                setComapny(prev => data.company);
                setQuantity(prev => data.quantity);
                setCategory(prev => data.category)
        })
    }},[id])
    
   
    return(
        <>
            
                <div className={isOpen && id > 0 ? 'pop-up active update':'pop-up update'}>
                <div className="op"></div>
                <div className="form-box">
                    <form action="" >
                        {pending === false && 
                            <>
                                <label htmlFor="">Name</label>
                        <input defaultValue={name} onChange={(e) => setName(e.target.value)} type="text"/>
                        <label htmlFor="">Size</label>
                        <select defaultValue={size} onChange={e => setSize(e.target.value)} name="" id="">
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                        </select>
                        <label htmlFor="">Quantity</label>
                        <input defaultValue={quantity} onChange={(e) => setQuantity(+(e.target.value))} type="text"/>
                        <label htmlFor="">Category</label>
                        <input defaultValue={category} onChange={(e) => setCategory(e.target.value)} type="text"/>
                        <label htmlFor="">Comapny</label>
                        <input defaultValue={company} onChange={(e) => setComapny(e.target.value)} type="text"/>
                        <button type="submit" onClick={handleUpdate}  className='update'>Update</button>
                            </>
                        }
                        <button type="submit" onClick={e => {e.preventDefault();setOpen(prev => false)}}  className='cancel'>Cancel</button>
                    </form>
                </div>
            </div>
            
        </>
    )
}
export default UpdateProduct