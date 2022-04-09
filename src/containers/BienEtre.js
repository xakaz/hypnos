import React from 'react'
import Content from '../components/Content'
import Wellness from '../assets/containersAssets/bien-etre/spa.jpg'

const BienEtre = (props) => {
  return (
    <div className='text-white'>
      <div className="d-flex justify-content-center">
        <img src={Wellness}
          alt="bien-être"
          className="img-fluid"
          width="1200px" />
      </div>

      <Content vignette={require('../assets/containersAssets/bien-etre/massage.jpg')}
        vignette_nom="bien-être"
        title="Bien Etre"
        description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Iusto ex incidunt laudantium aperiam enim nemo dolore? 
        Voluptas ullam quidem adipisci!"
      />
    </div>
  )
}

export default BienEtre;
