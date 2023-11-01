import React from 'react'
import { Row, Col, Container } from 'react-bootstrap' 
import {AiOutlinePhone, AiOutlineMail, AiOutlineYoutube, AiOutlineInstagram, AiOutlineFacebook, AiFillTwitterSquare} from 'react-icons/ai'
import {FaPinterestSquare, FaSearchLocation} from 'react-icons/fa'
import {GiRobotGolem} from 'react-icons/gi'

const Footer = () => {
  return (
    <>
        <div className='p-5' style={{backgroundColor:'black', color:'#fff', zIndex:'100',
        position:'relative'}}>
            <Container>
                <Row>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <h1 className='text-center'>OUR AI</h1>
                        <div className='pb-3'>
                        Creation AI: Your Creative Partner Online. Empowering Content Creators with AI-Powered Tools and Inspiration.
                        </div>
                        <div className='d-flex justify-content-evenly' style={{fontSize:'2rem'}}>
                            <AiOutlineInstagram/>
                            <AiOutlineFacebook/>
                            <AiFillTwitterSquare/>
                            <AiOutlineYoutube/>
                            <FaPinterestSquare/>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <h1 className='text-center'>CONTACT US</h1>
                        <div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <FaSearchLocation/>
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>
                                        AI-DS, Sri Sairam Institute of Technonlgy, west Tambaram, chennai-44.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <AiOutlineMail/>
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>roshithindia@gmail.com</li>
                                        <li>sit21ad029@sairamtap.edu.in</li>
                                    </ul>   
                                </div>
                            </div>
                            <div className='d-flex'>
                                <div style={{fontSize:'1.7rem'}}>
                                    <AiOutlinePhone />
                                </div>
                                <div>
                                    <ul style={{listStyle:'none'}}>
                                        <li>+91 99405 04856</li>
                                        <li>+91 88383 16164</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <div>
                            <h1 className='text-center'>Our services</h1>
                                <ul style={{listStyle:'none'}}>
                                    <li><GiRobotGolem/> Text-To-Audio</li>
                                    <li><GiRobotGolem/> Song-Generation</li>
                                    <li><GiRobotGolem/> Story Generation</li>
                                    <li><GiRobotGolem/> Text-To-Video</li>
                                    <li><GiRobotGolem/> Text-To-Image</li>
                                </ul>
                        </div>
                    </Col>
                    <Col className='mb-5' xs={12} sm={12} md={6} lg={3}>
                        <Row>
                            <h1 className='text-center'>GALLERY</h1>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696954778/creation%20ai/WhatsApp_Image_2023-10-10_at_7.59.25_PM_dxsre7.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696954777/creation%20ai/WhatsApp_Image_2023-10-10_at_8.05.15_PM_wm0gf0.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696954777/creation%20ai/WhatsApp_Image_2023-10-10_at_7.55.09_PM_btt0v1.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696954777/creation%20ai/WhatsApp_Image_2023-10-10_at_7.58.18_PM_rarnta.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696954775/creation%20ai/WhatsApp_Image_2023-10-10_at_8.06.04_PM_oit87m.jpg" alt="" />
                            </Col>
                            <Col className='p-1'>
                                <img style={{width:'100px', height:'100px', borderRadius:'10px', border:'4px solid grey'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1696954775/creation%20ai/WhatsApp_Image_2023-10-10_at_8.02.39_PM_hoscav.jpg" alt="" />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
        <div className='p-3 text-center' style={{backgroundColor:'grey', color:'#fff', zIndex:'100',
        position:'relative'}}>
            <p>Copyright @ 2023 <b>My Company</b> All Right Reserved.</p>
        </div>
    </>
  )
}

export default Footer