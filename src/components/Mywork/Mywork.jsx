import React from 'react'
import './Mywork.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import mywork_data from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'
const Mywork = () => {
  return (
    <div className='Mywork'>
        <div className="Mywork-title">
            <h1>my latest work</h1>
            <img src={theme_pattern} alt="" />
        </div>
<div className="Mywork-container">
    {mywork_data.map((work,index)=>{
        return <img key={index} src={work.w_img} alt=""/>
})}
</div>
<div className="Mywork-showmore">
    <p>show more</p>
    <img src={arrow_icon} alt="" />
</div>
    </div>
  )
}

export default Mywork