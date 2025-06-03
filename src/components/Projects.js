import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/Project 4.jpg";
import projImg5 from "../assets/img/Project 5.jpg";
import projImg6 from "../assets/img/Project 6.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "SavePouch Africa",
      description: "Business & Finance",
      imgUrl: projImg1,
      url: "https://savepouchafrica.com"
    },
    {
      title: "Blakers Industries",
      description: "Building & Construction",
      imgUrl: projImg2,
      url: "https://savepouchafrica.com"
    },
    {
      title: "Trusted Edge",
      description: "Business & Consultation",
      imgUrl: projImg3,
      url: "https://savepouchafrica.com"
    },
    {
      title: "Teachers Field",
      description: "Education & Legacy",
      imgUrl: projImg3,
      url: "https://savepouchafrica.com"
    },
    {
      title: "SRADeV Nigeria",
      description: "Environmental Sustainablity",
      imgUrl: projImg2,
      url: "https://savepouchafrica.com"
    },
    {
      title: "Ventis",
      description: "Home Services",
      imgUrl: projImg1,
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
                  Lorem Ipsum
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