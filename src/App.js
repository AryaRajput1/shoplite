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

const router = createBrowserRouter([
    {
        path: '/',
        element:<><Header />
        <Home />
        </> 
    },
    {
        path: '/category/:id',
        element:<><Header /> <Category /></>
    },
    {
        path: '/product/:id',
        element: <><Header /><SingleProduct /></>
    },
    {
        path: '/about',
        element: <><Header /><About /></>
    },

])
function App() {
    return <div>
        <AppContext>
        
        <RouterProvider router={router}>
        </RouterProvider>
        <Newsletter/>
        <Footer />
        </AppContext>
        </div>;
}

export default App;
