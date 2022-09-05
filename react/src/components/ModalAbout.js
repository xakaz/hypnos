import React from 'react'

export default function ModalResModalAboutervation(props) {
  return (
    <div className='text-dark'>
      {/* <!-- Button trigger modal --> */}
      <span className="btn text-secondary p-0" 
            data-bs-toggle="modal"
            data-bs-target="#modalAbout">
        {props.children}
      </span>

      {/* <!-- Modal --> */}
      <div className="modal fade" 
      id="modalAbout" 
      data-bs-backdrop="static" 
      data-bs-keyboard="false" 
      tabIndex="-1" 
      aria-labelledby="staticBackdropLabel" 
      aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" 
                  id="staticBackdropLabel">
                A propos d'Hypnos
              </h5>
              <button type="button" 
              className="btn-close" 
              data-bs-dismiss="modal" 
              aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Hypnos est un groupe hôtelier fondé en 2004. Propriétaire de 7 établissements dans les quatre
              coins de l’hexagone, chacun de ces hôtels s’avère être une destination idéale pour les couples
              en quête d’un séjour romantique à deux.
              Chaque suite au design luxueux inclut des services hauts de gamme (un spa privatif
              notamment), de quoi plonger pleinement dans une atmosphère chic-romantique.
            </div>
            <div className="modal-footer">
              <button type="button" 
              className="btn btn-secondary" 
              data-bs-dismiss="modal">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
