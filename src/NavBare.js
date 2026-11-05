import './navbareStyle.css'
import Container from '@mui/material/Container';
import { useProduct } from './ProductsContext';
export default function NavBare() {
  const {category,setCategory} = useProduct()
  function handlCtegory(category) {
    setCategory(category)
  }
  return (
    <Container maxWidth="sm">
    <div id="container" >
      <div onClick={()=> {handlCtegory("all")}}>all</div>
      <div onClick={()=> {handlCtegory("jewelery")}}>jewelery</div>
      <div onClick={()=> {handlCtegory("electronics")}}>electronics</div>
      <div onClick={()=> {handlCtegory("men's clothing")}}>men's clothing</div>
      <div onClick={()=> {handlCtegory("women's clothing")}}>women's clothing</div>
    </div>
       <div id='logo'>
          Sto<span>R</span>e
        </div>
</Container>
  )
}