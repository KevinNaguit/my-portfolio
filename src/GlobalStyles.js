import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
    scroll-behavior: smooth; // Enables smooth scrolling for the entire page
}

body {
    margin: 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #f6f0de;
    color: #333;
}

a {
    text-decoration: none;
    color: inherit;
}

ul {
    list-style: none;
    padding: 0;
}

section {
    padding: 4rem 2rem;
    min-height: 50vh;

    // A common breakpoint for tablets or small laptops
    @media (max-width: 768px) {
        padding: 3rem 1rem; /* Reduce padding for smaller screens */
    }

    // A common breakpoint for very small screens, like smartphones
    @media (max-width: 375px) {
        padding: 2rem 0.5rem; /* Further reduce padding for very small screens */
    }
}

`;

export default GlobalStyle;
