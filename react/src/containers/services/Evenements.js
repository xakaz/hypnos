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
    
    const fetchEvents = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL+"/front/services")
      .then(response => {
        console.log(response.data)
        let eventsArr = [] 
        for(let i = 0; i< response.data.length;i++){
          if (response.data[i].service_role === "4"){
            eventsArr.push(response.data[i])
            this.setState({ evenements: eventsArr });
          }
        }
      })
    }
    fetchEvents();
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
                vignette={require(`../../assets/containersAssets/evenements/${evenement.service_image}`)}
                alt={evenement.service_titre}
                title={evenement.service_titre.toUpperCase()}
                description={evenement.service_description}
                key={uuid_v4()}/>
                )
              })
          }
      </div>
    )
  }
}

export default Evenements;