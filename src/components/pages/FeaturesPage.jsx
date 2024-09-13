import { Col, Container, Row } from "reactstrap"
import flowers from '../../assets/Flowers.png';
import '../../styles/FeaturesPage.css';
import FeaturesCard from "../pageComponents/FeaturesCard";

const FeaturesPage = () => {
  return (
    <Container fluid style={{position: 'relative' }} className="features-page-container" id="about">
      <Row>
        <Col sm='12' md='12' lg='12' xl='12'>
          <img src={flowers} alt="Flowers" className="flowers" />
        </Col>
        <Row>
          <Col sm='12' md='12' lg='12' xl='12' style={{ position: 'relative' }}>
            <div style={{ position: 'relative' }} className="features-container">

              <Row>
                <Col sm='12' md='12' lg='12' xl='12'>
                  <h1 className="features-title">Essential Features for Your Mental Well-Being</h1>
                </Col>
              </Row>
              <Row className="features-cards-row d-flex justify-content-between">
                <Col sm='4' md='4' lg='4' xl='3'>
                  <FeaturesCard card={1}/>
                </Col>
                <Col sm='4' md='4' lg='4' xl='3'>
                  <FeaturesCard card={2}/>
                </Col>
                <Col sm='4' md='4' lg='4' xl='3'>
                  <FeaturesCard card={3}/>
                </Col>
              </Row>

            </div>
          </Col>
        </Row>
      </Row>
    </Container>
  )
}

export default FeaturesPage