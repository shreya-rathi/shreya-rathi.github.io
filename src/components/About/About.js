import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeIn">
          <Image
            src="./circlepic.png"
            alt="shreya-headshot"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeIn">
            Hello! My name is <strong>Shreya Rathi</strong>. I'm originally from India and have been living in the USA for the past four years. During my time here, I gained valuable experience through various internships and student organization leadership roles, which greatly enhanced my work ethic, communication skills, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeIn">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue a degree in Computer Engineering at Purdue University. Despite its challenges, I remained determined and forged lasting friendships that supported me throughout this demanding program.
            Throughout my studies at Purdue, I had the opportunity to engage in fascinating projects. Notably, I contributed to the development of a wellness Chrome extension and worked on AI applications using RNNs and transformers, projects that showcased my skills in both frontend and backend development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeIn">
              Working collaboratively within a team towards a shared objective has been an incredibly rewarding and unique experience for me. This was especially evident during my internships at Goldman Sachs and Brimma Tech, where I worked on full-stack projects and integrated payment systems. I am eager to continue exploring exciting projects in the future, with a particular interest in AI, machine learning, and software development.
              <br /><br />
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeIn" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
