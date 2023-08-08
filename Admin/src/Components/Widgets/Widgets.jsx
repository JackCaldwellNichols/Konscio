import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import './widgets.scss'

const Widgets = () => {

const [total, setTotal] = useState(null)
const [dates, setDates] = useState(null)
const [lastWeek, setLastWeek] = useState(null)
const [month, setMonth] = useState(null)


useEffect(() => {
    const getTotal = async () => {
        const res = await axios.get('http://localhost:8800/api/users')
        setTotal(res.data.length)
        setDates(res.data)
    }
    getTotal()
}, [total])  


useEffect(() => {
    function getLastWeeksDate() {
        const now = new Date();
      
        return new Date(
          now.getFullYear(),
          now.getMonth(),
          now.getDate() - 7,
        );
      }
    setLastWeek(getLastWeeksDate().toISOString())
    
}, [])

let count = []

dates?.map((ele) => {
    if(ele.createdAt > lastWeek){
        count.push(ele)
    }
})



useEffect(() => {
  const thisMonth = new Date().toISOString().split('-')[1]
  setMonth(thisMonth)
  
}, [])

 let monthArray = []
   dates?.map((ele) => {
      if((ele.createdAt.split('-')[1])===month)
        monthArray.push(ele)
      })
    







  return (
    <div className='widgets'>
      <div className="widgetWrapper">
        <div className="card">
                <h1>Total People</h1>
                <h2>{total}</h2>
        </div>
        <div className="card">
            <h1>This week</h1>
            <h2>{count.length} new</h2>
        </div>
        <div className="card">
          <h1>This month</h1>
          <h2>{monthArray.length}</h2>
        </div>
      </div>
    </div>
  )
}

export default Widgets
