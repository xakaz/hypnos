import React, { Component } from 'react'
import Content from '../../components/Content'
import Wellness from '../../assets/containersAssets/bien-etre/spa.jpg'
import axios from 'axios'

class BienEtre extends Component {

  state = {
    bienEtre : null
  }

  componentDidMount = () => {
    document.title = "Bien-être";

    axios.get("http://localhost/server/front/bien-etre")
      .then(response => {
        this.setState({ bienEtre: response.data });
      })
  }

  render() {
    return (
      <>
        <div className='text-white'>
          <div className="d-flex justify-content-center">
            <img src={Wellness}
                alt="bien-être"
                className="img-fluid"
                width="1200px" />
          </div>
          {
            this.state.bienEtre &&
            this.state.bienEtre.map( wellness => {
              return(
                <Content
                vignette={require(`../../assets/containersAssets/bien-etre/${wellness.bienEtre_image}`)}
                alt={wellness.bienEtre_alt}
                title={wellness.bienEtre_title}
                description={wellness.bienEtre_description}
                key = {wellness.bienEtre_id}/>
                )
              })
          }
          </div>
      </>
    )
  }
}

export default BienEtre;
