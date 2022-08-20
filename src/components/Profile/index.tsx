import {
  FacebookLogo,
  InstagramLogo,
  TwitterLogo,
  LinkedinLogo,
  WhatsappLogo,
  Envelope,
  Browsers,
  DownloadSimple,
  List,
  X,
} from "phosphor-react";
import {
  Container,
  Content,
  ProfileContainer,
  Midias,
  Languages,
  Infos,
  Skills,
  ExtraSkills,
  Section,
  Button,
  ButtonView,
  ButtonClose,
} from "./styles";
import {
  profileData,
  languagesData,
  skillsData,
} from "../../assets/data/profile";
import { useState } from "react";

export function Profile() {
  const [showIsNav, setShowIsNav] = useState(true);
  return (
    <Container showIsNav={showIsNav}>
      <ButtonView onClick={() => setShowIsNav(true)} showIsNav={showIsNav}>
        <List size={24} weight="bold" />
      </ButtonView>
      <ButtonClose onClick={() => setShowIsNav(false)} showIsNav={showIsNav}>
        <X size={24} weight="bold" />
      </ButtonClose>
      <Content showIsNav={showIsNav}>
        <ProfileContainer>
          <div className="profile">
            <img
              src="https://avatars.githubusercontent.com/u/64738844?v=4"
              alt=""
            />
            <div className="profile-status"></div>
          </div>
          <h4>Gustavo Oliveira</h4>
          <span>SOFTWARE DEVELOPER</span>
          <Midias>
            <a href="#" className="midias-item">
              <FacebookLogo size={18} weight="fill" />
            </a>
            <a href="#" className="midias-item">
              <InstagramLogo size={18} weight="fill" />
            </a>
            <a href="#" className="midias-item">
              <TwitterLogo size={18} weight="fill" />
            </a>
            <a href="#" className="midias-item">
              <LinkedinLogo size={18} weight="fill" />
            </a>
            <a href="#" className="midias-item">
              <WhatsappLogo size={18} weight="fill" />
            </a>
            <a href="#" className="midias-item">
              <Envelope size={18} weight="fill" />
            </a>
          </Midias>
          <Infos>
            {profileData.map((item) => {
              return (
                <div key={item.id}>
                  <span className="info-yellow">{item.name}</span>
                  <span
                    style={{
                      color: `${
                        item.info === "Available" ? "#7EB942" : "#2B2B2B"
                      }`,
                    }}
                  >
                    {item.info}
                  </span>
                </div>
              );
            })}
          </Infos>
        </ProfileContainer>
        <Section>
          <Languages>
            <h4>Languages</h4>
            {languagesData.map((item) => {
              return (
                <section key={item.id}>
                  <div>
                    <span>{item.language}</span>
                    <span>{item.nivel}%</span>
                  </div>
                  <progress value={item.nivel} max="100" />
                </section>
              );
            })}
          </Languages>
          <Skills>
            <div className="contentSkills">
              <h4>Skills</h4>
              {skillsData.map((item) => {
                return (
                  <section key={item.id}>
                    <div>
                      <span>{item.skills}</span>
                      <span>{item.nivel}%</span>
                    </div>
                    <progress value={item.nivel} max="100" />
                  </section>
                );
              })}
            </div>
          </Skills>
          <ExtraSkills>
            <h4>Extra Skills</h4>
            <div>
              <Browsers size={18} weight="thin" color="#FFB400" />
              <span>Bootstrap, Materialize</span>
            </div>
            <div>
              <Browsers size={18} weight="thin" color="#FFB400" />
              <span>Docker, Kubernetes</span>
            </div>
            <div>
              <Browsers size={18} weight="thin" color="#FFB400" />
              <span>AWS, Azure</span>
            </div>
            <div>
              <Browsers size={18} weight="thin" color="#FFB400" />
              <span>Jest, Redux</span>
            </div>
          </ExtraSkills>
          <Button>
            Download cv
            <DownloadSimple size={18} weight="bold" />
          </Button>
        </Section>
      </Content>
    </Container>
  );
}
