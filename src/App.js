import './App.css';
import NavBare from "./NavBare"
import MyCard from './card';
import { ProductsProvider } from './ProductsContext';
import MyProduct from './MyProduct';
// material ui 
import Container from '@mui/material/Container';
function App() {

  return (
    <ProductsProvider>
    <Container maxWidth="lg">
      <div className="App">
        <NavBare />
          <MyCard />
          <MyProduct />
      </div>
      </Container>
    </ProductsProvider>

  );
}

export default App;
