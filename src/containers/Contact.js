import React, { Component } from "react";

class Nom extends Component {

  render() {
    return (
      <>
        <div className="container d-flex justify-content-center">
            
            {/** FORMULAIRE */}
            <div className="my-5 text-light w-50">
              <form className="p-4">
                <h4 className="text-center border-bottom border-top p-2 mb-3">FORMULAIRE DE CONTACT</h4>
                <div className="row mb-3">
                  {/** PRENOM */}
                  <div className="col-12 col-xl-6">
                    <label htmlFor="firstname" className="form-label">Prénom</label>
                    <input type="text" className="form-control" id="firstname" name="firstname" />
                  </div>
                                    
                  {/** NOM */}
                  <div className="col-12 col-xl-6">
                    <label htmlFor="name" className="form-label">Nom</label>
                    <input type="text" className="form-control" id="name" name="name" />
                  </div>
                </div>

                {/** MAIL */}
                  <div className="mb-3 ">
                    <label htmlFor="email" className="form-label">Adresse mail</label>
                    <input type="email"
                      className="form-control" id="email" aria-describedby="emailHelp" name="email" />
                  </div>
                  
                {/** OBJET */}
                <div class="form-group mb-3">
                  <label htmlFor="object" className="form-label">Objet</label>
                  <select class="form-control" id="object" name="object" >
                    <option>Je souhaite poser une réclamation</option>
                    <option>Je souhaite commander un service supplémentaire</option>
                    <option>Je souhaite en savoir plus sur une suite</option>
                    <option>J’ai un souci avec cette application</option>
                  </select>
                </div>
                
                {/** MESSAGE */}
                  <div className="mb-3 ">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea className="form-control" name="message" id="message" cols="30" rows="10"></textarea>
                  </div>
                  
                {/** BOUTON */}
                <button type="submit" className="btn btn-primary ">Envoyer</button>
              </form>
            </div>
          
        </div>
      </>
    );

  }
}

export default Nom;