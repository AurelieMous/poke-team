import {Outlet} from "react-router";
import Header from "../Component/Header.tsx";
import Footer from "../Component/Footer.tsx";


export default function RootPage(){
  return (
   <>
       <Header/>
       <Outlet/>
       <Footer/>
   </>
  )
}
