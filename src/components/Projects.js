import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from "./ProjectCard2";
import design1 from "../assets/img/design1.jpg";
import design2 from "../assets/img/design2.jpg";
import design3 from "../assets/img/design3.jpg";
import design4 from "../assets/img/design1.jpg";
import design5 from "../assets/img/design2.jpg";
import design6 from "../assets/img/design3.jpg";
import projImg1 from "../assets/img/blakers.jpg";
import projImg2 from "../assets/img/tec.jpg";
import projImg3 from "../assets/img/ventis.jpg";
import projImg4 from "../assets/img/eandelmagazine.jpg";
import projImg5 from "../assets/img/sradev.jpg";
import projImg6 from "../assets/img/savepouchAfrica.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Blakers Industries",
      description: "Building & Construction",
      imgUrl: projImg1,
      url: "https://blakerindustries.com/"
    },
    {
      title: "Trusted Edge",
      description: "Business & Consultation",
      imgUrl: projImg2,
      url: "https://trustededgeconsult.com/"
    },
    {
      title: "Ventis",
      description: "Home Services",
      imgUrl: projImg3,
      url: "https://www.ventis.com.au/"
    },
    {
      title: "Eandel Magazine",
      description: "African News",
      imgUrl: projImg4,
      url: "https://eandelmagazine.com/eandelmagazine/"
    },
    {
      title: "SRADeV Nigeria",
      description: "Environmental Sustainablity",
      imgUrl: projImg5,
      url: "https://sradev.org/"
    },
    {
      title: "SavePouch Africa",
      description: "Business & Finance",
      imgUrl: projImg6,
      url: "https://savepouchafrica.com"
    }
  ]

  const designs = [
    {
      imgUrl: design1,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design2,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design3,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design4,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design5,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design6,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design1,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design2,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design3,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design4,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design5,
      url: "https://savepouchafrica.com"
    },
    {
      imgUrl: design6,
      url: "https://savepouchafrica.com"
    }
  ]

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""} >
                  <h2>Projects</h2>
                  <p>My experience with WordPress website development and management enables me to deliver fully customized, user-friendly, and scalable websites tailored to specific business needs.</p>
                </div>
              }
            </TrackVisibility>

            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Website</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Design</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {
                      projects.map((project, index) => {
                        return (
                          <ProjectCard 
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {
                      designs.map((design, index) => {
                        return (
                          <ProjectCard2
                            key={index}
                            {...design}
                          />
                        )
                      })
                    }
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} />
    </section>
  )
}