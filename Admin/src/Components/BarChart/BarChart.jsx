import React, {useState, useEffect} from 'react'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './barChart.scss'
import axios from 'axios'

const Chart = () => {

const [info, setInfo] = useState(null)
const [jan, setJan] = useState(null)
const [feb, setFeb] = useState(null)
const [mar, setMar] = useState(null)
const [apr, setApr] = useState(null)
const [may, setMay] = useState(null)
const [jun, setJun] = useState(null)
const [jul, setJul] = useState(null)
const [aug, setAug] = useState(null)
const [sep, setSep] = useState(null)
const [oct, setOct] = useState(null)
const [nov, setNov] = useState(null)
const [dec, setDec] = useState(null)
useEffect(() => {
    const getData = async () => {
        const res = await axios.get('http://localhost:8800/api/users')
        setInfo(res.data)
    }
    getData()
}, [])  


useEffect(() => {
let countJan = [];
let countFeb = [];
let countMar = [];
let countApr = [];
let countMay = [];
let countJun = [];
let countJul = [];
let countAug = [];
let countSep = [];
let countOct = [];
let countNov = [];
let countDec = [];
info?.map((ele) => {
    if(ele.createdAt.split('-')[1].includes('01')){
        countJan.push(ele)
        setJan(countJan.length)
    }else if(ele.createdAt.split('-')[1].includes('02')){
        countFeb.push(ele)
        setFeb(countFeb.length)
    }else if(ele.createdAt.split('-')[1].includes('03')){
        countMar.push(ele)
        setMar(countMar.length)
    }else if(ele.createdAt.split('-')[1].includes('04')){
        countApr.push(ele)
        setApr(countApr.length)
    }else if(ele.createdAt.split('-')[1].includes('05')){
        countMay.push(ele)
        setMay(countMay.length)
    }else if(ele.createdAt.split('-')[1].includes('06')){
        countJun.push(ele)
        setJun(countJun.length)
    }else if(ele.createdAt.split('-')[1].includes('07')){
        countJul.push(ele)
        setJul(countJul.length)
    }else if(ele.createdAt.split('-')[1].includes('08')){
        countAug.push(ele)
        setAug(countAug.length)
    }else if(ele.createdAt.split('-')[1].includes('09')){
        countSep.push(ele)
        setSep(countSep.length)
    }else if(ele.createdAt.split('-')[1].includes('10')){
        countOct.push(ele)
        setOct(countOct.length)
    }else if(ele.createdAt.split('-')[1].includes('11')){
        countNov.push(ele)
        setNov(countNov.length)
    }else if(ele.createdAt.split('-')[1].includes('12')){
        countDec.push(ele)
        setDec(countDec.length)
    }
    
    
})
}, [info])

    const data = [
        {
          name: 'Jan',
          people: jan,
          investors: 0,
        },
        {
          name: 'Feb',
          people: feb,
          pv: 0,
        },
        {
          name: 'Mar',
          people: mar,
          pv: 0,
        },
        {
          name: 'Apr',
          people: apr,
          pv: 0,
        },
        {
          name: 'May',
          uv: may,
          pv: 0,
        },
        {
          name: 'Jun',
          uv: jun,
          pv: 0,
        },
        {
          name: 'Jul',
          uv: jul,
          pv: 0,
        },
        {
            name: 'Aug',
            people: aug,
            pv: 0,
          },
          {
            name: 'Sep',
            uv: sep,
            pv: 0,
          },
          {
            name: 'Oct',
            uv: oct,
            pv: 0,
          },
          {
            name: 'Nov',
            uv: nov,
            pv: 0,
          },
          {
            name: 'Dec',
            uv: dec,
            pv: 0,
          }
      ];
  return (
    <div className='barChart'>
        <h3 className='chartTitle'>Numbers Graph</h3>
        <ResponsiveContainer width={'100%'}  aspect={4 / 1} >
        <BarChart
          data={data}
        >
       <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="people" fill="#8884d8" />
          <Bar dataKey="Investors" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
      
    </div>
  )
}

export default Chart
