import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import colorSharp from "../assets/img/color-sharp.png";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import BackgroundTop from "../assets/img/background-top.png";
import BackgroundBottom from "../assets/img/background-bottom.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""} >
                  <div className="skill-bx">
                    <h2>Skills</h2>
                    <p>I thrive on continuous learning and staying ahead of digital trends, ensuring that I bring fresh, effective strategies to every project, ensuring measurable success and long-term impact for businesses and their digital presence.</p>
                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>HTML</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>CSS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Bootstrap</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>JavaScript</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>jQuery</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>React JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Git</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>APIs</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>MySQL</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Mongoose</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Node JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>Express JS</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>PHP</h5>
                      </div>
                      <div className="item">
                        <img src={meter2} alt="" />
                        <h5>slimPHP</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Wordpress</h5>
                      </div>
                      <div className="item">
                        <img src={meter3} alt="" />
                        <h5>Canva</h5>
                      </div>
                    </Carousel>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-left" src={colorSharp} /> */}
      <img className="background-top" src={BackgroundTop} alt="background-top" />
      <img className="background-bottom" src={BackgroundBottom} alt="background-bottom" />
    </section>
  )
}