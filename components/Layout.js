import NavRespon from "./NavRespon"

const Layout = ({ children}) => {
    return (
        <div className="content">
               <NavRespon />  
             { children }
        </div>
    );
}
export default Layout;