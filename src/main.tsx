import {createBrowserRouter, RouterProvider} from "react-router";
import RootPage from "./Page/RootPage.tsx";
import NotFound from "./Page/NotFound.tsx";
import {createRoot} from "react-dom/client";
import CartPage from "./Page/CartPage.tsx";
import PokeListPage from "./Page/PokeListPage.tsx";
import PokeDetailsPage from "./Page/PokeDetailsPage.tsx";
import {Provider} from "@/components/ui/provider.tsx";
import HomePage from "@/Page/HomePage.tsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <NotFound/>,
        children: [
            {
                path: '/',
                element: <HomePage/>
            },
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
    <Provider>
        <RouterProvider router={router} />
    </Provider>
);