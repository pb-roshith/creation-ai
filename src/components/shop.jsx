import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';

const products = [
	{
		id:1,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697115998/creation%20ai/Ring_Light_icnpuw.jpg',
		name:'Ring light',
		rate:'$20',
		rating:'⭐⭐⭐⭐',
		f1:'compatible devices : Iphone/Android',
		f2:'weight : 2.3kg',
		f3:'hardware interface : USB',
		ref:'https://www.amazon.in/DIGITEK%C2%AE-DRL-18RT-Profesional-apertures-Photography/dp/B0B24TVHBY/ref=sr_1_1_sspa?adgrpid=58667285653&ext_vrnc=hi&hvadid=590712264146&hvdev=c&hvlocphy=9061897&hvnetw=g&hvqmt=e&hvrand=11743666716277778757&hvtargid=kwd-312592064851&hydadcr=24566_2265454&keywords=ring+light+amazon&qid=1697292349&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
	},
	{
		id:2,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116023/creation%20ai/Tripod_cshmrd.jpg',
		name:'Tripod',
		rate:'$25',
		rating:'⭐⭐⭐',
		f1:'compatible devices : Iphone/Android',
		f2:'weight : 500g',
		f3:'hardware interface : USB',
		ref:'https://www.amazon.in/Digitek-DTR-550-LW-Tripod/dp/B074CWD7MS/ref=sr_1_1_sspa?crid=15GP3U7JOTOZ2&keywords=tripod&qid=1697292441&sprefix=tripod%2Caps%2C407&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
	},
	{
		id:3,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116003/creation%20ai/Portable_SSD_1_gt4axe.jpg',
		name:'Portable SSD',
		rate:'$32',
		rating:'⭐⭐⭐⭐⭐',
		f1:'compatible devices : Iphone/Android/Laptop/PC',
		f2:'weight : 49.9g',
		f3:'hardware interface : USB Type C',
		ref:'https://www.amazon.in/Samsung-10Gbps-External-Portable-MU-PC1T0R/dp/B087DDP3L1/ref=sr_1_5?crid=3QOC8MJ1J5IZT&keywords=Portable+SSD+samsung&qid=1697292523&sprefix=portable+ssd+samsung%2Caps%2C324&sr=8-5'
	},
	{
		id:4,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697115998/creation%20ai/Microphone_d8qahm.jpg',
		name:'Micro phone',
		rate:'$17',
		rating:'⭐⭐⭐⭐',
		f1:'Connectivity technology : USB/Bluetooth',
		f2:'weight : 300.01g',
		f3:'Audio sensitivity : 75dB',
		ref:'https://www.amazon.in/HUMBLE-Dynamic-Recording-Microphone-SmartPhones/dp/B08HD7JQHX/ref=sr_1_7?crid=CM48N06CQOUG&keywords=microphone&qid=1697292570&sprefix=micro+phone%2Caps%2C345&sr=8-7'
	},
	{
		id:5,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116011/creation%20ai/Softbox_lightning_kit_zogpcq.jpg',
		name:'Softbox lightning kit',
		rate:'$130',
		rating:'⭐⭐⭐⭐',
		f1:'Light Source Type : LED',
		f2:'Mounting hardware : AC/DC',
		f3:'Compatible devices : light kit',
		ref:'https://www.amazon.in/Digitek-Carrying-Compatible-Speedlites-DSBH-055/dp/B0822VX849/ref=sr_1_1_sspa?crid=1X5F748DEHLJ3&keywords=softbox%2Blighting%2Bkit&qid=1697292615&sprefix=softbox%2Blighting%2Bkit%2Caps%2C318&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
	},
	{
		id:6,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116507/creation%20ai/633baae6f4054b7dc86bbefe-zimtown-10ft-adjustable-background_jz25hl.jpg',
		name:'Background Support kit',
		rate:'$24',
		rating:'⭐⭐⭐⭐⭐',
		f1:'Height : 9ft',
		f2:'Flip Lock type : Non flip italian',
		f3:'Box Contents : Two stands,tow curatin rods',
		ref:'https://www.amazon.in/VTS-T-Shape-Background-Backdrop-Support/dp/B09BK5BW8N/ref=sr_1_10?crid=82DROFN0MLSI&keywords=Background+Support+kit&qid=1697292679&sprefix=background+support+kit%2Caps%2C269&sr=8-10'
	},
	{
		id:7,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116016/creation%20ai/71tepZZV58L_wk6pe0.jpg',
		name:'Green Screen',
		rate:'$10',
		rating:'⭐⭐⭐⭐',
		f1:'Height : 6 to 9ft',
		f2:'Dimension : 8 x 8 x 4',
		f3:'weight : 400g',
		ref:'https://www.amazon.in/Boltove%C2%AE-Green-Screen-Backdrop-Include/dp/B09TXNQGKX/ref=sr_1_2_sspa?crid=4NGULCUC6IV3&keywords=Green%2BScreen&qid=1697292732&sprefix=green%2Bscreen%2Caps%2C293&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
	},
	{
		id:8,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116038/creation%20ai/71axXBOVS1S._AC_UF1000_1000_QL80__w5mt21.jpg',
		name:'Smartphone Camera Lenses',
		rate:'$20',
		rating:'⭐⭐⭐',
		f1:'Type : Macro lens',
		f2:'Dimensions : 50 x 30 x 30',
		f3:'Travel friendly : Yes',
		ref:'https://www.amazon.in/Drumstone-Professional-Photography-Compatiable-Smartphones/dp/B0BFNW7W4H/ref=sr_1_9?crid=RPO33B1GHYR0&keywords=Smartphone+Camera+Lenses&qid=1697292801&sprefix=smartphone+camera+lenses%2Caps%2C316&sr=8-9'
	},
	{
		id:9,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116009/creation%20ai/71L1gSXDVIL._AC_UF350_350_QL80__fysxvy.jpg',
		name:'Go pro 360',
		rate:'$432',
		rating:'⭐⭐⭐⭐',
		f1:'Live streaming : Yes',
		f2:'Resolution : 4k',
		f3:'Waterproof : Yes',
		ref:'https://www.amazon.in/GoPro-Waterproof-Stabilization-Spherical-Streaming/dp/B07YGWD3XW/ref=sr_1_3?crid=1S19059I7GWD1&keywords=gopro+360&qid=1697292845&sprefix=smartphone+camera+lenses%2Caps%2C1333&sr=8-3'
	},
	{
		id:10,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116016/creation%20ai/81kdYmPUfEL_qnzuxa.jpg',
		name:'Portable Charger',
		rate:'$24',
		rating:'⭐⭐⭐⭐⭐',
		f1:'compatible devices : Iphone/Android',
		f2:'Type : B/C',
		f3:'Power supply : 20/30W',
		ref:'https://www.amazon.in/Ambrane-Multi-Layer-Protection-Li-Polymer-Stylo-10k/dp/B0993BB11X/ref=sr_1_2_sspa?crid=FEUIQ78QCZ1I&keywords=Portable+Charger&qid=1697292903&sprefix=portable+charger%2Caps%2C304&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
	},
	{
		id:11,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116022/creation%20ai/61m4K0DrPBL._AC_UF1000_1000_QL80__wenxbz.jpg',
		name:'SD CARD',
		rate:'$5',
		rating:'⭐⭐⭐⭐⭐',
		f1:'compatible devices : Iphone/Android/Camera',
		f2:'weight : 5g',
		f3:'Capacity : 128gb',
		ref:'https://www.amazon.in/SanDisk-Ultra%C2%AE-microSDXCTM-Warranty-Smartphones/dp/B0BDYVC5TD/ref=sr_1_1_sspa?crid=3361F9FWTTW6I&keywords=SD%2BCARD%2Bclouddisk&qid=1697292957&sprefix=sd%2Bcard%2Bclouddisk%2Caps%2C531&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1'
	},
	{
		id:12,
		im:'https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697116009/creation%20ai/61eLzkc3C5L._AC_UF1000_1000_QL80_DpWeblab__eifvkz.jpg',
		name:'Acoustic Foam for noise control',
		rate:'$20',
		rating:'⭐⭐⭐⭐',
		f1:'Pieces : 18 to 270',
		f2:'Material : Acoustic Polyurethane',
		f3:'Weight : 1.90kg',
		ref:'https://www.amazon.in/MMT-Acoustix%C2%AE-Soundproofing-Acoustic-Professional/dp/B089D258XL/ref=sr_1_2_sspa?crid=1IKNRIF11SM18&keywords=Acoustic+Foam+for+noise+control&qid=1697293045&sprefix=acoustic+foam+for+noise+control%2Caps%2C337&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1'
	}
]

const Shop = () => {
  return (
    <>
        <div style={{zIndex:'100',
        position:'relative', backgroundImage:"url('https://res.cloudinary.com/dlnrtg1q3/image/upload/v1697204872/creation%20ai/WhatsApp_Image_2023-10-12_at_9.48.43_PM_bqrwpy.jpg')",
        backgroundSize:'cover',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat',
        backgroundAttachment:'fixed',}}>
            <Container>
                <div className='text-center p-4'>
                <h1 style={{color:'#fff', textShadow:'0 0 2px black'}}>SUGGESTIONS FOR CREATION</h1>
                <h6 style={{color:'#fff', textShadow:'0 0 6px black'}} className='lead'>Products for content creators</h6>
                </div>
                <Row>
                    {/* return */}
                        
                            {products.map((i) => {
                                return(
                                    <Col xs={12} sm={12} md={6} lg={3}>
                                <Card className='m-3' style={{ width: '18rem' }}>
                                <Card.Img style={{height:'300px'}} variant="top" src={i.im} />
                                <Card.Body style={{color:'#fff',backgroundColor:'black'}}>
                                  <Card.Title>{i.name}</Card.Title>
                                  <Card.Text>
                                    
                                    <h6>Price : {i.rate}</h6>
                                  </Card.Text>
                                  <Card.Text>
                                    
                                    <h5>Rating : {i.rating}</h5>
                                  </Card.Text>
                                </Card.Body>
                                <ListGroup className="list-group-flush">
                                  <ListGroup.Item style={{color:'#fff', backgroundColor:'black'}}>{i.f1}</ListGroup.Item>
                                  <ListGroup.Item style={{color:'#fff', backgroundColor:'black'}}>{i.f2}</ListGroup.Item>
                                  <ListGroup.Item style={{color:'#fff', backgroundColor:'black'}}>{i.f3}</ListGroup.Item>
                                </ListGroup>
                                <Card.Body style={{backgroundColor:'black'}}>
                                <Button href={i.ref} variant="outline-danger">Add to cart</Button>
                                </Card.Body>
                              </Card>
                              </Col>
                                )
                            })}
                        
                    {/* ) */}
                </Row>
            </Container>
        </div>
    </>
  )
}

export default Shop