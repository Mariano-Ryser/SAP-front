import NavRespon from "./NavRespon"
import Footer from "./Footer"

const Layout = ({ children}) => {
    return (
        <div className="content">
               <NavRespon />  
             { children }
             <Footer />  
        </div>
    );
}
export default Layout;