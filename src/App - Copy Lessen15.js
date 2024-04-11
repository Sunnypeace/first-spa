import { BrowserRouter,Routes, Route, Link } from 'react-router-dom';
import Checkout from './Checkout';
import ListProduct from './ListProduct';
import ProductDetail from './ProductDetail';
// import MyComponent from './MyComponent';



function App() {
  return (
    <BrowserRouter>
    <a href='/'> buy Cart(a tag)</a><br/>
    <Link to="/">First Page</Link><br/>
    <Link to="/checkout">Buy Cart</Link><br/>
    <Link to="/product_detail">Fruit Details</Link>
    <Routes>
      <Route path='/' element={<ListProduct/>}  />
      <Route path='/checkout' element={<Checkout/>}  />
      <Route path='/product_detail' element={<ProductDetail/>}  />
      <Route path='*' element={<p>Can not find page</p>}  /> {/* if page not found*/}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
