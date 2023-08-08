import React, {useState, useEffect} from 'react'
import './dataList.scss'
import SideBar from '../Components/SideBar/SideBar'
import List from '../Components/List/List'



const DataList = () => {

  return (
    <div className='dataList'>
        <SideBar />
        <List />
    </div>
  )
}

export default DataList

