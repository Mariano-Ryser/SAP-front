import React from 'react';

const Footer = () => {
  return (
    <>
    <footer className="footer">
    </footer>

<style jsx>{`
.footer{
    position: absolute;
    bottom:0px;
    width: 100%;
    height: 10rem;
    border-top:solid 1px black ;
    transition: 0.2s;
}

@media (max-width: 600px) {

    .footer{
    width: 100%;
    height: 5rem;
}
}
`}</style>

</>
  );
};

export default Footer;