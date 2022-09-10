import React from "react";
import { withFormik } from "formik";
import * as Yup from "yup";

const Formulaire = (props) => {

  return (
    <>
      <div className="container d-flex justify-content-center">

        {/** FORMULAIRE */}
        <div className="my-5 text-light">
          <form className="p-4">
            <h4 className="text-center border-bottom border-top p-2 mb-3">FORMULAIRE DE CONTACT</h4>
            <div className="row mb-3">
              {/** PRENOM */}
              <div className="col-12 col-xl-6">
                <label htmlFor="prenom" className="form-label">Prénom</label>
                <input type="text" className="form-control" id="prenom" name="prenom"
                  onChange={props.handleChange}
                  value={props.values.prenom}
                  onBlur={props.handleBlur}
                />
                {
                  props.touched.prenom && props.errors.prenom 
                  && <span style={{color : "red"}}>{props.errors.prenom}</span>
                }
              </div>

              {/** NOM */}
              <div className="col-12 col-xl-6">
                <label htmlFor="nom" className="form-label">Nom</label>
                <input type="text" className="form-control" id="nom" name="nom"
                  onChange={props.handleChange}
                  value={props.values.nom}
                  onBlur={props.handleBlur}
                />
                {
                  props.touched.nom && props.errors.nom 
                  && <span style={{color : "red"}}>{props.errors.nom}</span>
                }
              </div>
            </div>

            {/** MAIL */}
            <div className="mb-3 ">
              <label htmlFor="email" className="form-label">Adresse mail</label>
              <input type="email"
                className="form-control" id="email" name="email"
                onChange={props.handleChange}
                value={props.values.email}
                onBlur={props.handleBlur}
              />
              {
                  props.touched.email && props.errors.email 
                  && <span style={{color : "red"}}>{props.errors.email}</span>
                }
            </div>

            {/** OBJET */}
            <div className="form-group mb-3">
              <label htmlFor="objet" className="form-label">Objet</label>
              <select className="form-control" id="objet" name="objet"
              value={props.values.objet} onChange={props.handleChange}>
                <option value="Je souhaite poser une réclamation" >Je souhaite poser une réclamation</option>
                <option value="Je souhaite commander un service supplémentaire" >Je souhaite commander un service supplémentaire</option>
                <option value="Je souhaite en savoir plus sur une suite" >Je souhaite en savoir plus sur une suite</option>
                <option value="J’ai un souci avec cette application" >J’ai un souci avec cette application</option>
              </select>
            </div>

            {/** MESSAGE */}
            <div className="mb-3 ">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" name="message" id="message" cols="30" rows="10"
                onChange={props.handleChange}
                value={props.values.message}
                onBlur={props.handleBlur}
              ></textarea>
              {
                  props.touched.message && props.errors.message 
                  && <span style={{color : "red"}}>{props.errors.message}</span>
                }
            </div>

            {/** BOUTON */}
            <button type="submit" className="btn btn-outline-light" onClick={props.handleSubmit}>Envoyer</button>
          </form>
        </div>

      </div>
    </>
  );

}

export default withFormik({
  mapPropsToValues: () => ({
    prenom: "",
    nom: "",
    email: "",
    objet: "",
    message: ""
  }), 
  validationSchema: Yup.object().shape({
    prenom: Yup.string()
      .min(2, 'Le prenom doit avoir plus de 2 caractères')
      .required("Le prenom est obligatoire !"),
    nom: Yup.string()
      .min(3, 'Le nom doit avoir plus de 3 caractères')
      .required("Le nom est obligatoire !"),
    email: Yup.string()
      .email("L'email n'a pas le bon format")
      .required("L'adresse mail est obligatoire !"),
    message: Yup.string()
      .min(50, "Le message doit faire minimum 50 caractères")
      .max(200, "Le message doit faire maximum 200 caractères")
      .required("Le message est obligatoire !")
  }),
  handleSubmit : (values,{props}) => {
    const message = {
          prenom : values.prenom,
            nom : values.nom,
          email : values.email,
          objet : values.objet,
        message : values.message,
    }
    props.sendMail(message);
}
})(Formulaire);