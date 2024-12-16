import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ffff' }}>
            Sid Goparaju
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/sidgoparaju" target="_blank" ><img src={navIcon1} alt="Icon" /></a>
            </div>
            <p></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
