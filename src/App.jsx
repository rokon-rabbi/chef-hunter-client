import { Outlet } from "react-router-dom";
import Header from "./pages/Header/Header";
import Footer from "./pages/footer/Footer/Footer";

export default function App() {
  return (
    <> 
    <Header/>
   <div className='md:min-h-[calc(100vh-160px)]'>
   <Outlet />
 </div>
  <Footer/>
 </>
  )
}