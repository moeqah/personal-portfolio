import { Col, Container, Tab, Row,Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import projImg1 from '../assets/img/project-img1.png';
import projImg2 from'../assets/img/project-img2.png';
import projImg3 from '../assets/img/project-img3.png';


export const Projects = () => {

const projects = [

    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg1,
    }, 
    {
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg2,

},
{
        title: "Business Startup",
        description: "Design & Development",
        imgUrl: projImg3,
},
];

return (
    <section className="project" id="project">
      <Container>
        <Row>
            <Col>
                <h2>Projects</h2>
                <p> In this section you will find a collection of my noteworthy projects showcasing my expertise in mobile application development. From intuitive user interfaces to robust functionality, each project represents my commitment to delivering high-quality mobile experiences. I have successfully designed and developed applications for both Android and iOS platforms, leveraging my proficiency in programming languages like Kotlin and React Native. Explore my projects to witness the fusion of creativity and technical expertise that drives my passion for mobile app development.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id = "pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
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
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}