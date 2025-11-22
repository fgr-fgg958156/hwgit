import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from '../templates/MainLayout';
import routerPaths from "./routerPaths.js";
import Catalog from "../pages/Catalog.jsx";
import ViewItem from "../pages/ViewItem.jsx";
import CartList from "../pages/Cart.jsx";
import OrderForm from "../pages/OrderForm.jsx";

const AppRouter = () => {
    return (
        <Router>
            <MainLayout>
                <Routes>
                    <Route path="/" element={<Catalog />} />
                    <Route path={routerPaths.items} element={<CartList />} />
                    <Route path={routerPaths.viewItem + '/:id'} element={<ViewItem />} />
                    <Route path={routerPaths.order} element={<OrderForm />} />
                </Routes>
            </MainLayout>
        </Router>
    );
};

export default AppRouter;
