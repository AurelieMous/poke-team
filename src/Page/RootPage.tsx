import {Outlet} from "react-router";
import Header from "../Component/Header.tsx";
import Footer from "../Component/Footer.tsx";
import {store} from "@/redux/store.ts";
import { Provider } from "react-redux"
import {ChakraProvider, defaultSystem} from "@chakra-ui/react";
import {ColorModeProvider} from "@/components/ui/color-mode.tsx";


export default function RootPage(){

  return (
   <>
       <ChakraProvider value={defaultSystem}>
           <ColorModeProvider>
               <Provider store={store}>
                   <Header/>
                   <Outlet/>
                   <Footer/>
               </Provider>
           </ColorModeProvider>
       </ChakraProvider>
   </>
  )
}
