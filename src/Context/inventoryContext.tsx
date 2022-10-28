import { createContext, SetStateAction } from "react";
import { product } from "../App";
export type inventoryContexts = {
    username: string
    setUsername: React.Dispatch<SetStateAction<string>>
    password: string,
    setPassword:  React.Dispatch<SetStateAction<string>>
    isDelete: boolean,
    setIsDelete: React.Dispatch<SetStateAction<boolean>>
    data: product[],
    setData: React.Dispatch<SetStateAction<product[]>>,
    id: number
    setId: React.Dispatch<SetStateAction<number>>
    searchedProduct: product[], 
    setProduct: React.Dispatch<SetStateAction<product[]>>
    isOpen: boolean
    setOpen: React.Dispatch<SetStateAction<boolean>>
    User: (name: string, password: string) => void
}
export const inventoryContext = createContext({} as inventoryContexts);

