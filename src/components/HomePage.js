import React, { useEffect, useState } from "react";
import styled from "styled-components";

// Styled component for the hero section
const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 90vh;
  background-color: #f6f0de;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem;
  }
`;

// Styled component for the main heading
const HeroText = styled.h1`
  font-family: "Courier New", Courier, monospace;
  font-size: 3.5rem;
  font-weight: bold;
  color: #42a676;
  margin: 0.5rem 7rem;

  opacity: 0; // Start with text invisible
  transition: opacity 1s ease-in-out; // Smooth transition for fade-in effect
  transition-delay: 0.25s;
`;

// Styled component for the tagline text
const Tagline = styled.p`
  font-family: "Times New Roman", Times, serif;
  font-size: 2.5rem;
  font-weight: 700;
  margin: 0.5rem 7rem;
  max-width: 740px;
  line-height: 1.2;

  opacity: 0;
  transition: opacity 1s ease-in-out;
  transition-delay: 0.5s;
`;

// Styled component for dynamically styled words
const DynamicWord = styled.span`
  display: inline-block;
  cursor: pointer;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(-5deg); /* Rotate left on hover */
  }

  &:active {
    transform: rotate(5deg); /* Rotate right when clicked */
  }
`;

// Styled component for responsive words
const ResponsiveWord = styled.span`
  transition: color 0.02s ease;

  &:hover {
    color: #f5b144; /* Change colour on hover */
  }
`;

// Function for the home page
const HomePage = () => {
  const [heroFadeIn, setHeroFadeIn] = useState(false);
  const [taglineFadeIn, setTaglineFadeIn] = useState(false);

  useEffect(() => {
    setHeroFadeIn(true); // Fade in hero text immediately
    const timer = setTimeout(() => setTaglineFadeIn(true), 500); // Fade in tagline text after 0.5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <HeroSection id="home">
      <HeroText style={{ opacity: heroFadeIn ? 1 : 0 }}>
        Hi! My name's Kevin.
      </HeroText>
      <Tagline style={{ opacity: taglineFadeIn ? 1 : 0 }}>
        I’m a budding web developer, learning how to create websites that are
        both <DynamicWord>dynamic</DynamicWord> and{" "}
        <ResponsiveWord>responsive</ResponsiveWord>.
      </Tagline>
      <Tagline style={{ opacity: taglineFadeIn ? 1 : 0 }}>
        I'm passionate about building{" "}
        <ResponsiveWord>functional</ResponsiveWord> and{" "}
        <ResponsiveWord>engaging</ResponsiveWord> user experiences.
      </Tagline>
      <Tagline style={{ opacity: taglineFadeIn ? 1 : 0 }}>
        I look forward to sharing my progress and work with you as I continue to
        grow in this field.
      </Tagline>
    </HeroSection>
  );
};

export default HomePage;
