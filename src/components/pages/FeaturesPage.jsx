import { Col, Container, Row } from "reactstrap"
import flowers from '../../assets/Flowers.png';
import '../../styles/FeaturesPage.css';
import FeaturesCard from "../pageComponents/FeaturesCard";

const FeaturesPage = () => {
  return (
    <Container fluid style={{ border: '1px solid red', position: 'relative' }} className="features-page-container">
      <Row>
        <Col sm='12' md='12' lg='12' xl='12'>
          <img src={flowers} alt="Flowers" className="flowers" />
        </Col>
        <Row>
          <Col sm='12' md='12' lg='12' xl='12' style={{ position: 'relative' }}>
            <div style={{ border: '1px solid blue', position: 'relative' }} className="features-container">

              <Row>
                <Col sm='12' md='12' lg='12' xl='12'>
                  <h1 className="features-title">Essential Features for Your Mental Well-Being</h1>
                </Col>
              </Row>
              <Row>
                <Col>
                  <FeaturesCard card={1}/>
                </Col>
                <Col>
                  <FeaturesCard card={2}/>
                </Col>
                <Col>
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