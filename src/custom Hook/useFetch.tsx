import { useEffect, useState } from "react"
type productData = {
    id: number,
    name: string,
    size: string,
    quantity: number,
    category: string,
    company: string
}

const useFetch = (url:string) => {
    let [data, setData] = useState<productData[]>([]);
    const[pending, setPending] = useState<boolean>(true)
    const[error, setError] = useState<boolean>(false)
    
    useEffect(() => {
        fetch(url)
        .then(res => res.json())
        .then(data => setData(data))
    },[url])
    return {data}
}
export default useFetch