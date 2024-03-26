import NavRespon from "./NavRespon"
import Cabezera from "./Cabezera";
import Footer from "./Footer"
const Layout = ({ children}) => {
    return (

<>


              <NavRespon />   
        <div className="content">
                    <Cabezera />  
                    
             { children }
             
              {/* <Footer />       */}

             
        </div>
        <style jsx>{`
        
        .content {
		margin: auto;
		padding: 1rem;
		width: 800px;
		max-width: calc(100% - 0.4rem);
		color: white;
		font-size: 20px;
		line-height: 1.6;
        font-family:monospace;
	}
  `}</style>
    
</>
    );
}
export default Layout;