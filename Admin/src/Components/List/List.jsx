import React, {useState, useEffect} from 'react'
import axios from 'axios'
import './list.scss'



const List = () => {

const [data, setData] = useState(null)

  useEffect(() => {
    const getList = async () => {
        const res = await axios.get('http://localhost:8800/api/users')
        setData(res.data)
        console.log(data)
    }
    getList()
}, [])  

  return (
    <div className='list'>
      <div className="listWrapper">
          {data?.map((d) => (
          <div className='listElements'>
           <span className='listItem'>Name: {d.name}</span>
           <span className='listItem'>Email: {d.email}</span>
           <span className='listItem'>Phone: {d.phone}</span>
           <span className='listItem'>Time: {d.time}</span>
           <span>Contacted<input type="checkbox" name="" id=""/></span>
          </div>
          ))}
      </div>
    </div>
  )
}

export default List
