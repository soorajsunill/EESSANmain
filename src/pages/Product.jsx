import React, { useEffect } from 'react';
import { Card, Container, Row, Col, Table } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Product.css';
import '../assets/font.css';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles

const Product = () => {
    useEffect(() => {
        // Initialize AOS with custom settings
        AOS.init({
            duration: 1200, // Animation duration in milliseconds
            delay: 200, // Default delay before the animation starts
        });
    }, []); // Empty dependency array to run this effect only once when the component mounts

    return (
        <>
            <Container className="product-page mt-5">
                <h1 className="text-center mb-4 product-heading oswald-600" data-aos="fade-up">Biogas Purification for MSMEs</h1>
                <Row>
                    <Col md={4} data-aos="fade-right">
                        <Card className="product-image-card">
                            <div className="product-image-wrapper">
                                <Card.Img variant="top" src='https://lh3.googleusercontent.com/pw/AP1GczPAygA8azZK3cv8htDVFYmoFLd7R_igm_ZyjWkXXqjZw9ggb1xkaAcIg_5tMkVkVt4SYu7qF-H4HpGiFStb-b8tIzhuIU5CfOWIqg92UzxYY4VqAYtsAZVtg6HzrA34Eyjfua-P5LlAUAAlvTimWF3d=w709-h945-s-no-gm?authuser=0' alt="Biogas Purification Unit" className="product-image" />
                                <div className="product-image-overlay">
                                    <Card.Text className="product-overlay-text">Affordable Biogas Purification Unit</Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={6} data-aos="fade-left" data-aos-delay="300">
                        <Card className="product-details-card">
                            <Card.Body>
                                <Card.Title className="product-title oswald-600"><span className="cp-highlight">Biogas Purification</span> Unit for MSMEs</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted product-subtitle poppins-regular" data-aos-delay="400">
                                    Clean Energy for Small-Scale Biogas Generators
                                </Card.Subtitle>
                                <Card.Text className="product-description poppins-regular" data-aos-delay="500">
                                    The Biogas Purification Unit is designed specifically for Micro, Small, and Medium Enterprises (MSMEs) to reduce biogas purification costs while maintaining high fuel quality.
                                    <br />Perfect for converting raw biogas into a usable fuel similar to LPG or gasoline. It also contributes to environmental sustainability by lowering greenhouse gas emissions.
                                </Card.Text>
                                <h5 className="product-features-heading oswald-600" data-aos-delay="600">Why Choose <span className="cp-highlight">Our Product?</span></h5>
                                <ul className="product-features-list poppins-regular" data-aos-delay="700">
                                    <li>Efficient fuel output, ready for commercial use</li>
                                    <li>Modular scalability to accommodate business growth</li>
                                    <li>Environmentally friendly solution, reducing CO<sub>2</sub> emissions</li>
                                    <li>Low operating costs with high durability</li>
                                    <li>Compatible with existing biogas systems</li>
                                </ul>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>

                {/* Product Specifications */}
                <Row className="mt-4" data-aos="fade-up" data-aos-delay="800">
                    <Col>
                        <h3 className="product-variations-heading oswald-600">Product Specifications</h3>
                        <Table striped bordered hover responsive className="product-table">
                            <thead>
                                <tr className='oswald-600'>
                                    <th>Model</th>
                                    <th>Capacity</th>
                                    <th>Material</th>
                                    <th>Maintenance</th>
                                </tr>
                            </thead>
                            <tbody className='poppins-regular'>
                                <tr>
                                    <td>BPR-1</td>
                                    <td>1 - 20 m³/day</td>
                                    <td>Stainless Steel</td>
                                    <td>Low Maintenance</td>
                                </tr>
                                <tr>
                                    <td>BPR-2</td>
                                    <td>10 - 100 m³/day</td>
                                    <td>Carbon Steel</td>
                                    <td>Quarterly Service</td>
                                </tr>
                                <tr>
                                    <td>BPR-3</td>
                                    <td>100+ m³/day</td>
                                    <td>Galvanized Steel</td>
                                    <td>Annual Service</td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>

                {/* Product Additional Details */}
                <Row className="mt-5" data-aos="fade-up" data-aos-delay="900">
                    <Col>
                        <h3 className="additional-details-heading oswald-600">Key Advantages</h3>
                        <ul className="additional-details-list poppins-regular">
                            <li><strong className='oswald-600'>Customizable:</strong> Can be tailored for different industries, such as agriculture, waste management, and energy production.</li>
                            <li><strong className='oswald-600'>Energy Efficiency:</strong> Converts up to 90% of biogas into usable energy, reducing fuel costs.</li>
                            <li><strong className='oswald-600'>Compact Design:</strong> Takes up minimal space and can be installed in small facilities.</li>
                            <li><strong className='oswald-600'>Government Incentives:</strong> Eligible for subsidies and tax benefits under renewable energy programs.</li>
                        </ul>
                    </Col>
                </Row>
            </Container>

    
        </>
    );
};

export default Product;
