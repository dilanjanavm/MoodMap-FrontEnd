import { Col, Container, Row } from "reactstrap"
import purpleLeaves from '../../assets/purpleLeaves.png';
import greenLeaves from '../../assets/greenLeaves.png';
import meditation from '../../assets/meditation.png';
import purpleSquare from '../../assets/purpleSquare.png';
import waves from '../../assets/waves.png';
import '../../styles/MoodMap.css';

const MoodMapPage = () => {
    return (
        <>
            <Container className="moodMadContainer">
                <div>
                    <Row>
                        <Col sm='12' md='12' lg='12' xl='12'>
                            <Row>
                                <Col sm='8' md='8' lg='8' xl='8'>
                                    <Row>
                                        <Col sm='12' md='12' lg='12' xl='12'>
                                            <Row>
                                                <Col sm='6' md='6' lg='6' xl='6'>
                                                    <img src={purpleSquare} alt="Purple Square" />
                                                </Col>
                                                <Col sm='6' md='6' lg='6' xl='6'>
                                                    <img src={purpleLeaves} alt="Purple Leaves" />
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col sm='12' md='12' lg='12' xl='12'>
                                            <Row>
                                                <h1 className="moodMapTitle">Mood <span>Map</span></h1>
                                            </Row>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col sm='4' md='4' lg='4' xl='4'>
                                    <img src={waves} alt="Waves image" />
                                </Col>
                            </Row>
                        </Col>

                        <Col sm='12' md='12' lg='12' xl='12'>
                            <Row>
                                <Col sm='8' md='8' lg='8' xl='8'>
                                    <img src={greenLeaves} alt="Green Leaves image" />
                                </Col>
                                <Col sm='4' md='4' lg='4' xl='4'>
                                    <img src={meditation} alt="Meditation image image" />
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </div>
            </Container>
            <div style={{ position: "relative" }}>
                <h3 className="MoodMapDescription">Ready to understand your emotions and improve your mental well-being? Join MoodMap today and start tracking your moods, uncovering patterns, and receiving personalized insights—all in a safe, secure space.</h3>
            </div>
        </>

    )
}

export default MoodMapPage