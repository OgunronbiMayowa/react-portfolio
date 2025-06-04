import { Col, Container, Row } from "react-bootstrap";
import logo from "../assets/img/my-pic.jpeg";
import LinkedInIcon from "../assets/img/linkedIn.svg";
import FacebookIcon from "../assets/img/facebook-icon.svg";
// import instagramIcon from "../assets/img/instagram-icon.svg";
import WhatsaAppIcon from "../assets/img/whatsapp-icon.png";
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
               <a href="https://wa.me/message/MMYV6N2U4JRWI1"><img src={WhatsaAppIcon} alt="WhatsaApp" /></a>
                <a href="https://www.facebook.com/share/18YBYUQMYK/"><img src={FacebookIcon} alt="Facebook" /></a>
                <a href="https://www.linkedin.com/in/mayowa-ogunronbi-0b9b221b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                {/* <a href="#"><img src={navIcon3} alt="Instagram" /></a> */}
            </div>
            <p>Copyright &copy; 2025 All rights Reserved | Mayowa Ogunronbi Babatunde</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}