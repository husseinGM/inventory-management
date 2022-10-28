import React, {  useEffect, useState } from "react";
import { inventoryContext } from "./Context/inventoryContext";
import Navbar from "./layout/navbar";
import Popup from "./layout/popup";
import Search from "./layout/search";
import Table from "./layout/Table";

export type product = {
  category: string;
  company: string;
  id: number;
  data: string;
  name: string;
  quantity: number;
  size: string;
};


function App() {
  const [data, setData] = useState<product[]>([]);
  const [isDelete, setIsDelete] = useState<boolean>(false);
  const [searchedProduct, setProduct] = useState<product[]>([]);
  const [id, setId] = useState<number>(0);
  const [isOpen, setOpen] = useState<boolean>(false)
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  
  function User(name:string, password: string): void{

    if(localStorage.getItem('username') === null && localStorage.getItem('password') === null){
      localStorage.setItem('username', name)
      localStorage.setItem('password', password)
    }
  }
  async function fetchProduct() {
    const res = await fetch("http://localhost:5000/products");
    const products = await res.json();
    setData(products);
  }
  useEffect(() => {
    fetchProduct();
    
  }, []);
  
  
  
  return (
    <inventoryContext.Provider value={{username, password,isDelete, setIsDelete,data, setData, id, setId, isOpen, setOpen, setProduct, setPassword,setUsername, searchedProduct, User}}>
      <div className="main">
        <Navbar />
        <Search />
        <Table />
        <Popup />
      </div>
    </inventoryContext.Provider>
  );
}

export default App;
