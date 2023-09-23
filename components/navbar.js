

const Navbar = () => {
  

  return (
    <>

    <nav className="navbar">
      <div className="canvas">

      </div>
      <div className="canvas">

      </div>
      <div className="canvas">

      </div>
      <div className="canvas">

      </div>
      <div className="canvas">

      </div>

            
    </nav>


 <style jsx>{`
 .canvas{
  display: inline-block;
  height: 100%;
  width: 10%;
  background-color: rgb(231, 231, 231);
  transition: 0.1s;
 }
 .canvas:hover{
  background-color: rgb(215, 215, 215);
 }
    .navbar{
      z-index: 1;
      position: fixed;
      top: -1px;
        width: 100%; 
        height: 56px;
        background-color: rgb(241, 239, 237);
        border-bottom: solid rgb(221, 221, 221) 1px;
        box-shadow: rgba(83, 83, 83, 0.152) 0px 5px 15px;
        transition: 0.2s;
    }
  @media (max-width: 600px) {
    .navbar{
      height: 5.8125rem;
        width: 100%;
    }
   
  }
  `}</style>

</>
  );
};

export default Navbar;