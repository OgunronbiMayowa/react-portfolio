import { useState, useEffect } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../assets/img/my-pic.jpeg";
import LinkedInIcon from "../assets/img/linkedIn.svg";
import FacebookIcon from "../assets/img/facebook-icon.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
import WhatsaAppIcon from "../assets/img/whatsapp-icon.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);
    return() => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value ) => {
    setActiveLink(value);
  }

  return (
    // <div className="nav">
      <Navbar expand="lg" href="#home" className={scrolled ? "scrolled": ""}> {/* className="bg-body-tertiary" */}
        <Container>
          <Navbar.Brand href="#home">
            <img className="logo" src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle> 
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link': 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://wa.me/message/MMYV6N2U4JRWI1"><img src={WhatsaAppIcon} alt="WhatsaApp" /></a>
                <a href="https://www.facebook.com/share/18YBYUQMYK/"><img src={FacebookIcon} alt="Facebook" /></a>
                <a href="https://www.linkedin.com/in/mayowa-ogunronbi-0b9b221b4?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><img src={LinkedInIcon} alt="LinkedIn" /></a>
                {/* <a href="#"><img src={navIcon3} alt="Instagram" /></a> */}
                
              </div>
              <Nav.Link href="#connect">
                <button className="vvd" ><span>Let's Connect</span></button>
              </Nav.Link>
              {/* onClick={() => console.log('connect')} */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </div>
  )
}