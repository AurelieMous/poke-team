import {Outlet} from "react-router";
import Header from "../Component/Header.tsx";
import {store} from "@/redux/store.ts";
import { Provider } from "react-redux"
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";


export default function RootPage(){

  return (
   <>
       <ChakraProvider value={defaultSystem}>
                   <Provider store={store}>
                       <Header/>
                       <Outlet/>
                   </Provider>
       </ChakraProvider>
   </>
  )
}
