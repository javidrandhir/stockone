import { MdOutlineDataUsage,MdMap } from "react-icons/md";
import { FaSitemap } from "react-icons/fa";

import { GiConcentricCrescents } from "react-icons/gi";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import data from '../data.json'
import React, { useState } from 'react'

const Home = () => {

    const [zonearea,setzonearea]=useState(data.zoneone)
    const [active,setactive]=useState(true)
    let locations=zonearea.length
    let stocks=zonearea.reduce((a,c)=>a+c.stock,0)
    let capacity=zonearea.reduce((a,c)=>a+c.capacity,0)
  return (
    <div className="home">
          <div className="home_top">
                   <div className="top_item">
                        <div className="left">
                              <h1>2</h1>
                              <h3>zones</h3>
                              <p>zones have different locations</p>
                        </div>
                        <i><MdOutlineDataUsage /></i>
                   </div>
                   <div className="top_item">
                        <div className="left">
                              <h1>{locations}</h1>
                              <h3>locations</h3>
                              <p>locations have different areas</p>
                        </div>
                        <i><FaSitemap /></i>
                   </div>
                   <div className="top_item">
                        <div className="left">
                              <h1>{stocks}</h1>
                              <h3>in stock</h3>
                              <p>out of {capacity} capacity</p>
                        </div>
                        <i><MdMap /></i>
                   </div>
          </div>
          <div className="home_bottom">
            <div className="bottom_one">
   <div className="bottom_one_inner">
   <ResponsiveContainer width="80%" aspect={1.7}>
        <LineChart
          width={500}
          height={300}
          data={zonearea}
          margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            >
          <CartesianGrid horizontal='' vertical='' />
          <XAxis dataKey="name" />
          <YAxis dataKey="capacity" />
          <Tooltip contentStyle={{backgroundColor:"#62718cc3",color:"aliceblue",border:"none"}} itemStyle={{color:"#fff",fontSize:"11px"}} cursor={false} />
          <Line  dataKey="capacity" stroke="#62718cc3" strokeWidth='2px' activeDot={{ r: 8 }} />
          <Line  dataKey="stock" dot={{fill:"#62718cc3"}} stroke="#fff" />
        </LineChart>
      </ResponsiveContainer>
      <div className="bottom_two">
          <button onClick={()=>{setzonearea(data.zoneone);setactive(true)}}><GiConcentricCrescents  className={active ? "btn-icon active":" btn-icon"} /> zone 1</button>
          <button onClick={()=>{setzonearea(data.zonetwo);setactive(false)}}><GiConcentricCrescents  className={active ? "btn-icon":"btn-icon active"} /> zone 2 </button>
      </div>
   </div>
       <table className="bottom_table">
          <thead>
              <th>location</th>
              <th>stock</th>
              <th>capacity</th>
          </thead>
          <tbody>
              {zonearea.reverse().map(item=>{
                return <tr key={item.name}>
                    <td><h3>{item.name}</h3></td>
                   <td><p>{item.stock}</p></td>
                  <td><p>{item.capacity}</p></td>
                </tr>
              })}
          </tbody>
       </table>
    </div>
     
          </div>
    </div>
  )
}

export default Home