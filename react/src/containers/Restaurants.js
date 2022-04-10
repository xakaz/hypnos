import React from 'react'
import Content from '../components/Content'
import Resto from '../assets/containersAssets/restaurants/toulouseRestaurant.jpg'

const Restaurants = (props) => {
  return (
    <div className='text-white'>
      <div className="d-flex justify-content-center">
        <img src={Resto}
          alt="restaurants"
          className="img-fluid"
          width="1200px" />
      </div>

      <Content vignette={require('../assets/containersAssets/restaurants/lunch.jpg')}
        vignette_nom="restaurants"
        title="Restaurants"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Iusto ex incidunt laudantium aperiam enim nemo dolore? 
        Voluptas ullam quidem adipisci!"
      />
    </div>
  )
}

export default Restaurants;