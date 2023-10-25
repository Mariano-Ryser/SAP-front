import NavRespon from "./NavRespon"
import Cabezera from "./Cabezera";
import Footer from "./Footer"
import Aside from "./aside/Aside"
const Layout = ({ children}) => {
    return (
        <div className="content">
            {/* <Aside/> */}
              <NavRespon />   
                   <Cabezera />  
             { children }
             
               {/* <Footer />       */}
        </div>
    );
}
export default Layout;