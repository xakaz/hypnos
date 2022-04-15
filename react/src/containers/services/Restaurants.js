import React, { Component } from 'react'
import Content from '../../components/Content'
import Resto from '../../assets/containersAssets/restaurants/toulouseRestaurant.jpg'
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid"

class Restaurants extends Component {

  state = {
    restaurants : null
  }

  componentDidMount = () =>{
    document.title = "Restaurants";

    axios.get("http://localhost/server/front/restaurants")
      .then(response => {
        this.setState({ restaurants: response.data });
      })
    } 
  render(){ 
    return (
      <div className='text-white'>
        <div className="d-flex justify-content-center">
          <img src={Resto}
            alt="restaurants"
            className="img-fluid"
            width="1200px" />
        </div>
  
        {
            this.state.restaurants &&
            this.state.restaurants.map( restaurant => {
              return(
                <Content
                vignette={require(`../../assets/containersAssets/restaurants/${restaurant.restaurant_image}`)}
                alt={restaurant.restaurant_alt}
                title={restaurant.restaurant_title}
                description={restaurant.restaurant_description}
                key={uuid_v4()}/>
                )
              })
          }
      </div>
    )
  }
}

export default Restaurants;