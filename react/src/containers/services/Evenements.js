import React, { Component } from 'react'
import Content from '../../components/Content'
import Event from '../../assets/containersAssets/evenements/wedding.jpg'
import axios from 'axios' 
import { v4 as uuid_v4 } from "uuid"

class Evenements extends Component
{

  state ={
    evenements : null
  }
  componentDidMount =()=>{
    document.title="Evènements"

    axios.get("https://hypnoshernandez.alwaysdata.net/front/evenements")
      .then(response => {
        this.setState({ evenements: response.data });
      })

  }
  render(){
    return (
      <div className='text-white'>
        <div className="d-flex justify-content-center">
          <img src={Event}
            alt="evenements"
            className="img-fluid"
            width="1200px" />
        </div>
  
        {
            this.state.evenements &&
            this.state.evenements.map( evenement => {
              return(
                <Content
                vignette={require(`../../assets/containersAssets/evenements/${evenement.evenements_image}`)}
                alt={evenement.evenements_alt}
                title={evenement.evenements_title}
                description={evenement.evenements_description}
                key={uuid_v4()}/>
                )
              })
          }
      </div>
    )
  }
}

export default Evenements;