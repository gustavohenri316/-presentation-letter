import {
  SunDim,
  House,
  FileCode,
  Student,
  BriefcaseMetal,
  Needle,
  EnvelopeSimple,
} from "phosphor-react";
import { useState } from "react";
import { Container, Content } from "./styles";

export function Navbar() {
  const [navItesmSelected, setNavItemSelected] = useState("Home");
  console.log(navItesmSelected)
  return (
    <Container>
      <Content themeStyles={navItesmSelected}>
        <div className="theme">
          <SunDim size={34} />
        </div>
        <div className="nav-items">
          <section>
            <div className="content-home">
              <div className="info">Home</div>
              <div className="triangulo"></div>
            </div>
            <a  className="Home" onClick={() => setNavItemSelected("Home")}>
              <House size={24} />
            </a>
          </section>
          <section>
            <div className="content-projects">
              <div className="info">Projects</div>
              <div className="triangulo"></div>
            </div>
            <a  className="Projects" onClick={() => setNavItemSelected("Projects")}>
              <FileCode size={24} />
            </a>
          </section>
          <section>
            <div className="content-student">
              <div className="info">Student</div>
              <div className="triangulo"></div>
            </div>
            <a  className="Student" onClick={() => setNavItemSelected("Student")}>
              <Student size={24} />
            </a>
          </section>
          <section>
            <div className="content-job">
              <div className="info">Job</div>
              <div className="triangulo"></div>
            </div>
            <a  className="Job" onClick={() => setNavItemSelected("Job")}>
              <BriefcaseMetal size={24} />
            </a>
          </section>
          <section>
            <div className="content-contact">
              <div className="info">Contact</div>
              <div className="triangulo"></div>
            </div>
            <a  className="Contact" onClick={() => setNavItemSelected("Contact")}>
              <EnvelopeSimple size={24} />
            </a>
          </section>
        </div>
      </Content>
    </Container>
  );
}
