import {
  SunDim,
  House,
  FileCode,
  Student,
  BriefcaseMetal,
  Needle,
  EnvelopeSimple,
  Moon,
} from "phosphor-react";
import { useState } from "react";
import { Container, Content } from "./styles";

export function Navbar() {
  const [navItesmSelected, setNavItemSelected] = useState("Home");
  const [theme, setTheme] = useState("light");
  console.log(theme);
  return (
    <Container>
      <Content themeStyles={navItesmSelected} tema={theme}>
        <div className="theme">
          {theme === "light" ? (
            <Moon size={34} onClick={() => setTheme("dark")} />
          ) : (
            <SunDim size={34} onClick={() => setTheme("light")} />
          )}
        </div>
        <div className="nav-items">
          <section>
            <div className="content-home">
              <div className="info">Home</div>
              <div className="triangulo"></div>
            </div>
            <a className="Home" onClick={() => setNavItemSelected("Home")}>
              <House size={24} />
            </a>
          </section>
          <section>
            <div className="content-projects">
              <div className="info">Projects</div>
              <div className="triangulo"></div>
            </div>
            <a
              className="Projects"
              onClick={() => setNavItemSelected("Projects")}
            >
              <FileCode size={24} />
            </a>
          </section>
          <section>
            <div className="content-student">
              <div className="info">Student</div>
              <div className="triangulo"></div>
            </div>
            <a
              className="Student"
              onClick={() => setNavItemSelected("Student")}
            >
              <Student size={24} />
            </a>
          </section>
          <section>
            <div className="content-job">
              <div className="info">Job</div>
              <div className="triangulo"></div>
            </div>
            <a className="Job" onClick={() => setNavItemSelected("Job")}>
              <BriefcaseMetal size={24} />
            </a>
          </section>
          <section>
            <div className="content-contact">
              <div className="info">Contact</div>
              <div className="triangulo"></div>
            </div>
            <a
              className="Contact"
              onClick={() => setNavItemSelected("Contact")}
            >
              <EnvelopeSimple size={24} />
            </a>
          </section>
        </div>
      </Content>
    </Container>
  );
}
