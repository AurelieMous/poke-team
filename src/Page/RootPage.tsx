import {Outlet} from "react-router";
import Header from "../Component/Header.tsx";
import Footer from "../Component/Footer.tsx";
import {createStore} from "redux";

const store = createStore(rootReducer);

export default function RootPage(){

  return (
   <>
       <Header/>
       <Outlet/>
       <Footer/>
   </>
  )
}
