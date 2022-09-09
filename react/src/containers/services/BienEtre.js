import React, { Component } from 'react'
import Content from '../../components/Content'
import axios from 'axios'
import { v4 as uuid_v4 } from "uuid"

class BienEtre extends Component {

  state = {
    bienEtre: null
  }

  componentDidMount = () => {
    document.title = "Bien-être";

    const fetchWellness = async () => {
      await axios.get(process.env.REACT_APP_AXIOS_URL + "/front/services")
        .then(response => {
          let wellnessArr = []
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].service_role === "3") {
              wellnessArr.push(response.data[i])
              this.setState({ bienEtre: wellnessArr });
            }
          }
        })
    }
    fetchWellness();
  }

  render() {
    return (
      <>
        <div className='text-white'>
          <h1 className='text-center my-5'>Nos services bien-être</h1>
          {
            this.state.bienEtre &&
            this.state.bienEtre.map(wellness => {
              return (
                <Content
                  vignette={require(`../../assets/containersAssets/bien-etre/${wellness.service_image}`)}
                  alt={wellness.service_titre}
                  title={wellness.service_titre.toUpperCase()}
                  description={wellness.service_description}
                  key={uuid_v4()} />
              )
            })
          }
        </div>
      </>
    )
  }
}

export default BienEtre;
