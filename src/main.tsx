import {createBrowserRouter, RouterProvider} from "react-router";
import HomePage from "./Page/HomePage.tsx";
import NotFound from "./Page/NotFound.tsx";
import {createRoot} from "react-dom/client";
import CartPage from "./Page/CartPage.tsx";
import PokeListPage from "./Page/PokeListPage.tsx";
import PokeDetailsPage from "./Page/PokeDetailsPage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <HomePage />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/list',
                element: <PokeListPage/>
            },
            {
                path: '/details',
                element: <PokeDetailsPage/>
            },
            {
                path:'/cart',
                element: <CartPage/>
            }

        ]
    }
]);

const rootReactContainer = createRoot(
    document.getElementById("root") as HTMLDivElement,
);

rootReactContainer.render(
        <RouterProvider router={router} />
);