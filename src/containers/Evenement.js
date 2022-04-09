import React from 'react'
import Content from '../components/Content'
import Event from '../assets/containersAssets/evenements/wedding.jpg'

const BienEtre = (props) => {
  return (
    <div className='text-white'>
      <div className="d-flex justify-content-center">
        <img src={Event}
          alt="evenements"
          className="img-fluid"
          width="1200px" />
      </div>

      <Content vignette={require('../assets/containersAssets/evenements/baptism.jpg')}
        vignette_nom="evenements"
        title="Evenements"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Iusto ex incidunt laudantium aperiam enim nemo dolore? 
        Voluptas ullam quidem adipisci!"
      />
    </div>
  )
}

export default BienEtre;