import React from 'react';
import styled from 'styled-components';

// Styled Components
const Container = styled.div`
  font-family: Arial, sans-serif;
`;

const Navbar = styled.nav`
  background-color: #333;
  padding: 1rem;
  color: white;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.div`
  font-size: 1.5rem;
`;

const Menu = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled.li`
  cursor: pointer;
`;

const HeroSection = styled.section`
  background-color: #f0f0f0;
  padding: 2rem;
  text-align: center;
`;

const AboutSection = styled.section`
  background-color: #fff;
  padding: 2rem;
`;

const ServicesSection = styled.section`
  background-color: #f0f0f0;
  padding: 2rem;
`;

const ContactSection = styled.section`
  background-color: #fff;
  padding: 2rem;
`;

const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
  text-align: center;
`;

// React Component
const App = () => {
  return (
    <Container>
      <Navbar>
        <Logo>Shahid Portfolio</Logo>
        <Menu>
          <MenuItem>Home</MenuItem>
          <MenuItem>About</MenuItem>
          <MenuItem>Services</MenuItem>
          <MenuItem>Contact</MenuItem>
        </Menu>
      </Navbar>
      <HeroSection>
        <img src="port\portfolio\src\components\images1\IMG20240104165509.jpg" alt="" />
        <h1>Welcome to My Portfolio</h1>
        <p>I am a junior developer in python </p>
      </HeroSection>
      <AboutSection>
        <h2>About Me</h2>
        <p>Highly motivated software developer with seeking a challenging role as a Junior Developer 
in a dynamic organization. Committed to development and enhancement of innovative 
software solutions. Demonstrated ability to deliver high quality code and continuously 
improving skills in a collaborative team environment.</p>
      </AboutSection>
      <ServicesSection>
        <h2>My Projects</h2>
        <p>Payment Invoices: Developed a system for generating payment links and sending 
invoices via email using Node.js and Stripe.</p>
        <p> Education Abroad Webpage: Designed a mini-project to provide study abroad 
information to students</p>
        <p>Hotel Billing System Project: Developed Hotel Billing System using C# ADO.NET and 
MS SQL, with modules for Food Details, Billing and Search operations.</p>
        <p> User Management System: Built using Node.js (Express, Sequelize), facilitating resource 
management in an organization.</p>
      </ServicesSection>
      <ContactSection>
        <h2>Contact Me</h2>
        <p>Email: mechrahman24@gmail.com</p>
        <p>Phone: +919514191124</p>
        <p>Linkedin: https://www.linkedin.com/in/shahid-ur</p>
      </ContactSection>
      <Footer>
        <p>Copyrights &copy; 2024 Shahid Ur Rahman.</p>
      </Footer>
    </Container>
  );
};

export default App;
