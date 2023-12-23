import React, { useState, useEffect } from 'react';
import './App.css';
import ignition1 from "./assest/ignition_swithch_1.jpeg"
import ignition2 from "./assest/ignition_swithch_2.jpeg"
import ignition3 from "./assest/ignition_swithch_3.jpeg"
import ignition4 from "./assest/ignition_swithch_4.jpeg"
import ignition5 from "./assest/ignition_swithch_5.jpeg"
import Lever_1 from "./assest/Lever_1.jpeg"
import Lever_2 from "./assest/Lever_2.jpeg"
import Lever_3 from "./assest/Lever_3.jpeg"
import Lever_4 from "./assest/Lever_4.jpeg"
import Lever_5 from "./assest/Lever_5.jpeg"
import petrol_tank_1 from "./assest/petroltank1.jpeg"
import petrol_tank_2 from "./assest/petroltank2.jpeg"
import petrol_tank_3 from "./assest/petroltank3.jpeg"
import petrol_tank_4 from "./assest/petroltank4.jpeg"
import petrol_tank_5 from "./assest/petroltank5.jpeg"
import yoke_1 from "./assest/yoke1.jpeg"
import yoke_2 from "./assest/yoke2.jpeg"
import logo from "./assest/Comapany logo.jpeg"

const productData = [
  {
    id: 1,
    name: 'Ignition Switch',
    images: [
      ignition1,
      ignition2,
      ignition3,
      ignition4,
      ignition5,
    ],
  },
  {
    id: 2,
    name: 'Lever',
    images: [
      Lever_1,
      Lever_2,
      Lever_3,
      Lever_4,
      Lever_5
    ],
  },
  {
    id: 3,
    name: 'Petrol Tank',
    images: [
      petrol_tank_1,
      petrol_tank_2,
      petrol_tank_3,
      petrol_tank_4,
      petrol_tank_5
    ],
  },
  {
    id: 4,
    name: 'Yoke',
    images: [
      yoke_1,
      yoke_2
    ],
  },
];

function App() {
  const [currentProductIndex, setCurrentProductIndex] = useState(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % productData[currentProductIndex].images.length
      );
    }, 2000);

    return () => clearInterval(intervalId);
  }, [currentProductIndex]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % productData[currentProductIndex].images.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0
        ? productData[currentProductIndex].images.length - 1
        : prevIndex - 1
    );
  };

  const changeProduct = (newProductIndex) => {
    setCurrentProductIndex(newProductIndex);
    setCurrentImageIndex(0);
  };

  return (
    <div className="App">
      <header className="header-container">
        <div className="logo-container">
          <img src={logo} alt="Company Logo" className="logo" />
        </div>
        <div className="company-details">
          <h1 className="company-name">Customer - Sandhar Automotive</h1>
          <p className="company-info">
            <strong>Name of Company:</strong> Bhandari Enterprises<br />
            <strong>Address:</strong> Guru Nanak Nagar, Meerut<br />
            <strong>Name of Proprietor:</strong> Abhishek Bhandari<br />
            <strong>Email:</strong> bhandari.abhishek62@yahoo.com<br />
            <strong>Weekly Off:</strong> Sunday<br />
            <strong>Deals In:</strong> Ignition switch, Petrol tank cap, Lock sets, Brake lever, Clutch for Two-wheeler.<br />
            <strong>Area of Factory:</strong> 4000 sq feet covered area<br />
            <strong>Machinery Installed:</strong>
            <ul>
              <li>J K plastic machine for injection moulding</li>
              <li>Atul drilling machine for key surfacing</li>
              <li>Voltas drill machine for drilling</li>
              <li>J M A key bitting for key bitting</li>
              <li>Powder Coating Plant</li>
            </ul>
            <strong>Our Customers:</strong>
            <ul>
              <li>Advik Hi-tech Pvt Ltd</li>
              <li>Deutsche Swiss</li>
              <li>Moped House Lucknow</li>
              <li>Various dealers in UP, Punjab & Nai Wala Bagh, New Delhi</li>
            </ul>
            <strong>Annual Turnover:</strong> Approximately Rs 5 Crore<br />
          </p>
        </div>
      </header>


      {productData.map((product, index) => (
        <section key={product.id} className="product-section">
          <h2>{product.name}</h2>
          <div className="image-container">
            <div className="nav-icon nav-icon-left" onClick={prevImage}>
              <span>&#9664;</span>
            </div>
            <img
              src={product.images[currentImageIndex]}
              alt={`Product ${product.id}`}
              className="product-image"
            />
            <div className="nav-icon nav-icon-right" onClick={nextImage}>
              <span>&#9654;</span>
            </div>
          </div>
          <div className="product-navigation">
            {productData.map((_, i) => (
              <span
                key={i}
                className={currentProductIndex === i ? 'active' : ''}
                onClick={() => changeProduct(i)}
              ></span>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

export default App;
