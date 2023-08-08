import React from 'react'
import Widgets from '../Widgets/Widgets'
import './main.scss'
import Chart from '../BarChart/BarChart'

const Main = () => {
  return (
    <div className='main'>
        <Widgets />
        <Chart />
    </div>
  )
}

export default Main
