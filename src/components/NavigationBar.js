import React, { useState, useEffect } from "react";
import styled from "styled-components";

// Styled component for the navigation bar
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #f7f8f9;
  color: #292929;
  font-weight: bold;
  width: 100%;
  position: fixed;
  top: 0;
  z-index: 10;
  transition: box-shadow 0.3s ease;

  // Add shadow when scrolled
  ${({ $scrolled }) =>
    $scrolled &&
    `
    box-shadow: 0 2px 1px -1px #979A9B; 
  `}

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
  }
`;

// Styled component for the list of navigation items
const NavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0 4rem;
  height: 2rem;
`;

// Styled  component for the home link (my name)
const NavItemHome = styled.a`
  font-family: "Courier New", Courier, monospace;
  font-size: 1.2rem;
  text-decoration: none;
  cursor: pointer;
  transition: font-size 0.08s ease, color 0.08s ease;

  &:hover {
    font-size: 1.4rem;
    font-weight: bolder;
    color: #585858;
  }
`;

// Styled component for the navigation links
const NavItem = styled.a`
  text-decoration: none;
  cursor: pointer;
  transition: font-size 0.08s ease, color 0.08s ease;

  &:hover {
    font-size: 1.1rem;
    color: #585858;
  }
`;

// Function for the navigation bar
const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Function to handle scroll events
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true); // Set scrolled to true if scrolled more than 50px
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav $scrolled={scrolled}>
      <NavItemHome href="#home">Kevin Naguit</NavItemHome>
      <NavList>
        <li>
          <NavItem href="#home">Home</NavItem>
        </li>
        <li>
          <NavItem href="#about">About</NavItem>
        </li>
        <li>
          <NavItem href="#technologies">Tech</NavItem>
        </li>
        <li>
          <NavItem href="#projects">Projects</NavItem>
        </li>
        <li>
          <NavItem href="#contact">Contact</NavItem>
        </li>
      </NavList>
    </Nav>
  );
};

export default NavigationBar;
