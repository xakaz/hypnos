import React, { Component } from "react";
import Hypnos from '../assets/containersAssets/accueil/hypnos.jpg'
import Carousel from '../components/Carousel'
import Card from "../components/Card";
import axios from "axios";
import { NavLink } from "react-router-dom";

class Accueil extends Component {

  state = {
    accueilCards : null
  }

  componentDidMount = () =>{
    document.title = "Accueil";

    axios.get("http://localhost/server/front/accueil")
      .then(response => {
        this.setState({ accueilCards: response.data });
      })
  }

  render() {
    return (
      <>
        <div className="container">
          <h1 className="text-center p-2 text-white display-1">Bienvenue</h1>
          <Carousel />

          {/** CARDS */}
          <div className="d-flex justify-content-evenly flex-wrap my-5">
            {
              this.state.accueilCards && this.state.accueilCards.map(accueilCard => {
                return (
                  <Card image={require('../assets/containersAssets/accueil/' + accueilCard.accueil_image)}
                    title={accueilCard.accueil_title}
                    description={accueilCard.accueil_description}
                    key={accueilCard.accueil_id} />
                )
              })
            } 
          </div>

          {/** TEXTE */}
          <p className="text-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil perferendis dicta eius omnis totam sint atque harum ad ratione quos blanditiis facere quam, delectus repellendus autem culpa sequi vel qui voluptates fugit? Iusto magni culpa explicabo, cum molestiae est consequuntur ullam a illo omnis natus provident iure. Magni quam voluptate iste tempora voluptas quia illo maxime alias delectus asperiores exercitationem ipsum, mollitia quasi tenetur cum consequuntur beatae, necessitatibus molestiae rerum nobis laudantium aperiam. Voluptate doloribus necessitatibus veritatis placeat laboriosam perferendis nulla ab saepe labore laudantium sunt minus tempore atque error, quia doloremque mollitia. Minima nemo ipsa eius consequatur velit!
          </p>
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