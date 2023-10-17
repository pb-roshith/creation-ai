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
                <h1 style={{marginTop:'20px'}}>Text-To-Image</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Text-to-image story generation AI is an advanced technology that can transform written narratives or textual descriptions into corresponding visual representations, such as images or illustrations. </p>
                <Button href='https://huggingface.co/spaces/stabilityai/stable-diffusion' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Text-To-Video</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Text-to-video story generation AI is a cutting-edge technology that can convert written narratives or textual descriptions into video content.</p>
                <Button href='https://huggingface.co/spaces/damo-vilab/modelscope-text-to-video-synthesis' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043967/creation%20ai/peakpx_8_e2uxtl.jpg" alt="" />
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043966/creation%20ai/peakpx_9_o3fhw2.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Chat Bot</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>It uses natural language processing and machine learning to understand and respond to human queries, making it a valuable tool for customer support, virtual assistants, and various applications, improving user interactions and automating tasks.</p>
                <Button href='https://huggingface.co/spaces/ysharma/Explore_llamav2_with_TGI' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Image-To-Anime</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Image to anime AI is a technology that transforms ordinary images or photographs into anime-style artwork, giving them a unique and artistic aesthetic inspired by Japanese animation.</p>
                <Button href='https://huggingface.co/spaces/akhaliq/AnimeGANv2' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043968/creation%20ai/peakpx_4_dmxfry.jpg" alt="" />
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
              
              
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043967/creation%20ai/peakpx_3_soorm1.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Story Generation</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Story generation AI, often powered by natural language processing and deep learning techniques, is a type of AI that can create short stories, narratives, or text based on specific input or prompts.</p>
                <Button href='https://huggingface.co/spaces/awacke1/ChatGPT-Memory-Chat-Story-Generator' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        <Row style={{marginBottom:'200px'}}>
        
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Song Generation</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>A song generation model is an artificial intelligence system designed to create original musical compositions or lyrics.</p>
                <Button href='https://huggingface.co/spaces/sanchit-gandhi/musicgen-streaming' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697272552/creation%20ai/photo-1614680376573-df3480f0c6ff_pujd59.jpg" alt="" />
              </Col>
              
        </Row>
        <Row style={{paddingBottom:'200px'}}>
              
              
              <Col xs={12} sm={12} md={12} lg={6}>
              <img style={{boxShadow:'0 0 30px 20px #FF69B4', width:'80%'}} src="https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697043966/creation%20ai/peakpx_7_d4jnpt.jpg" alt="" />
              </Col>
              <Col xs={12} sm={12} md={12} lg={6}>
                <h1 style={{marginTop:'20px'}}>Text-To-Audio</h1>
                <p style={{marginTop:'40px', maxWidth:'400px'}}>Text-to-Audio, or Text-to-Speech (TTS), is a technology that converts written text into synthesized speech.</p>
                <Button href='https://huggingface.co/spaces/zetabyte/text-to-voice' variant="outline-danger" size="lg">Check Out</Button>
              </Col>
        </Row>
        
      </Container>
      </div>
    </>
  )
}

export default Models