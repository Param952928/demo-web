import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';

// Navbar component
const Navbar = () => {
  const navbarStyle = {
    background: '#333',
    padding: '10px',
    color: '#fff',
    marginBottom: '20px',
  };

  const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    padding: '0',
    margin: '0',
  };

  const liStyle = {
    marginRight: '10px',
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '18px',
    fontWeight: 'bold',
  };

  return (
    <nav style={navbarStyle}>
      <ul style={ulStyle}>
        <li style={liStyle}>
          <Link to="/" style={linkStyle}>
            Home
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/products" style={linkStyle}>
            Products
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/about" style={linkStyle}>
            About Us
          </Link>
        </li>
        <li style={liStyle}>
          <Link to="/contact" style={linkStyle}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
};

// Home component
const Home = () => {
  return (
    <div>
      <h1>Welcome to Our Business</h1>
      <p>
        We are dedicated to providing high-quality products and excellent
        services. Explore our website to learn more.
      </p>
    </div>
  );
};

// Products component
const Products = () => {
  const products = [
    { id: 1, name: 'Product A', description: 'Description for Product A' },
    { id: 2, name: 'Product B', description: 'Description for Product B' },
    { id: 3, name: 'Product C', description: 'Description for Product C' },
  ];

  return (
    <div>
      <h2>Our Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

// About component
const About = () => {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        We are a passionate team committed to delivering innovative solutions
        to our customers. Learn more about our journey and values.
      </p>
    </div>
  );
};

// Contact component
const Contact = () => {
  return (
    <div>
      <h2>Contact Us</h2>
      <p>
        Have questions or inquiries? Feel free to reach out to us through the
        contact details provided below.
      </p>
    </div>
  );
};

// App component
const App = () => {
  return (
    <div>
       
      <Router>
      <Navbar />
      <Routes>
        
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
    <h1>Welcome to Our Business</h1>
      <p>
        We are dedicated to providing high-quality products and excellent
        services. Explore our website to learn more.
      </p>
    </div>
    
  );
};

export default App;
