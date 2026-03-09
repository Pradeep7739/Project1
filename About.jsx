import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./About.css";
import blog3 from "../Assets/blog3.jpeg";
import s1 from "../Assets/s1.jpg";
import s2 from "../Assets/s2.jpg";
import s3 from "../Assets/s3.jpg";
import uiux from "../Assets/uiux.jpg";
import web1 from "../Assets/web1.jpg";
import ui from "../Assets/ui.png";
import web from "../Assets/web.png";
import app from "../Assets/app.png";
import dig from "../Assets/dig.png";
import online from "../Assets/online.png";
import m1 from "../Assets/m1.png";

import { Link} from "react-router-dom";

export default function Hero() {
  const [progress, setProgress] = useState({
    card1: 0,
    card2: 0,
    card3: 0,
  });

  useEffect(() => {
    const interval1 = setInterval(() => {
      setProgress((prev) => {
        if (prev.card1 >= 95) {
          clearInterval(interval1);
          return prev;
        }
        return { ...prev, card1: prev.card1 + 1 };
      });
    }, 50);

    const interval2 = setInterval(() => {
      setProgress((prev) => {
        if (prev.card2 >= 85) {
          clearInterval(interval2);
          return prev;
        }
        return { ...prev, card2: prev.card2 + 1 };
      });
    }, 60);

    const interval3 = setInterval(() => {
      setProgress((prev) => {
        if (prev.card3 >= 88) {
          clearInterval(interval3);
          return prev;
        }
        return { ...prev, card3: prev.card3 + 1 };
      });
    }, 70);

    return () => {
      clearInterval(interval1);
      clearInterval(interval2);
      clearInterval(interval3);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100, damping: 12 },
    },
  };

  const [isHeroVisible, setIsHeroVisible] = useState(false);

  useEffect(() => {
    const heroElement = document.getElementById("hero");
    const checkHeroVisibility = () => {
      if (heroElement) {
        const rect = heroElement.getBoundingClientRect();

        const isVisible = rect.top <= 200 && rect.bottom >= 0;
        setIsHeroVisible(isVisible);
      }
    };

    window.addEventListener("scroll", checkHeroVisibility);
    checkHeroVisibility();

    return () => window.removeEventListener("scroll", checkHeroVisibility);
  }, []);


  const features = [
    {
      
      title: "Affordable & Scalable",
      text: "We offer flexible packages suitable for businesses of all sizes.",
    },
    {
      
      title: "Commitment to Excellence",
      text: "Quality, precision, and performance in everything we do.",
    },
    {
      
      title: "24/7 Support",
      text: "Our dedicated support team is always here to assist you with any challenges.",
    },
  ];


  return (
    <>
      <div className="primary-box">
        <nav className={`mini-navbar ${isHeroVisible ? "hidden" : ""}`}>
          <div className="nav-links">
            <button className="nav-btn">Home</button>
            <button className="nav-btn">Services</button>
            <button className="nav-btn"><Link to="/Privacy">Privacy</Link></button>
            <button className="nav-btn">Contact</button>
            <button className="nav-btn">FAQs</button>
          </div>
        </nav>

        <div id="hero" style={{ backgroundImage: `url(${blog3})` }}>
          <div className="overlay"></div>

          <div className="hero-content">
            <motion.h1
              className="title"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}>
              CodeXConquer
            </motion.h1>

            <motion.p
              className="text"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              viewport={{ once: true }}>
              Your trusted technology solutions provider specializing in app
              development, digital marketing, and web development services for
              businesses of all sizes.
            </motion.p>

            <motion.a
              href="https://codexconquer.com/contact/"
              className="btn"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.1 }}
              viewport={{ once: true }}>
              Get in Touch
            </motion.a>
          </div>
        </div>
      </div>

      <div className="body-wrapper">
        <div className="body-container">
          <motion.div
            className="story-card"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
            viewport={{ once: true }}>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}>
              Our Story
            </motion.h1>

            <motion.p
              className="subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}>
              How we started and our journey to becoming a leading technology
              solutions provider.
            </motion.p>

            <motion.p
              className="description"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              viewport={{ once: true }}>
              At CodeXConquer, we believe technology should simplify challenges
              and drive growth. We have helped hundreds of brands across
              e-commerce, education, healthcare, and fintech build innovative,
              secure, and results-driven solutions. We combine creativity,
              technical expertise, and strategy to deliver high-performing,
              visually appealing solutions. We prioritize transparency, client
              satisfaction, and long-term partnerships to achieve client goals.
            </motion.p>

            <motion.a
              href="https://codexconquer.com/services/"
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(5, 94, 210, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              viewport={{ once: true }}>
              Get Services
              <span className="btn-arrow">→</span>
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            viewport={{ once: true }}
            id="carouselExampleAutoplaying"
            className="carousel slide mt-5"
            data-bs-ride="carousel ">
            <div className="carousel-inner rounded    hover:scale-105 transition-transform duration-300">
              <div className="carousel-item active ">
                <img src={web1} className="d-block h-100 w-100" alt="Web Development" />
                 <h4 className="c-title d-flex mt-3 ml-1 text-white  "><img className="c-img  " src={web} alt="Web Development" />Web Development</h4>
                <p className="c-description text-center mt-1 ml-1 text-white  ">
                  We offer end-to-end website development services for businesses, from concept to launch and beyond.
                </p>
                <button className="button" >Explore</button>
              </div>
              <div className="carousel-item">
                <img src={uiux} className="d-block h-100 w-100" alt="UI/UX Design" />
                <h4 className="c-title d-flex  mt-3 ml-1 text-white"><img className="c-img" src={ui} alt="UI/UX Design" />UI/UX Design</h4>
                <p className="c-description text-center mt-1 ml-1 text-white  ">
                  We provide UI/UX design solutions focused on usability, clarity, and consistent user experience across digital platforms.
                </p>
                 <button className="button" >Explore</button>
              </div>
              <div className="carousel-item">
                <img src={web1} className="d-block h-100 w-100" alt="App Development" />
                <h4 className="c-title  d-flex  mt-3 ml-1 text-white"><img className="c-img" src={app} alt="App Development" />App Development</h4>
                <p className="c-description text-center mt-1 ml-1 text-white  ">
                  Our structured app development lifecycle ensures transparency, quality, and timely delivery.
                </p>
                 <button className="button" >Explore</button>
              </div>
              <div className="carousel-item">
                <img src={web1} className="d-block h-100 w-100" alt="Digital Marketing" />
                <h4 className="c-title d-flex  mt-3 ml-1 text-white"><img className="c-img" src={dig} alt="Digital Marketing" />Digital Marketing</h4>
                <p className="c-description text-center mt-1 ml-1 text-white  ">
                  We offer comprehensive solutions designed to increase your visibility, generate qualified leads, and maximize your return on investment.
                </p>
                 <button className="button" >Explore</button>
              </div>
              <div className="carousel-item">
                <img src={web1} className="d-block h-100 w-100" alt="Online Courses" />
                <h4 className="c-title d-flex mt-3 ml-1 text-white"><img className="c-img" src={online} alt="Online Courses" />Online Courses</h4>
                <p className="c-description text-center mt-1 ml-1 text-white  ">
                  Learn in-demand skills with structured, industry-relevant programs.
                </p>
                 <button className="button" >Explore</button>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="prev">
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next "
              type="button"
              data-bs-target="#carouselExampleAutoplaying"
              data-bs-slide="next">
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="why-choose-container"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}>
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}>
          <h1>WHY CHOOSE CODEXCONQUER</h1>
        </motion.div>

        <div className="feature-grid">
          <motion.div
            className="feature-card"
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}>
            <div className="card-image">
              <img src={s1} alt="Experienced Team" />
              <div className="image-overlay" />
            </div>
            <div className="card-content">
              <h3>Experienced Team</h3>
              <p>
                Our developers, marketers, and designers bring years of industry
                experience to the table.
              </p>
              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-percentage">{progress.card1}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.card1}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}>
            <div className="card-image">
              <img src={s2} alt="Customer-Centric Approach" />
              <div className="image-overlay" />
            </div>
            <div className="card-content">
              <h3>Customer-Centric Approach</h3>
              <p>
                We listen, understand, and tailor solutions that fit your
                business goals.
              </p>
              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-percentage">{progress.card2}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.card2}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="feature-card"
            whileHover={{ y: -15 }}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}>
            <div className="card-image">
              <img src={s3} alt="Cutting-Edge Technology" />
              <div className="image-overlay" />
            </div>
            <div className="card-content">
              <h3>Cutting-Edge Technology</h3>
              <p>
                We stay ahead of trends to ensure your digital solutions are
                modern and future ready.
              </p>
              <div className="progress-container">
                <div className="progress-header">
                  <span className="progress-percentage">{progress.card3}%</span>
                </div>
                <div className="progress-bar">
                  <motion.div
                    className="progress-fill"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress.card3}%` }}
                    transition={{ duration: 1 }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <motion.section
  style={{
    padding: "clamp(3rem,6vw,6rem) 1rem",
    background: "linear-gradient(60deg,#1b1c35, #391a3d)",
    position: "relative",
    overflow: "hidden",
  }}
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  {/* Glow Background */}
  <div
    style={{
      position: "absolute",
      width: "500px",
      height: "500px",
      background: "radial-gradient(circle,#5b5fff33,transparent)",
      top: "-200px",
      left: "-200px",
      filter: "blur(80px)",
    }}
  />

  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
      gap: "clamp(2rem,5vw,4rem)",
      alignItems: "center",
    }}
  >
    {/* LEFT CONTENT */}
    <div>
      <motion.span
        style={{
          background: "#f5e0ff",
          color: "linear-gradient(135deg, #eb5c18 0%, #f95055 45.72%, #ca2db8 100%)",
          padding: "6px 14px",
          borderRadius: "50px",
          fontWeight: 600,
          fontSize: "14px",
          display: "inline-block",
          // marginBottom: "0px",
        }}
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        OVER 100+ CLIENTS
      </motion.span>

      <motion.h2
        style={{
          fontSize: "clamp(1.8rem,5vw,3rem)",
          fontWeight:"bold",
          color: "white",
          fontFamily: "play",
          lineHeight: 1.3,
          marginBottom: "20px",
        }}
      >
        Discover What Makes Us The Preferred Technology Partner For Businesses
        Worldwide
      </motion.h2>

      {/* Image */}
      <motion.div
        className="feature-image"
        style={{ marginBottom: "30px" }}
      >
        <img
          src={m1}
          alt="Feature"
          style={{
            width: "100%",
            maxWidth: "420px",
            borderRadius: "12px",
          }}
        />
      </motion.div>

      {/* Stats */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "60px",
          color: "white",
        }}
      >
        <div>
          <h3 style={{ fontSize: "28px", color: "white" }}>120+</h3>
          <p style={{ fontSize: "14px", color: "#9ca3af" }}>Projects</p>
        </div>

        <div>
          <h3 style={{ fontSize: "28px", color: "white" }}>95%</h3>
          <p style={{ fontSize: "14px", color: "#9ca3af" }}>Client Success</p>
        </div>

        <div>
          <h3 style={{ fontSize: "28px", color: "white" }}>24/7</h3>
          <p style={{ fontSize: "14px", color: "#9ca3af" }}>Support</p>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE FEATURES */}
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
      }}
    >
      {features.map((item, index) => (
        <motion.div
          key={index}
          whileHover={{
            y: -8,
            scale: 1.02,
          }}
          style={{
            display: "flex",
            gap: "16px",
            background: "linear-gradient(135deg, #0c0d29 0%, #381f4e 45.72%, #4e1335 100%)",
            backdropFilter: "blur(5px)",
            padding: "clamp(16px,2vw,22px)",
            borderRadius: "14px",
            border: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <div style={{ fontSize: "26px" }}>{item.icon}</div>

          <div>
            <h4
              style={{
                background: "linear-gradient(90deg, #5956f0 0%, #f95055 45.72%, #ca2db8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                marginBottom: "6px",
                fontSize: "24px",
              }}
            >
              {item.title}
            </h4>

            <p
              style={{
                color: "white",
                fontSize: "17px",
                lineHeight: "2",
              }}
            >
              {item.text}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.section>




      <div className="header">
        <h2>Our Vision & Mission</h2>
        <p className="subhead">
          Guiding principles that drive everything we do.
        </p>

        <div className="cards-grid">
          <div className="card vision">
            <div className="card-number">1</div>
            <h3>Our Vision</h3>
            <p className="card-description">
              To empower businesses by transforming innovative ideas into
              seamless digital experiences that drive growth.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span> Digital Transformation
              </li>
              <li>
                <span className="check-icon">✓</span> Business Growth
              </li>
              <li>
                <span className="check-icon">✓</span> Seamless Experience
              </li>
            </ul>
          </div>

          <div className="card mission">
            <div className="card-number">2</div>
            <h3>Our Mission</h3>
            <p className="card-description">
              To deliver high quality digital solutions that help businesses
              grow, stay competitive, & succeed in a rapidly changing world.
            </p>
            <ul className="feature-list">
              <li>
                <span className="check-icon">✓</span> Quality Digital Solutions
              </li>
              <li>
                <span className="check-icon">✓</span> Business Efficiency
              </li>
              <li>
                <span className="check-icon">✓</span> Customer Focus
              </li>
            </ul>
          </div>
        </div>

        <motion.a
          href="https://codexconquer.com/contactus/"
          className="btn-primary"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(5, 94, 210, 0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          viewport={{ once: true }}>
          GET IN TOUCH TODAY
          <span className="btn-arrow">→</span>
        </motion.a>
      </div>
    </>
  );
}
