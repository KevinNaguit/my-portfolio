import React from "react";
import styled from "styled-components";

// Styled component for the technologies section
const TechSection = styled.section`
  padding: 6rem;
  text-align: center;
  padding: 8rem 2rem;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

// Styled component for the heading
const Heading = styled.h2`
  font-family: "Courier New", Courier, monospace;
  font-size: 2.4rem;
  margin-bottom: 6rem;
`;

// Styled component for the list of technologies
const TechList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
`;

// Styled component for individual technology items
const TechItem = styled.li`
  margin: 0.5rem 1rem;
  padding: 0.5rem 1rem;
  background-color: #f6f0de;
  color: #333;
  border: 2px solid #333;
  border-radius: 5px;
  font-size: 1.6rem;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    background-color: #333; /* Dark background on hover */
    color: #fff; /* White text colour on hover */
    transform: translateY(-5px); /* Lift the item up slightly */
  }
`;

// Function to display the list of technologies
const Technologies = () => {
  return (
    <TechSection id="technologies">
      <Heading>Tech Stack</Heading>
      <TechList>
        <TechItem>JavaScript</TechItem>
        <TechItem>React</TechItem>
        <TechItem>Node.js</TechItem>
        <TechItem>MongoDB</TechItem>
        <TechItem>HTML & CSS</TechItem>
      </TechList>
    </TechSection>
  );
};

export default Technologies;
