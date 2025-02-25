import {Outlet} from "react-router";
import Header from "../Component/Header.tsx";
import Footer from "../Component/Footer.tsx";
import {store} from "@/redux/store.ts";
import { Provider } from "react-redux"


export default function RootPage(){

  return (
   <>
       <Provider store={store}>
           <Header/>
           <Outlet/>
           <Footer/>
       </Provider>

   </>
  )
}
