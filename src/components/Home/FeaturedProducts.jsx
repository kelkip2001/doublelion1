import React, { Component, Fragment } from 'react';
import {Container, Row,Col,Card} from 'react-bootstrap'

export class FeatureProducts extends Component {
    render() {
        return (
            
<Fragment>
    <Container className="text-center" fluid={true} >
        <div className="section-title text-center mb-55">
            <h2> FEATURED PRODUCT</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
        </div>
        <Row>
            {/* 1st column  */}
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}> 
                <Card className="image-box card">
                    <img className="center" alt="test" src="https://shopnewlevel.com/wp-content/uploads/2021/11/SHOP-NEW-LEVEL-MAXI-DRESS6-2-scaled.jpg"/>
                        <Card.Body>
                            <p className="product-name-on-card">FASHIONABLY LATE MUSTARD MAXI</p>
                            <p className="product-price-on-card">Price : KSH4,499</p>
                        </Card.Body>
                </Card>                                 
            </Col> 
            {/* 2nd column  */}
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>  
                <Card className="image-box card">
                    <img className="center" alt="" src="https://shopnewlevel.com/wp-content/uploads/2021/08/SHOP-NEW-LEVEL-2-2-scaled.jpg"/>
                        <Card.Body>
                            <p className="product-name-on-card">OLYMPIA STRAW BOATER HAT </p>
                            <p className="product-price-on-card">Price : KSH1,800</p>
                        </Card.Body>
                </Card>
            </Col>
             {/* 3rd column  */}
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}> 
                <Card className="image-box card">
                    <img className="center" alt="" src="https://shopnewlevel.com/wp-content/uploads/2021/05/SHOP-NEW-LEVEL-BODYSUITS2-600x750.jpg"/>
                        <Card.Body>
                            <p className="product-name-on-card">SELF MADE BLACK BODYSUIT </p>
                            <p className="product-price-on-card">Price : KSH2,950</p>
                        </Card.Body>
                </Card>
            </Col>
             {/* 4th column  */}
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}>  
                <Card className="image-box card">
                    <img className="center" alt="" src="https://shopnewlevel.com/wp-content/uploads/2020/12/SHOP-NEW-LEVEL-3-600x750.jpg"/>
                    <Card.Body>
                        <p className="product-name-on-card">BUSINESS CLASS WHITE BODYSUIT </p>
                        <p className="product-price-on-card">Price : KSH2,500</p>
                    </Card.Body>
                </Card>
            </Col>
            {/* 5th column  */}
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}> 
                <Card className="image-box card">
                    <img className="center" alt="" src="https://shopnewlevel.com/wp-content/uploads/2020/06/Shop-New-Level-High-Maintenance-Tee2-scaled.jpg"/>
                    <Card.Body>
                        <p className="product-name-on-card">HIGH MAINTENANCE WOMEN’S T-SHIRT </p>
                        <p className="product-price-on-card">Price : KSH2,800</p>
                    </Card.Body>
                </Card>         
            </Col>
            {/* 6th column  */}
            <Col className="p-1" key={1} xl={2} lg={2} md={2} sm={4} xs={6}> 
                <Card className="image-box card">
                    <img className="center" alt="" src="https://shopnewlevel.com/wp-content/uploads/2020/07/Shop-New-Level-TEE8-scaled.jpg"/>
                    <Card.Body>
                        <p className="product-name-on-card">I MISS YOU WOMEN’S T-SHIRT </p>
                        <p className="product-price-on-card">KSH2,800</p>
                    </Card.Body>
                </Card>           
            </Col>
        </Row>
    </Container>
</Fragment>
        )
    }
}
export default FeatureProducts
