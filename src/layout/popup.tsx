import { useContext } from "react"
import DeleteProduct from "../components/DeleteProduct"
import NewProduct from "../components/NewProduct"
import UpdateProduct from "../components/updateProduct"
import User from "../components/User"

const Popup = () => {
    return(
        <>
            <UpdateProduct />
            <NewProduct />
            <User />
            <DeleteProduct />
        </>
    )
}
export default Popup