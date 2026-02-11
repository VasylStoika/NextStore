import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import CartDrawer from './components/CartDrawer'
import Checkout from './pages/Checkout'
import CustomCursor from './components/CustomCursor'

function App() {
    return (
        <>
            <CustomCursor />
            <CartDrawer />
            <Routes>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route path="shop" element={<Shop />} />
                    <Route path="product/:id" element={<ProductDetails />} />
                    <Route path="checkout" element={<Checkout />} />
                </Route>
            </Routes>
        </>
    )
}

export default App
