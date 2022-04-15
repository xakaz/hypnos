import React from 'react'

export default function ModalTarif(props) {
  return (
    <div className='text-dark'>
      {/* <!-- Button trigger modal --> */}
      <span className="btn text-secondary p-0" data-bs-toggle="modalTarif" data-bs-target="#tarif">
        {props.children}
      </span>

      {/* <!-- Modal --> */}
      <div className="modal fade" id="tarif" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="tarifLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="tarifLabel">Tarifs</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modalTarif" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Nos tarifs varient selon la ville, l'établissement, la suite et les services fournis.
              Rapprochez de l'établissement souhaité pour plus de renseignements.
              Vous pouvez également consulter les pages des établissements.
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modalTarif">Fermer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
