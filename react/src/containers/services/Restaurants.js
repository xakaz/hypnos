import React, { Component } from 'react'
import Content from '../../components/Content'
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid"

class Restaurants extends Component {

  state = {
    restaurants: []
  }

  componentDidMount = () => {
    document.title = "Restaurants";
    const fetchRestaurants = async () => {
      await 
      axios.get(process.env.REACT_APP_AXIOS_URL+"/front/services")
      .then(response => {

        let restaurantArr = []
        for (let i = 0; i < response.data.length; i++) {
          if (response.data[i].service_role === "2") {
            restaurantArr.push(response.data[i])
            this.setState({ restaurants: restaurantArr });
          }
        }
      })
    }
    fetchRestaurants();
  }
  render() {
    return (
      <div className='text-white'>
         <h1 className='text-center my-5'>Nos services de restauration</h1>
        {
          this.state.restaurants &&
          this.state.restaurants.map(restaurant => {
            return (
              <Content
                vignette={require(`../../assets/containersAssets/restaurants/${restaurant.service_image}`)}
                alt={restaurant.service_titre}
                title={restaurant.service_titre}
                description={restaurant.service_description}
                key={uuid_v4()} />
            )
          })
        }
      </div>
    )
  }
}

export default Restaurants;