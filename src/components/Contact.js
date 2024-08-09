import React from "react";
import styled from "styled-components";

// Styled component for the contact section
const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 2rem;
  min-height: 25vh;
  background-color: #293235;
  color: #f7f8f9;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

// Styled component for the heading
const Heading = styled.h2`
  font-family: "Courier New", Courier, monospace;
  font-size: 2rem;
  margin: 0.5rem 7rem;
`;

// Styled component for the contact information
const ContactInfo = styled.p`
  font-size: 1.2rem;
  margin: 0.5rem 7rem;

  span {
    text-decoration: underline;
  }
`;

// Function to display contact information
const Contact = () => {
  return (
    <ContactSection id="contact">
      <Heading>Get in touch!</Heading>
      <ContactInfo>
        Based in Montréal, Canada. You can e-mail me at{" "}
        <span>kevin.naguit@gmail.com</span>
      </ContactInfo>
    </ContactSection>
  );
};

export default Contact;
