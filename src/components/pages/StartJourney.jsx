import { Col, Container, Row } from "reactstrap"
import CustomButton from "../pageComponents/CustomButton"
import '../../styles/Startjourney.css';
import greenRadLB from '../../assets/greenRadLB.png';

const StartJourney = () => {
    return (
        <Container fluid style={{ marginTop: '250px', position: 'relative' }}>
            <img src={greenRadLB} alt="Green Cirlce" className="greenCirleJourney"/>
            <Row>
                <Col>
                    <h1 className="home-title">Start Your Journey with MoodMap</h1>
                </Col>
                <Col>
                    <div className="customButtonJourney">
                        <CustomButton message='Create Your Free Account' />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StartJourney