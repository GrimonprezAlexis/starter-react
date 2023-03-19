// Home.jsx

import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>Welcome to my home page!</p>
      <Link to={'/about'}>Go to about page!</Link>
    </div>
  );
};

export default Home;
