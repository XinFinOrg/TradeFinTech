import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import {
  logo,
  round1,
  round2,
  feature1,
  feature2,
  feature3,
  feature4,
  diary,
  star,
  bank,
  logo_high,
  logo_high_xdc,
} from "../assets/images";

const featureArray = [
   {
    title: "Trade Finance Digitization",
    image: feature4,
    desc: "Experience significant benefits, including faster & more transparent transactions, reduced risk of errors, improved compliance, and increased overall efficiency.",
  },
  {
    title: "Cross-Border Instant Payment Settlements",
    image: feature1,
    desc: "Seamlessly execute cross-border transactions with unprecedented speed and efficiency.",
  },
  {
    title: "Enterprise-Grade Web3 Solutions",
    image: feature2,
    desc: "Stay ahead of the curve with our cutting-edge Web3 solutions tailored to the specific needs of banks.",
  },
  {
    title: "Security and Compliance",
    image: feature3,
    desc: "We understand the critical importance of security and compliance in the financial sector.",
  },
 
];

const Home = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [submittedData, setSubmittedData] = useState(
    JSON.parse(localStorage.getItem("submittedData")) || null
  );

  useEffect(() => {
    localStorage.setItem("submittedData", JSON.stringify(submittedData));
  }, [submittedData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Handle the form data as needed
    console.log("Form data submitted:", formData);

    // Update state to display submitted data
    setSubmittedData(formData);

    // Optionally, reset the form data after submission
    setFormData({
      name: "",
      email: "",
      number: "",
      message: "",
    });
  };


  return (
    <div>
      {/* Navbar */}

      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="navbar"
      >
        <Container className="landing-container">
          <Navbar.Brand href="#home">
            <img src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="navbar-container"
          >
            <Nav className="mx-auto navlist">
              <Nav.Link href="#home" className="nav-link">
                Home
              </Nav.Link>
              {/* <Nav.Link href="#commitment" className="nav-link">
                Our Commitment
              </Nav.Link> */}
              <Nav.Link href="#features" className="nav-link">
                Features
              </Nav.Link>
              <Nav.Link href="#choose" className="nav-link">
                Why Choose Us
              </Nav.Link>
              <Nav.Link href="#aboutus" className="nav-link">
                About Us
              </Nav.Link>
              <Nav.Link href="#contact" className="nav-link">
                Contact Us
              </Nav.Link>
              {/* <Button variant="outline-primary" className="nav-btn">
                Join Now
              </Button> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Home */}

      <div id="home" className="home-section">
        <img src={round1} alt="" className="home_img left" />
        <div>
          <h1 className="home_title">
            "Empowering Banks and Financial Institutions with Cutting-Edge Enterprise-Grade Web3 Solutions for Seamless Operations."
          </h1>
          <div className="btn-section">
            <img src={star} alt="" className="home_star_img" />
            <div className="btn-container">
              {/* <Button className="btn-container_first-btn">White Paper</Button> */}
              {/* <Button className="btn-container_second-btn">Buy Token</Button> */}
            </div>
          </div>
        </div>
        <img src={round2} alt="" className="home_img right" />
      </div>

      {/* About Us */}

      <div id="aboutus" className="aboutus-section">
        <div className="aboutus_left-container">
          <h1 className="aboutus-title">About Us</h1>
          <h1 className="aboutus-title">
            TradeFinTech Powered By <span className="sub-text"> XDC Network</span>
          </h1>
          <p className="aboutus-desc">
          Welcome to our innovative platform dedicated on transforming global services for banks and financial institutions. At Tradefinetch, we specialize in providing the latest advancements in technology by offering robust enterprise-level Web3 solutions.
          </p>
          {/* <Button className="aboutus-btn">Read More {">>"}</Button> */}
        </div>
        <div className="aboutus_right-container">
          <div className="logo-overlay-one">
            <div className="logo-overlay-two">  
              <img src={logo} alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Our Commitment */}

      {/* <div id="commitment" className="commitment-section">
        <h1 className="commitment-title">Our Commitment</h1>
        <p className="commitment-desc">
        At the heart of our mission lies the commitment to empower banks and financial institutions with the tools they need to thrive in today's interconnected global economy. We understand the challenges faced by these entities in everyday business and emerging technologies. Therefore, we have developed a comprehensive suite of services that streamline and enhance business operations.
        </p>
        <Button className="commitment-btn">Read More {">>"}</Button>
      </div> */}

      {/* features */}

      <div id="features" className="features-section">
        <h1 className="features-title">
          Key <span className="sub-text">Features</span>
        </h1>
        <div className="features-container">
          {featureArray.map((item, index) => (
            <div className="feature" key={index}>
              <img src={item.image} alt="" className="feature-img" />
              <h2 className="feature-title">{item.title}</h2>
              <p className="feature-desc">{item.desc}</p>
              {/* <p className="readmore">Read More</p> */}
            </div>
          ))}
        </div>
      </div>

      {/* why choose us */}

      <div id="choose" className="choose-section">
        <h1 className="choose-title">
          Why Choose <span className="sub-text">TradeFinTech</span>
        </h1>
        <div className="chooseus-container">
          <div className="chooseus-left">
            <div className="logo-overlay-one">
              <div className="logo-overlay-two">
              <img src={bank} alt="" />
              </div>
            </div>
          </div>
          <div className="chooseus-right">
            <div className="faq">
              <div>
                <img src={diary} alt="" className="faq-icon" />
              </div>
              <div>
                <p className="faq-title">Unparalleled Expertise</p>
                <p className="faq-desc">
                  Our team brings together a wealth of experience in both the
                  financial and technological realms,  allowing us to offer
                  solutions that are both innovative.
                </p>
              </div>
            </div>
            <div className="faq">
              <div>
                <img src={diary} alt="" className="faq-icon" />
              </div>
              <div>
                <p className="faq-title">Global Reach</p>
                <p className="faq-desc">
                Embracing a world without boundaries, our extensive solutions seamlessly unite technology
                and the best business practices, empowering enterprises worldwide.
                </p>
              </div>
            </div>
            <div className="faq">
              <div>
                <img src={diary} alt="" className="faq-icon" />
              </div>
              <div>
                <p className="faq-title">Future-Ready</p>
                <p className="faq-desc">
                  As pioneers in the field, we are constantly exploring new
                  possibilities and staying ahead of emerging trends to ensure
                  that you have access.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* contact us */}

      {/* contact us */}
      <div id="contact" className="contact-section">
        <h1 className="contact-title">
          Contact <span className="sub-text">Us</span>
        </h1>
        <form className="form-container" onSubmit={handleSubmit}>
          <div className="form-flex">
            <div className="form-control">
              <p>Full Name</p>
              <input
                type="text"
                name="name"
                className="input"
                placeholder="your full name here"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <p>Mobile Number</p>
              <input
                type="text"
                className="input"
                name="number"
                placeholder="Enter Your Number"
                value={formData.number}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="form-control">
            <p>Email</p>
            <input
              type="text"
              className="input"
              placeholder="Enter Your Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-control">
            <p>Comments</p>
            <input
              type="text"
              className="input"
              name="message"
              placeholder="Enter Your Answer"
              value={formData.message}
              onChange={handleChange}
            />
          </div>
          <Button type="submit" className="submit-btn">
            Submit
          </Button>
        </form>

        {/* Display submitted data
        {submittedData && (
          <div className="submitted-data">
            <h2>Submitted Data</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Number:</strong> {submittedData.number}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )} */}
      </div>

      {/* footer */}

<div className="footer">
  <p className="footer_p">
    <span>TradeFinTech Ltd</span><br />
    <span>Address: </span>N1002-N1003 Emirates Financial Towers, DIFC, Dubai, UAE<br />
    <span>Email ID:</span> <a href="mailto:info@tradefinex.org">info@tradefinex.org</a><br />
    <span>Telephone:</span>04 394 9900 <br />
    
 </p>
 <p className="copyright">
    Copyright@ 2023 <a href=" TradeFinex.org">TradeFinex</a>. All Rights Reserved.
  </p>
  </div>
     
    </div>
  );
  };


export default Home;
