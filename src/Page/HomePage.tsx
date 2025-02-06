import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Outlet} from "react-router";
import Header from "../Component/Header.tsx";
import Footer from "../Component/Footer.tsx";


export default function HomePage(){
  return (
   <>
       <Header/>
       <Outlet/>
       <Footer/>
   </>
  )
}
