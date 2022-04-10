import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import HotelPic from '../assets/containersAssets/hotels/Toulouse/toulouse.jpg'

class Hotels extends Component {
  render() {
    return (
      <div className="container">
        <div className='row m-2 p-2 text-light'>
          {/* IMAGE */}
          <div className="col-12 col-xl-6 d-flex justify-content-center align-items-center">
            <img src={HotelPic} alt="pic" height="400px" className='rounded' />
          </div>

          {/* HOTEL */}
          <div className="col-12 col-xl-6">
            <h3>Nom de l'établissement</h3>
            <hr />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae, aperiam nemo consectetur reiciendis adipisci
              ipsa recusandae nesciunt! Adipisci, saepe expedita suscipit,
              inventore modi laborum cumque libero soluta qui ducimus quas provident,
              perferendis enim odio sapiente voluptatum blanditiis
              beatae eius consequuntur ratione nam sint cupiditate?
              Cupiditate maiores necessitatibus voluptatum quis odit.
            </p>
            <hr />
            <div className="row">
              <div className='col-8'>
                <div className="row">
                  <div className="col-2 d-flex align-items-center justify-content-end">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                      <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
                      <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                    </svg>
                  </div>
                  <div className="col-10">
                    <div>Adresse de l'établissement</div>
                    <div>code postal - Ville</div>
                  </div>
                </div>
              </div>
              <div className='d-flex justify-content-center col-4'>
                <NavLink to="/" className="btn btn-light mb-3">Voir les Suites</NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Hotels;