import React, { useState } from 'react';
// import Link from 'next/link';
import Image from "next/image"
import Link from 'next/link';


//C:\Users\MR22\stock-app\frontend\public
const Footer = () => {

 
  return (

    <>
<footer className="footer">
     <div className="container">
      <div className="row">
        <div className="footer-col">
          <h4>Zap</h4>
          <ul>
            <li><Link href="/about">about me</Link></li>
            {/* <li><a href="#">our services</a></li>
            <li><a href="#">privacy policy</a></li>
            <li><a href="#">affiliate program</a></li> */}
          </ul>
        </div>
        <div className="footer-col">
          <h4>get help</h4>
          <ul>
            <li><Link href="#">FAQ</Link></li>
            <li><Link href="#">shipping</Link></li>
            <li><Link href="#">returns</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>online MARKET! </h4>
          <ul>
            <Link href="#"><li>t-shirts</li></Link>
            <li><Link href="#">caps</Link></li>
            <li><Link href="#">shoes</Link></li>
            <li><Link href="#">dress</Link></li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>follow me</h4>
          <div className="social-links">
            <Link href="https://github.com/Mariano-Ryser"><Image alt='Github' src={'/github.png'} height={50} width={50}></Image></Link>
            <Link href="https://www.instagram.com/mariano_220591/"><Image alt='Insta' src={'/insta.png'} height={50} width={50}></Image></Link>
            <Link href="https://www.linkedin.com/in/mariano-ryser-073731221/"><Image alt='Linkedin' src={'/linkedin.png'} height={50} width={50}></Image></Link>
          </div>
        </div>
      </div>
     </div>
  </footer>


   <style jsx>{`
    
   .container{
    font-family: monospace;
    max-width: 1170px;
    margin:auto;
}
.row{
  display: flex;
  flex-wrap: wrap;
}
ul{
  list-style: none;
}
.footer{
  box-shadow: #8b8b8b 10px 10px 10px 10px;
  background-color: #1d1e20;
    padding: 60px 0;
}
.footer-col{
   width: 25%;
   padding: 0 15px;
}
.footer-col h4{
  font-size: 18px;
  color: #ffffff;
  text-transform: capitalize;
  margin-bottom: 35px;
  font-weight: 500;
  position: relative;
}
.footer-col h4::before{
  content: '';
  position: absolute;
  left:0;
  bottom: -10px;
  background-color: #2ba50d;
  height: 2px;
  box-sizing: border-box;
  width: 50px;
}
.footer-col ul li:not(:last-child){
  margin-bottom: 10px;
}
.footer-col ul li a{
  font-size: 16px;
  text-transform: capitalize;
  color: #ffffff;
  text-decoration: none;
  font-weight: 300;
  color: #bbbbbb;
  display: block;
  transition: all 0.3s ease;
}
.footer-col ul li a:hover{
  color: #ffffff;
  padding-left: 8px;
  background-color: #2ba50d;
}
.footer-col .social-links a{
  display: inline-block;
  height: 40px;
  width: 40px;
  background-color: rgba(255,255,255,0.2);
  margin:0 10px 10px 0;
  text-align: center;
  line-height: 40px;
  border-radius: 50%;
  color: #ffffff;
  transition: all 0.5s ease;
  transform: scale(1);
}
.footer-col .social-links a:hover{
  transform: scale(2);
}

/*responsive*/
@media(max-width: 767px){
  .footer-col{
    width: 50%;
    margin-bottom: 30px;
}
}
@media(max-width: 574px){
  .footer-col{
    width: 100%;
}
}
  `}</style>

   </>
  )
}

export default Footer