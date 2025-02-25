import { createBrowserRouter, RouterProvider } from "react-router";
import RootPage from "./Page/RootPage.tsx";
import NotFound from "./Page/NotFound.tsx";
import { createRoot } from "react-dom/client";
import TeamPage from "./Page/TeamPage.tsx";
import PokeListPage from "./Page/PokeListPage.tsx";
import HomePage from "@/Page/HomePage.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { store } from "./redux/store.ts"

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootPage />,
        errorElement: <NotFound />,
        children: [
            { path: '/', element: <HomePage /> },
            { path: '/list', element: <PokeListPage /> },
            { path: '/team', element: <TeamPage /> }
        ]
    }
]);

const rootReactContainer = createRoot(
    document.getElementById("root") as HTMLDivElement
);

rootReactContainer.render(
    <Provider store={store}>
        <ChakraProvider>
            <RouterProvider router={router} />
        </ChakraProvider>
    </Provider>
);
