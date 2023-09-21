

const Navbar = () => {
  

  return (
    <>

    <nav className="navbar">
        {/* <div className="burger">burger</div> */}
            
    </nav>


 <style jsx>{`
    .navbar{
      z-index: 1;
      position: fixed;
      top: -1px;
        width: 100%; 
        height: 56px;
        background-color: rgb(241, 239, 237);
        border-bottom: solid rgb(221, 221, 221) 1px;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        transition: 0.2s;
    }
  @media (max-width: 600px) {
    .navbar{
      height: 5.8125rem;
        width: 100%;
    }
    .burger{
        margin-right: 0.2rem;
    }
    
  }
  `}</style>

</>
  );
};

export default Navbar;