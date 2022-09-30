import React, { useState } from 'react'
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import 'react-circular-progressbar/dist/styles.css';
import data from '../data.json'

const Zone = () => {
    const [zonenum,setzonenum]=useState(data.zoneone)
    const [zonebtn,setzonebtn]=useState(true)
    let stockspercentage=zonenum.reduce((a,c)=>a+c.stock,0)
    let capacitypercentage=zonenum.reduce((a,c)=>a+c.capacity,0)
    let zonelength=zonenum.length
    let zonestockavg=stockspercentage/zonelength
  return (
    <div className="zone_page">
        <div className="zone_top">
                <button className={zonebtn ? 'active': ''} onClick={()=>{setzonenum(data.zoneone);setzonebtn(true)}}>zone 1</button>
                <button className={zonebtn?" ": " active"} onClick={()=>{setzonenum(data.zonetwo);setzonebtn(false)}}>zone 2</button>
        </div>
        <div className="zone_middle">
            <div className="zone_middle_item" >
            <CircularProgressbarWithChildren styles={buildStyles({pathColor:'orangered'})}  value={66}>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                      <h1>  <strong>{stockspercentage}</strong></h1>
                        <p>stocks</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <div className="zone_middle_item">
            <CircularProgressbarWithChildren styles={buildStyles({pathColor:'orange'})} value={75}>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                       <h1> <strong>{capacitypercentage}</strong></h1>
                        <p>capacity</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
            <div className="zone_middle_item">
            <CircularProgressbarWithChildren styles={buildStyles({pathColor:'#3d4658'})} value={85}>
                    <div style={{ fontSize: 12, marginTop: -5 }}>
                       <h1> <strong>{Math.floor(zonestockavg)}</strong></h1>
                        <p>average stock</p>
                    </div>
                </CircularProgressbarWithChildren>
            </div>
        </div>
       <div className="zone_graphs">
            <div className="one">
            <ResponsiveContainer width="100%" aspect={2} >
        <LineChart
          width={500}
          height={300}
          data={zonenum}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal='' vertical='' />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="stock" dot={{fill:"#fff"}} stroke="#62718cc3" strokeWidth='2px' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
            </div>
            <div className="one">
            <ResponsiveContainer width="95%" aspect={2}>
        <LineChart
          width={500}
          height={300}
          data={zonenum}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal='' vertical='' />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="capacity" dot={{fill:"#fff"}} stroke="#62718cc3" strokeWidth='2px' activeDot={{ r: 8 }} />
        </LineChart>
      </ResponsiveContainer>
            </div>
       </div>
    </div>
  )
}

export default Zone