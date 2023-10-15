import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { loadSlim } from "tsparticles-slim";
import Particles from "react-particles";
import { useCallback } from "react";

const Models = () => {
  const particlesInit = useCallback(async engine => {
    console.log(engine);
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async container => {
    await console.log(container);
}, []);

  return (
    <>
      <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} 
      options={{
        fullScreen: {
          enable: true,
          zIndex: 0
        },
        particles: {
          number: {
            value: 43,
            limit: 300,
            density: {
              enable: true,
              value_area: 800
            }
          },
          color: {
            value: "#ffffff"
          },
          shape: {
            type: "circle",
            stroke: {
              width: 0,
              color: "#000000"
            },
            polygon: {
              nb_sides: 5
            },
            image: {
              src: "images/github.svg",
              width: 100,
              height: 100
            }
          },
          opacity: {
            value: 0.5,
            random: true,
            anim: {
              enable: true,
              speed: 1,
              opacity_min: 0.5,
              sync: false
            }
          },
          size: {
            value: 30,
            random: true,
            anim: {
              enable: true,
              speed: 10,
              size_min: 10,
              sync: false
            }
          },
          line_linked: {
            enable: true,
            distance: 100,
            color: "#ffffff",
            opacity: 1,
            width: 1
          },
          move: {
            enable: true,
            speed: 3,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200
            }
          }
        },
      
        backgroundMask: {
          enable: true,
          cover: {
            color: {
              value: {
                r: 0,
                g: 0,
                b: 0
              }
            }
          }
        },
        retina_detect: true,
        fps_limit: 60,
        background: {
          image: "url('https://particles.js.org/images/background3.jpg')"
        },
        smooth:true,
      }}/>
        <div style={{color:'#fff', zIndex:'100', position:'relative'}}>
        <hr />
        <h1 style={{padding:'30px'}} className='text-center'>OUR MODELS</h1>
        <p className='text-center lead'>These AI models can do tedious jobs and boost the speed of creators</p>
      <Container>
        <Row style={{marginBottom:'200px', paddingTop:'100px'}}>
              <Col xs={12} sm={12} md={12} lg={6}>
                <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697044007/creation%20ai/peakpx_5_mumhd9.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Text Summarization</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Text summarization is an automated process that takes a lengthy document and produces a shorter, coherent summary while retaining the essential information and key points.</p>
                <Button href='https://huggingface.co/spaces/roshithindia/text_summarization' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Sentiment-Analysis</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Sentiment analysis is a computational process that involves determining the emotional tone or sentiment expressed in a piece of text, often categorized as positive, negative.</p>
                <Button href='https://huggingface.co/spaces/roshithindia/sentiment_analysis' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043967/creation%20ai/peakpx_3_soorm1.jpg" alt="" />
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043968/creation%20ai/peakpx_4_dmxfry.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Image-To-Text</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Image-to-Text refers to the process of describing the content of an image in textual form. This task involves generating captions or textual descriptions for images.</p>
                <Button href='https://huggingface.co/spaces/roshithindia/image_to_text' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Image Question Answering</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Image Question Answering is a task where a model is presented with an image and a question related to that image.</p>
                <Button href='https://huggingface.co/spaces/roshithindia/imageQuestionAnswering' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043966/creation%20ai/peakpx_9_o3fhw2.jpg" alt="" />
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043967/creation%20ai/peakpx_8_e2uxtl.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Image Classification</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Image classification is the process of categorizing images into predefined classes or labels.</p>
                <Button href='https://huggingface.co/spaces/roshithindia/text_calssification_model' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Audio-To-Text</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Audio-to-Text, also known as Automatic Speech Recognition (ASR), is the technology that transcribes spoken language or audio content into written text.</p>
                <Button variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043966/creation%20ai/peakpx_7_d4jnpt.jpg" alt="" />
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
        <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697272552/creation%20ai/photo-1614680376573-df3480f0c6ff_pujd59.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Song-Generation</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>A song generation model is an artificial intelligence system designed to create original musical compositions or lyrics.</p>
                <Button variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              
        </Row>
        <Row style={{paddingBottom:'200px'}}>
              
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Text-To-Audio</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Text-to-Audio, or Text-to-Speech (TTS), is a technology that converts written text into synthesized speech.</p>
                <Button variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043970/creation%20ai/peakpx_6_qunlvh.jpg" alt="" />
              </Col>
        </Row>
        
      </Container>
      </div>
    </>
  )
}

export default Models