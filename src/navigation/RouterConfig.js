import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from '../pages/About/AboutPage';
import HomePage from '../pages/Home/HomePage';
import BlogSinglePage from '../pages/Blog/BlogSinglePage';
import BlogPage from '../pages/Blog/BlogPage';
import CartPage from '../pages/Cart/CartPage';

function Routeing() {
  return (
    // Path Route Section
    <Router>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/about-page" exact element={<AboutPage/>}/>
        <Route path="/blog-page" exact element={<BlogPage/>}/>
        <Route path="/Blog-single-page" exact element={<BlogSinglePage/>}/>
        <Route path="/cart-page" exact element={<CartPage />} />
      </Routes>
    </Router>
  );
}

export default Routeing;
