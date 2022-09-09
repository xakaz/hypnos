import React, { useState, useEffect } from "react";
import Hypnos from '../assets/containersAssets/accueil/hypnos.jpg'
import Carousel from '../components/Carousel'
import Card from "../components/Card";
import axios from "axios";
import { v4 as uuid_v4 } from "uuid"


export default function Accueil() {

  const [accueilCards, setAccueilCards] = useState(null)

  useEffect(() => {
    document.title = "Accueil";

    axios.get(process.env.REACT_APP_AXIOS_URL+"/front/services")
      .then(response => {
        let welcomeArr = []
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].service_role === "1") {
            welcomeArr.push(response.data[i])
            setAccueilCards(welcomeArr);
          }
        }
      })
  }, [])

  console.dir(accueilCards);

  return (
    <>
      <div className="container">
        <h1 className="text-center my-5 text-white display-3">HYPNOS - Bienvenue chez vous</h1>

        {/** CAROUSEL */}
        <Carousel />

        {/** CARDS */}
        <div className="d-flex justify-content-evenly flex-wrap my-5">
          {
            accueilCards && accueilCards.map(accueilCard => {
              return (
                <Card image={require('..//assets/containersAssets/accueil/' + accueilCard.service_image)}
                  title={accueilCard.service_titre}
                  description={accueilCard.service_description}
                  key={uuid_v4()} />
              )
            })
          }
        </div>

        {/** TEXTE */}
        <p className="text-light p-5 p-lg-0">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nihil perferendis dicta eius omnis totam sint atque harum ad ratione quos blanditiis facere quam, delectus repellendus autem culpa sequi vel qui voluptates fugit? Iusto magni culpa explicabo, cum molestiae est consequuntur ullam a illo omnis natus provident iure. Magni quam voluptate iste tempora voluptas quia illo maxime alias delectus asperiores exercitationem ipsum, mollitia quasi tenetur cum consequuntur beatae, necessitatibus molestiae rerum nobis laudantium aperiam. Voluptate doloribus necessitatibus veritatis placeat laboriosam perferendis nulla ab saepe labore laudantium sunt minus tempore atque error, quia doloremque mollitia. Minima nemo ipsa eius consequatur velit!
        </p>
        <div className="my-5  p-5 row d-flex border-top justify-content-center ">
          <div className="col-12 col-lg-2 ">
            <img src={Hypnos} alt="Hypnos dieu du sommeil" className="rounded-circle img-fluid" />
          </div>
          <p className="text-white p-3 col-12 col-lg-10 d-flex align-items-center">
            "Hypnos est la personnification du sommeil (hypnos en grec), pouvoir nocturne et troublant par excellence.
            <br /><br />Il est né de Nyx, la Nuit, elle-même issue du Chaos originel, qui a enfanté sans aucune union une série de puissances menaçantes, comme le raconte Hésiode (env. 750 avant J.-C.)."
          </p>
        </div>


      </div>
    </>
  );
}