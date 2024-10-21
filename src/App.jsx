import { Routes, Route } from "react-router-dom";

import Path from "./utils/paths";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Home from "./components/ComingSoon/ComingSoon";
import NotFound from "./components/NotFound/NotFound";
import ComingSoon from "./components/ComingSoon/ComingSoon";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path={Path.Home} element={<ComingSoon />} />
        {/* <Route path={Path.Products} element={<Products />} />
        <Route path={`${Path.Items}/:id`} element={<ProductDetails />} />
        <Route path={Path.About} element={<About />} />
        <Route path={Path.Contacts} element={<Contact />} />
        <Route path={Path.ShoppingCart} element={<ShoppingCart />} />
        <Route path={Path.Checkout} element={<Checkout />} /> */}
        <Route path={Path.NotFound} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
