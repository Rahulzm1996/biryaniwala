import React from "react";
import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import Hero from "../assets/Images/Hero.jpg";
import "./HomeStyles.css";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <div className="headerContainer">
          <h1>Food website</h1>
          <p>best food in India</p>
          <Link to="/menu">
            <button>Order Now</button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
