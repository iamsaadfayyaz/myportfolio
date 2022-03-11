import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ximi from "../../Assets/Projects/ximi.png";
import funky from "../../Assets/Projects/funky.png";
import joyclub from "../../Assets/Projects/joyclub.jpg";
import biz from "../../Assets/Projects/biz.jpg"; 
import ranchers from "../../Assets/Projects/ranchers.jpg";
import pansar from "../../Assets/Projects/pansar.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ximi}
              isBlog={false}
              title="Ximivogue"
              description="WordPress is particularly useful when building an eCommerce website, because there are plenty of premade themes suited to an online storefront. It also features plugins that add complete eCommerce functionality to a site, from product display to shopping cart and checkout."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={funky}
              isBlog={false}
              title="Funky Bake"
              description="WordPress is particularly useful when building an eCommerce website, because there are plenty of premade themes suited to an online storefront. It also features plugins that add complete eCommerce functionality to a site, from product display to shopping cart and checkout."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={joyclub}
              isBlog={false}
              title="Joyclub"
              description="WordPress is particularly useful when building an eCommerce website, because there are plenty of premade themes suited to an online storefront. It also features plugins that add complete eCommerce functionality to a site, from product display to shopping cart and checkout."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={biz}
              isBlog={false}
              title="Bizb"
              description="WordPress is particularly useful when building an eCommerce website, because there are plenty of premade themes suited to an online storefront. It also features plugins that add complete eCommerce functionality to a site, from product display to shopping cart and checkout."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ranchers}
              isBlog={false}
              title="Ranchers Cafe"
              description="WordPress is particularly useful when building an eCommerce website, because there are plenty of premade themes suited to an online storefront. It also features plugins that add complete eCommerce functionality to a site, from product display to shopping cart and checkout."
              link="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pansar}
              isBlog={false}
              title="Pansar Bazaar"
              description="WordPress is particularly useful when building an eCommerce website, because there are plenty of premade themes suited to an online storefront. It also features plugins that add complete eCommerce functionality to a site, from product display to shopping cart and checkout."
              link="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
