import "./cardStyle.css"
import { useProduct } from "./ProductsContext"
import CircularProgress from '@mui/material/CircularProgress';
export default function MyCard() {
    const {products,category} = useProduct()
     const filterProducts = products.filter((item) => {
        return item.category === category
    })
    const displayProducts = (category === "all" ? products : filterProducts)
    return (
       <div id="cardContainer">
        <div id="card" >
            <div id="text"> " Best quality <span>ever</span> " </div>
                <div id="image">
                    {displayProducts.length === 0 ? <CircularProgress aria-label="Loading…" /> : <img src={displayProducts[Math.floor(Math.random()*displayProducts.length)].image} />}
                </div>
            </div>
        </div>
    )
}