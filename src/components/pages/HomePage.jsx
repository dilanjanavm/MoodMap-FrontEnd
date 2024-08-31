import { Col, Container, Row } from "reactstrap"
import rotatingHand from '../../assets/rotatingHand.mp4';
import HomeStartDiary from "../pageComponents/HomeStartDiary";
import '../../styles/HomePage.css';

const HomePage = () => {
    return (
        <Container fluid style={{marginTop:'170px', position:'relative'}}>
            <Row>
                <Col sm='12' md='12' lg='12' xl='12'>
                    <h1 className="home-title">Navigate Your Emotions with Insightful Mood Tracking</h1>
                </Col>
                <Col sm='12' md='12' lg='12' xl='12'>
                    <Row>
                        <Col sm='12' md='12' lg='7' xl='7'>
                            <video src={rotatingHand} loop autoPlay muted className="home-video" />
                        </Col>
                        <Col sm='12' md='12' lg='5' xl='5'>
                            <HomeStartDiary />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default HomePage