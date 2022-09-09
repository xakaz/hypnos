import React from "react";
import BedRoom from '../assets/componentsAssets/carousel/bedroom.webp'
import BedRoom2 from '../assets/componentsAssets/carousel/bedroom2.webp'
import Breakfast from '../assets/componentsAssets/carousel/breakfast.webp'

const component = () => (
  <div className="container-fluid">
    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner ">
        <div className="carousel-item active  ">
          <img src={BedRoom} className="rounded-bottom d-block w-75 img-fluid m-auto"  alt="chambre"/>
        </div>
        <div className="carousel-item ">
          <img src={BedRoom2} className="rounded-bottom d-block w-75 img-fluid m-auto"  alt="chambre"/>
        </div>
        <div className="carousel-item ">
          <img src={Breakfast} className="rounded-bottom d-block w-75 img-fluid m-auto"  alt="petit déjeuner"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);

export default component;