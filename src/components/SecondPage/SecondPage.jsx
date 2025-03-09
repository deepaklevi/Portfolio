import React from 'react'
import './SecondPage.css'
const SecondPage = () => {
  return (
    <div className='second_page'>
      <div className='second_pageContent'>
        <img className='myphoto2' src="/images/myphoto2.jpeg" alt="" />
        <div className='secondpage_Content1'>
            <h1>Introduction</h1>
            <p>About me</p>
            <ul >
                <li>Hi, I’m Deepak Kumar, a professional video editor with 
                  over three years of experience.
                     My journey in video editing has been fueled by a passion 
                     for storytelling and crafting visually compelling content
                      that resonates with audiences.</li>
                <li>
                Nitro Media: A marketing agency specializing 
                in Dubai-based clients, where I honed my skills 
                in creating impactful promotional content. 
                </li>
                <li>
                AI Wellness: A United States-based company, 
                where I contributed to engaging and high-quality 
                video content focused on health and wellness.
                </li>
            </ul>
        </div>
      </div>
    </div>
  )
}

export default SecondPage
