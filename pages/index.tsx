import Link from 'next/link'
import Pantallazo from '../components/pantalla/Pantallazo'
import D1 from '../components/diario/d1'
import D2 from '../components/diario/d2'
import D3 from '../components/diario/d3'
import D4 from '../components/diario/d4'
import D5 from '../components/diario/d5'
import Page from '../components/formCreateAccount'
import { useEffect,useRef } from 'react'
import {ColorType, createChart} from "lightweight-charts"



// import Image from 'next/image' 
// import Link from 'next/link';




export default function Home() {
  // somewhere in your code
  const chartContainerRef = useRef();

useEffect( () => {

  const initialData = [
    { time: '2018-12-22', value: 32.51 },
    { time: '2018-12-23', value: 31.11 },
    { time: '2018-12-24', value: 27.02 },
    { time: '2018-12-25', value: 27.32 },
    { time: '2018-12-26', value: 25.17 },
    { time: '2018-12-27', value: 28.89 },
    { time: '2018-12-28', value: 25.46 },
    { time: '2018-12-29', value: 23.92 },
    { time: '2018-12-30', value: 22.68 },
    { time: '2018-12-31', value: 22.67 },
  ];


const chart = createChart(chartContainerRef.current,{
  layout:{
    background:{ type:ColorType.Solid, color:"white"},
  },
  
});

const newSeries = chart.addAreaSeries({
  lineColor: "#2962FF",
  topColor: "#2962FF",
  bottomColor: "rgba(41,98,255,0.27)",
});

newSeries.setData(initialData);




},[])

  return (
    <>
  <div className = "boxData"ref={chartContainerRef}></div>
  <Page/>
  {/* <Pantallazo/> */}

  <style jsx>{`
  .boxData{
    padding-top: 10rem;
    border:solid red 1px;
    margin: auto;
    height: 20rem;
    width: 40rem;

  }
  
      
@media (max-width: 600px) {
  .boxData{
    border:solid red 1px;
    height: 10rem;
    width:100%;

  }
                 
}
       
         `}</style>
    </>
  )
}
