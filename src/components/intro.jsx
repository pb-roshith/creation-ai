import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './intro-pyramid.css'
import './intro-robot.css'
import './intro-fire.css'
import './intro-cube.css'
import './intro-robot2.css'

const Intro = () => {
  return (
    <>
        <div className='pt-3' style={{zIndex:'100',
        position:'relative', color:'#fff'}}>
            <div style={{zIndex:'100',
        position:'relative'}}>
            <h1 className='text-center'>Our AI Provides</h1>
            <p className='lead text-center'>An website for content creators. we have Variety of AI models to boost the performance of content creators.</p>
            
            </div>
            <Container>
                <Row>
                    <Col className='mt-5 mb-5' xs={12} sm={12} md={6} lg={6}>
                        <div className="pyramid ">
                            <div className="glow"></div>
                            <div>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </div>
                        </div>
                    </Col>
                    <Col className='lead mt-5 mb-5' xs={12} sm={12} md={6} lg={6} style={{border:'1px solid red', borderRadius:'25px', padding:'15px'}}>
                    Provide AI-driven tools that help content creators generate ideas for blog posts, videos, podcasts, or social media content based on trends and audience interests. Offer training resources and customer support for content creators to learn how to effectively use the AI tools on your platform.
                    </Col>
                </Row>

                <Row>
                    <Col className='lead mt-5 mb-5' xs={12} sm={12} md={6} lg={6}  style={{border:'1px solid red', borderRadius:'25px', padding:'15px'}}>
                    Provide insights into various monetization strategies, such as affiliate marketing, advertising, sponsored content, or merchandise sales, based on a creator's niche and audience.
                    </Col>
                    <Col className='mt-5 mb-5' xs={12} sm={12} md={6} lg={6}>
                        <div className="robott">
                            <div className="headd"></div>
                            <div className="bodyy"></div>
                            <div className="left-legg"></div>
                            <div className="right-legg"></div>
                            <div className="left-armm"></div>
                            <div className="right-armm"></div>
                        </div>
                    </Col>
                    
                </Row>

                <Row>
                    
                    <Col className='mt-5 mb-5' xs={12} sm={12} md={6} lg={6}>
                        <div className="fire-circle">
                            <div className="flames"></div>
                        </div>
                    </Col>
                    <Col className='lead mt-5 mb-5' xs={12} sm={12} md={6} lg={6} style={{border:'1px solid red', borderRadius:'25px', padding:'15px'}}>
                    Implement chatbots to provide immediate customer support and assistance to users, helping them navigate the website and answer common questions.  Use AI to analyze market trends, audience behavior, and industry insights, helping content creators make informed decisions.
                    </Col>
                </Row>

                <Row>
                    <Col className='lead mt-5 mb-5' xs={12} sm={12} md={6} lg={6} style={{border:'1px solid red', borderRadius:'25px', padding:'15px'}}>
                    Provide sentiment scoring, such as positive, negative, or neutral, and potentially more detailed emotions like joy, anger, or sadness. Provide customizable content templates that can be used as starting points for various types of content.
                    </Col>
                    <Col className='mt-5 mb-5' xs={12} sm={12} md={6} lg={6}>
                        <div className="cube-container">
                            <div className="cube">
                            <div className="face front"></div>
                            <div className="face back"></div>
                            <div className="face right"></div>
                            <div className="face left"></div>
                            <div className="face top"></div>
                            <div className="face bottom"></div>
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className='mt-5 mb-5' xs={12} sm={12} md={6} lg={6}>
                    <Col className='mt-5 mb-5' xs={12} sm={12} md={6} lg={6}>
                        <div className="robot">
                            <div className="head">
                            <div className="eye left-eye"></div>
                            <div className="eye right-eye"></div>
                            </div>
                            <div className="body">
                            <div className="left-leg"></div>
                            <div className="right-leg"></div>
                            </div>
                        </div>
                    </Col>
                    </Col>
                    <Col className='lead mt-5 mb-5' xs={12} sm={12} md={6} lg={6} style={{border:'1px solid red', borderRadius:'25px', padding:'15px'}}>
                    Implement image recognition algorithms to understand and interpret the visual content. Allow users to input questions related to the content of the images.  Enable collaboration between content creators and allow them to work together on projects.
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Intro