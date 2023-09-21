

import Nav from "../components/navbar"
import NavBar from "../components/NavRespon"
import Footer from "../components/footer"

const Layout = ({ children}) => {
    return (
        <div className="content">
            <Nav/>
            <NavBar/>
             { children }
             
            {/* <Footer/> */}
        </div>
    );
}
export default Layout;