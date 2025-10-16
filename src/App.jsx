import { BrowserRouter, Routes, Route } from "react-router-dom";
// Page page Imports
import Shop from "./Page/Shop";
<<<<<<< HEAD
import Login from "./Page/login";
=======
import Login from "./Page/AuthContainer";
>>>>>>> b71416d (Fix: corrected AuthContainer import case for Vercel)
import NotFoundPage from "./Page/NotFoundPage";
// Component Imports
import NavBar from "./Component/NavBar";
import Footer from "./Component/FooterSection";
import ProductDetails from "./Component/ProductDetails";
import MenPage from "./Component/Menpage";
import WomenPage from "./Component/WomenPage";
import KidsPage from "./Component/kidspage";
import { CartProvider } from "./Component/CartContext";
import CartPage from "./Component/CartPage"

// Layout wrapper (Navbar + Footer)
const Layout = ({ children }) => (
  <>
    <NavBar />
    {children}
    <Footer />
  </>
);

function App() {
  return (
    <CartProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Shop /></Layout>} />
        <Route path="/men" element={<Layout><MenPage /></Layout>} />
        <Route path="/women" element={<Layout><WomenPage /></Layout>} />
        <Route path="/kid" element={<Layout><KidsPage /></Layout>} /> 

        {/* ✅ Product Details Route (with Navbar + Footer) */}
        <Route path="/product/:id" element={<Layout><ProductDetails /></Layout>} />
        <Route path="/cart" element={<Layout><CartPage /></Layout>} />

        {/* Login Page (no layout) */}
        <Route path="/login" element={<Login />} />  

        {/* 404 Page */}
        <Route path="*" element={<NotFoundPage />} />  
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
