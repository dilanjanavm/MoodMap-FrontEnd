import { Col, Container, Row } from "reactstrap"
import CustomButton from "../pageComponents/CustomButton"
import '../../styles/Startjourney.css';
import greenRadLB from '../../assets/greenRadLB.png';

const StartJourney = () => {
    return (
        <Container fluid className="startJourneyContainer">
            <img src={greenRadLB} alt="Green Cirlce" className="greenCirleJourney" />
            <Row>
                <Col>
                    <h1 className="home-title">Start Your Journey with MoodMap</h1>
                </Col>
                <Col>
                    <div className="customButtonJourney">
                        <div>
                            <CustomButton message='Create Your Free Account' />
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default StartJourney