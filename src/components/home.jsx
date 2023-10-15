import React from 'react'
import Models from './models'
import Shop from './shop'
import Intro from './intro'
import Running from './running'

const Home = () => {
  return (
    <>
      <div style={{
        backgroundImage:"url('https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697038275/creation%20ai/WhatsApp_Image_2023-10-11_at_8.36.18_PM_nfli7x.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',
        height:'650px',
        zIndex:'100',
        position:'relative'
        }}>
      </div>
        <Running></Running>
        <Intro></Intro>
        <Models></Models>
        <Shop></Shop>
    </>
  )
}

export default Home