import NavRespon from "./NavRespon"
import Cabezera from "./Cabezera";
import Footer from "./Footer"

const Layout = ({ children}) => {
    return (
        <div className="content">
              <NavRespon />   
                   <Cabezera />  
             { children }
              {/* <Footer />     */}
        </div>
    );
}
export default Layout;