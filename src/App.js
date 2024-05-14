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
import About from "./components/About/About";
import Success from "./components/Success/Success";
import Subscribe from "./components/Subscribe/Subscribe";

const router = createBrowserRouter([
    {
        path: '/',
        element:<><Header />
        <Home />
        <Newsletter/>
        </> 
    },
    {
        path: '/category/:id',
        element:<><Header /> <Category /><Newsletter/></>
    },
    {
        path: '/product/:id',
        element: <><Header /><SingleProduct /><Newsletter/></>
    },
    {
        path: '/about',
        element: <><Header /><About /><Newsletter/></>
    },
    {
        path: '/success',
        element: <><Header /><Success /><Newsletter/></>
    },
    {
        path: '/subscribe',
        element: <><Header /><Subscribe /><Newsletter/></>
    },

])
function App() {
    return <div>
        <AppContext>
        
        <RouterProvider router={router}>
        </RouterProvider>
        <Footer />
        </AppContext>
        </div>;
}

export default App;
