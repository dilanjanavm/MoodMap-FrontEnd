import { Col, Container, Row } from "reactstrap"
import '../../styles/MentalPage.css';
import PurpleCircl from '../../assets/PurpleRadR.png';
import hand from '../../assets/hand.png';
import GreenCircle from '../../assets/greenRadL.png';

const MentalHealthPage = () => {
    return (
        <Container fluid style={{ position: 'relative', marginTop:'350px'}} className="features-page-container">
            <Row>
                <Col sm='12' md='12' lg='6' xl='6'>
                    <div>
                        <img src={GreenCircle} alt="Green Circle" className="green-circle-mental" />
                        <h1 className="mental-title">Your AI-Powered Mental Health Companion</h1>
                        <h3 className="mental-description">
                        MoodMap is your personal mental health companion that combines daily journaling with AI-powered insights. Track your moods, uncover emotional patterns, and receive personalized suggestions to support your mental well-being. With a focus on privacy, MoodMap empowers you to understand and improve your mental health journey.
                        </h3>
                    </div>
                </Col>
                <Col sm='12' md='12' lg='6' xl='6'>
                    <div className="mental-image-container">
                        <img src={PurpleCircl} alt="Purple Circle" />
                        <img src={hand} alt="Hand Iamge" />
                    </div>
                </Col>
            </Row>
        </Container>

    )
}

export default MentalHealthPage