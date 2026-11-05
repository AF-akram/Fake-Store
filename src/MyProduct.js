import { useProduct } from "./ProductsContext"
import "./MyProduct.css"
import Grid from '@mui/material/Grid';
import { useState } from "react";
export default function MyProduct() {
    const { products, setProducts, category } = useProduct()
    function handleUpdateCount(product) {
        const updatedProducts = products.map((item) => {
            if (product.id === item.id) {
                return {...item,rating:{...item.rating,count:item.rating.count -1}}
            } 
            else {
                return item
            }
        })
        setProducts(updatedProducts)
    }
    const filterProducts = products.filter((item) => {
        return item.category === category
    })
    const displayProducts = (category === "all" ? products : filterProducts)
    const product = displayProducts.map((product) => {
        return (
            <Grid size={3} key={product.id}>
                <div id="productContainer" style={{
                    background: "beige",
                    padding: "10px",
                    border: "2px solid black",
                    minHeight:"300px"
                }}>
                    {/* title */}
                    <div style={{
                        width: "100%",
                        fontFamily: "rubik",
                        fontWeight:"100",
                        border: "1px solid black",
                        margin:"10px 0"
                    }}>{product.title}</div>
                    {/* end title */}
                    {/* info */}
                    <div style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                        alignItems:"center"
                    }}>
                        {/* img and count */}
                        <div style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems:"center"
                        }}>
                            {/* img */}
                            <div style={{
                                padding: "5px",
                                border: "1px dashed black",
                                borderRadius: "10px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems:"center"
                            }}>
                                <img style={{
                                    transform: "none",
                                    width: "100px",
                                    height: "100px",
                                    objectFit:"contain"
                                }} src={product.image} alt={product.id} />
                            </div>
                            {/* count */}
                            <div style={{
                                border: "1px dashed black",
                                padding: "10px",
                                marginTop: "20px",
                                fontFamily: "arial",
                                fontWeight: "bold",
                                fontStyle: "italic",
                                background: "red",
                                borderRadius:"10px"
                                
                            }} >
                                count : {product.rating.count}
                            </div>
                        </div>
                        {/* end img and count */}
                        {/* desc and price */}
                        <div>
                            {/* price */}
                            <div>{product.price}$</div>
                        </div>
                        {/* end desc and price */}
                       
                    </div>
                    <div >
                        <button style={{
                        margin: "20px auto",
                        padding: "15px",
                        background: "green",
                        color: "white",
                        fontFamily: "rubik",
                        border: "2px solid black",
                            borderRadius: "20px",
                        transition:"all 0.5s"
                        }}
                            onClick={() => {
                                handleUpdateCount(product)
                            }}
                     >buy</button>
                        
                    </div>
                    {/* end info */}
                </div>
            </Grid>
       )
    })
    return (
         <Grid container spacing={2}>
            {product}
         </Grid>
    )
    // const product = 
    
}