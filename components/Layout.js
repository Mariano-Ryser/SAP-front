import NavRespon from "./navigation/NavRespon"
import Cabezera from "./header/Cabezera"

const Layout = ({ children}) => {
    return (

<>

              <NavRespon />   
        <div className="content">    
                    <Cabezera />  
             { children }
        </div>
        <style jsx>{`
        
        .content {
		margin: auto;
		width: 900px;
		max-width: calc(100% - 0.4rem);
		padding: 0rem;
		color: white;
		font-size: 20px;
		line-height: 1.6;
	}
  `}</style>
    
</>
    );
}
export default Layout;