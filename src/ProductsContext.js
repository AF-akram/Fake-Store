import { useContext, useState,createContext,useEffect } from "react";
import axios from "axios"
const ProductsContext = createContext([]);
export function ProductsProvider({ children }) {
    const [products, setProducts] = useState([])
    const [category,setCategory] = useState("all")
    useEffect(() => {
        axios
  .get("https://fakestoreapi.com/products")
  .then((response) => {
    setProducts(response.data)
  })
    },[])
    return (
        <ProductsContext.Provider value={{products,setProducts,category,setCategory}}>
            {children}
        </ProductsContext.Provider>
    )
}
export const useProduct = () => {
    return useContext(ProductsContext)
}