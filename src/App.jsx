import ProductList from "./Pages/ProductList"
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import styled from "styled-components";

const Container = styled.div`
font-family: cursive;
font-size: large;
font-style: normal;
text-align: center;
`

const App = () => {
  return (
    <Container>
        <Home/>
        Homepage ended here!
        <ProductList/>
        ProductList Would be Like this.
        <Product/>
        <Cart/>
        cart page ends here!
        <Register/>
        Register page ends here!
        <Login/>
        Thankyou!
    </Container>
  )
  };
  
  export default App;