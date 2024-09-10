import { Col, Container, Row } from "reactstrap";
import rotatingHand from '../../assets/rotatingHand.mp4';
import HomeStartDiary from "../pageComponents/HomeStartDiary";
import '../../styles/HomePage.css';

const HomePage = () => {


    return (
        <Container className='home-page' fluid style={{ position: 'relative' }}>
            <Row >
                <Col sm='12' md='6' lg='8' xl='12'>
                    <h1 className="home-title">Navigate Your Emotions with Insightful Mood Tracking</h1>
                </Col>
                <Col sm='12' md='12' lg='12' xl='12'>
                    <Row>
                        <Col sm='12' md='12' lg='6' xl='6'>
                            <video src={rotatingHand} loop autoPlay muted className="home-video" />
                        </Col>
                        <Col sm='12' md='12' lg='6' xl='6'>
                            <HomeStartDiary />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage;