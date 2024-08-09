import React from "react";
import styled from "styled-components";
import me from "../images/me.png";

// Styled component for the about section
const AboutSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #f6f0de;
  padding: 10rem 2rem;
  margin: 0.5rem 7rem;

  @media (max-width: 768px) {
    padding: 1rem;
    margin: 0.5rem;
  }
`;

// Styled component to wrap text and image side by side
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  @media (min-width: 769px) {
    align-items: center;
    justify-content: space-between;
  }
`;

// Styled component for the text container
const TextContainer = styled.div`
  flex: 1;
  margin-right: 2rem;

  @media (min-width: 769px) {
    margin-right: 2rem;
    margin-bottom: 0;
  }
`;

// Styled component for heading
const Heading = styled.h2`
  font-family: "Courier New", Courier, monospace;
  font-size: 2.4rem;
  margin-bottom: 1.5rem;
`;

// Styled component for paragraphs
const Paragraph = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin: 1.5rem 0;
`;

// Styled component for the image
const Image = styled.img`
  width: 100%;
  max-width: 350px;
  height: auto;

  transition: border-radius 0.3s ease;

  &:hover {
    border-radius: 10%; /* Round the image corners on hover */
  }
`;

// Function for the "About Me" section
const AboutMe = () => {
  return (
    <AboutSection id="about">
      <Wrapper>
        <TextContainer>
          <Heading>About Me</Heading>
          <Paragraph>
            I’m currently learning web development through an in-depth course.
            Even though I’m just starting out, I’ve already had the chance to
            work on projects that have really made me excited about creating
            websites that are both functional and visually appealing. I
            especially enjoy the creative side of web development, where I can
            bring ideas to life through design.
          </Paragraph>
          <Paragraph>
            As I keep learning, I want to build websites that not only work well
            but also look great. I’m focused on improving my skills by learning
            from each experience, taking feedback to heart and facing new
            challenges head-on. I also enjoy working with others to create the
            best possible results.
          </Paragraph>
          <Paragraph>
            When I’m not coding, you’ll find me biking around the city,
            experimenting with new recipes or enjoying the outdoors.
          </Paragraph>
        </TextContainer>
        <Image src={me} alt="About Me Profile Picture" />
      </Wrapper>
    </AboutSection>
  );
};

export default AboutMe;
