import NavRespon from "./NavRespon"
import Nav from "./navbar"
import Cabezera from "./Cabezera";
import Footer from "./Footer"
import Aside from "./aside/Aside"
const Layout = ({ children}) => {
    return (
        <div className="content">

             <Nav/> 
              <NavRespon />   
             { children }

            {/* <Footer />*/}
            
        </div>
    );
}
export default Layout;