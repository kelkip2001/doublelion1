import React, { Component, Fragment } from 'react'
import { Col, Container, Row,Card } from 'react-bootstrap'

export class Collection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="text-center" fluid={true} >
                        <div className="section-title text-center mb-55">
                            <h2> PRODUCT COLLECTION</h2>
                            <p>Some Of Our Exclusive Collection, You May Like</p>
                        </div>
                    <Row>
                        
                        <Col className="p-0" xl={3} lg={3} md={3} sm={6} xm={6}>
                             <Card className="image-box card">
                                <img className="center" alt="test" src="https://shopnewlevel.com/wp-content/uploads/2021/11/SHOP-NEW-LEVEL-MAXI-DRESS6-2-scaled.jpg"/>

                            <Card.Body>
                    <p className="product-name-on-card">FASHIONABLY LATE MUSTARD MAXI</p>
                    <p className="product-price-on-card">Price : KSH4,499</p>



                </Card.Body>
        </Card> 
                        
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        )
    }
}

export default Collection
