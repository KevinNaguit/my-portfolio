import React from "react";
import styled from "styled-components";
import slingAirScreenshot from "../images/slingAirScreenshot.png";

// Styled component for the projects section
const ProjectSection = styled.section`
  padding: 6rem;
  text-align: center;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

// Styled component for the heading
const Heading = styled.h2`
  font-family: "Courier New", Courier, monospace;
  font-size: 2.4rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
`;

// Styled component for wrapping project content
const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;

  @media (min-width: 769px) {
    flex-direction: row; /* Arrange items side by side on larger screens */
  }
`;

// Styled component for individual project items
const ProjectItem = styled.div`
  flex: 1;
  margin: 2rem 0;
  padding: 1rem;
  border: 2px solid #333;
  background-color: #f7f8f9;
  color: #333;
  text-align: left;
  line-height: 1.5;
  transition: border-radius 0.3s ease;

  &:hover {
    border-radius: 20px; /* Round edges on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Styled component for project images
const ProjectImage = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Styled component for project description
const ProjectDescription = styled.p`
  margin: 1rem 0 0;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

// Styled component for the future work section
const FutureWork = styled.div`
  flex: 1;
  margin: 2rem;
  padding: 1rem;
  border: 2px solid #333;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f7f8f9;
  transition: border-radius 0.3s ease;

  &:hover {
    border-radius: 20px; /* Round edges on hover */
  }

  @media (max-width: 768px) {
    width: 100%;
    margin: 1rem 0;
  }
`;

// Styled component for future work text
const FutureText = styled.p`
  font-size: 1.6rem;
  color: #333;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

// Function to display projects and future work
const Projects = () => {
  return (
    <ProjectSection id="projects">
      <Heading>Projects</Heading>
      <ContentWrapper>
        <ProjectItem>
          <ProjectImage src={slingAirScreenshot} alt="Slingair Project" />
          <ProjectDescription>
            Slingair Project: This is a group project where we built a flight
            reservation system using JavaScript, Node.js and MongoDB.
          </ProjectDescription>
          <ProjectDescription>
            The project lets users select seats, enter their information and
            confirm their reservations. It was a great way to learn how to work
            on both the front end and the back end, including connecting to a
            database to save and manage data.
          </ProjectDescription>
        </ProjectItem>
        <FutureWork>
          <FutureText>Stay Tuned for New Projects...</FutureText>
        </FutureWork>
      </ContentWrapper>
    </ProjectSection>
  );
};

export default Projects;
