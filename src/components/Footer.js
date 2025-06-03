import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/my-pic.jpeg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { MailchimpForm } from "./MailchimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <MailchimpForm />
          <Col sm={6}>
             <img id="footer-logo" src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href=""><img src={navIcon1} /></a>
              <a href=""><img src={navIcon2} /></a>
              <a href=""><img src={navIcon3} /></a>
            </div>
            <p>Copyright &copy; 2025 All rights Reserved | Mayowa Ogunronbi Babatunde</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}