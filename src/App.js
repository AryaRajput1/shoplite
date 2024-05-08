import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Category from "./components/Category/Category";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import { AppContext } from "./utils/context";
import Newsletter from "./components/Footer/Newsletter/Newsletter";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/category/:id',
        element: <Category />
    },
    {
        path: '/product/:id',
        element: <SingleProduct />
    },

])
function App() {
    return <div>
        <AppContext>
        <Header />
        <RouterProvider router={router}>
        </RouterProvider>
        <Newsletter/>
        <Footer />
        </AppContext>
        </div>;
}

export default App;
