// pages/neo.js

import Link from "next/link";
export async function getStaticProps() {
  const key = "8xLVJeFKs"
  const res = await fetch(
    `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-09-01&end_date=2024-09-02&api_key=${key}DEvavrzfS7ZqSdw0A17F3E7JhFnnHHc`
  );
  const data = await res.json();

  return {
    props: {
      neoData: data.near_earth_objects,
    },
  };
}

export default function Neo({ neoData }) {
  const dates = Object.keys(neoData);

  return (
    <div>
       <Link href="/proyectos/nasa/nasa"><li>/nasa</li></Link>
      <h1>Near Earth Objects from Sep 1, 2024 to sep 2, 2024</h1>
      {dates.map((date) => (
        <div key={date}>
          <h2>Date: {date}</h2>
          <ul>
            {neoData[date].map((object) => (
              <li key={object.id}>
                <p>Name: {object.name}</p>
                <p>Diameter (meters): {object.estimated_diameter.meters.estimated_diameter_max.toFixed(2)}</p>
                <p>Potentially Hazardous: {object.is_potentially_hazardous_asteroid ? 'Yes' : 'No'}</p>
                <p>Close Approach Date: {object.close_approach_data[0].close_approach_date_full}</p>
                <p>Miss Distance (km): {parseFloat(object.close_approach_data[0].miss_distance.kilometers).toFixed(2)} km</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}