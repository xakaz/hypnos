import React, { Component } from "react";
import Hypnos from '../assets/containersAssets/accueil/hypnos.jpg'
import Carousel from '../components/Carousel'
import Card from "../components/Card";

class Accueil extends Component {

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center p-2 text-white display-1">Bienvenue</h1>
          <Carousel />

          {/** CARDS */}
          <div className="d-flex justify-content-evenly flex-wrap my-5">
            {/* {
              this.state.accueil && this.state.accueil.map(data => {
                return (
                  <Card image={require('../../../assets/Home/' + data.accueil_image)}
                    title={data.accueil_titre}
                    description={data.accueil_description}
                    key={data.accueil_id} />
                )
              })
            } */}
            <Card/>
            <Card/>
            <Card/>
          </div>

          {/** TEXTE */}
          <div className="my-5 border p-3 border-light rounded row d-flex justify-content-start">
            <div className="col-2 ">
              <img src={Hypnos} alt="Hypnos dieu du sommeil" className="rounded-circle img-fluid" />
            </div>
            <p className="text-white p-3 col-10 d-flex align-items-center">
              "Hypnos est la personnification du sommeil (hypnos en grec), pouvoir nocturne et troublant par excellence.
              <br /><br />Il est né de Nyx, la Nuit, elle-même issue du Chaos originel, qui a enfanté sans aucune union une série de puissances menaçantes, comme le raconte Hésiode (env. 750 avant J.-C.)."
            </p>
          </div>


        </div>
      </>
    );

  }
}

export default Accueil;