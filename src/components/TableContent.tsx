import { useContext} from 'react'
import { inventoryContext } from '../Context/inventoryContext'
//import Context from '../App'


export default function Tablecontent() {
    const {data, setData,setIsDelete, setId, setOpen, searchedProduct} = useContext(inventoryContext)
    const deleteProduct = (index: number) => {
        setIsDelete(prev => true);
        setId(index+1)
    }
    const update = (id:number) => {
        setId(prev => id);
        setOpen(prev => true)
    }
    
    return (
        <>
            {searchedProduct.length !== 0 && 
                searchedProduct.map((product, index) => {
                    return(
                        <tr key={product.id} className="content">
                            <td>{product.name}</td>
                            <td>{product.size}</td>
                            <td>{product.quantity}</td>
                            <td>{product.category}</td>
                            <td>{product.company}</td>
                            <td><button onClick={e => update(product.id)} className="btn update">Update</button></td>
                            <td><button onClick={(e) => deleteProduct(index)} className="btn delete">Delete</button></td>
                        </tr>
                    )
                })
            }
            {localStorage.getItem('password') !== null && searchedProduct.length === 0 && data.map((product, index) => {
                return(
                    <tr key={product.id} className="content">
                        <td>{product.name}</td>
                        <td>{product.size}</td>
                        <td>{product.quantity}</td>
                        <td>{product.category}</td>
                        <td>{product.company}</td>
                        <td><button onClick={e => update(product.id)} className="btn update">Update</button></td>
                        <td><button onClick={(e) => deleteProduct(index)} className="btn delete">Delete</button></td>
                    </tr>
                )
            })}
        </>
    )
}
