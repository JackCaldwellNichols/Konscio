import React from 'react'
import './benefits.scss'
import SpaIcon from '@mui/icons-material/Spa';
import FavoriteIcon from '@mui/icons-material/Favorite';
import Diversity1Icon from '@mui/icons-material/Diversity1';

const Benefits = () => {
  return (
    <div className='benefits'>
        <div className='benefitsHeader'>
                <h1 className='benefitsTitle'>Los beneficios del Co-housing</h1>
        </div>
        <div className="wrapper">
      <div className="card">
        <div className="cardTop">
            <SpaIcon className='cardIcon'/>
        </div>
        <div className="cardInfo">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam reiciendis velit exercitationem, alias aliquid minus corrupti nisi molestiae dignissimos nesciunt, voluptates ab blanditiis beatae, veniam dolore quod quibusdam dolores!
        </div>
      </div>
      <div className="card">
            <div className="cardTop">
                <FavoriteIcon className='cardIcon'/>
            </div>
            <div className="cardInfo">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro odio maxime alias obcaecati vitae, quis deserunt eius saepe veritatis quo eos, dolor possimus inventore voluptas reprehenderit architecto sapiente ut similique!
            </div>
        </div>
        <div className="card">
            <div className="cardTop">
                <Diversity1Icon className='cardIcon'/>
            </div>
            <div className="cardInfo">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nam unde distinctio, natus facere ducimus veniam nemo. Nam dolorem officia repellendus nulla aliquam dignissimos earum? Minima ipsa obcaecati dignissimos culpa!
            </div>
        </div>
        </div>
    </div>
  )
}

export default Benefits
