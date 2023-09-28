import React from 'react'
import { useForm } from 'react-hook-form';
import "./formulaire.css"
import { useNavigate } from "react-router-dom";
import axios from 'axios';

const Formulaire = ({closeForm}) => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        if(data){
           
    let arrayRecette =  JSON.parse(localStorage.getItem("produitRecettes"))
    let objectArticlesPrix = JSON.parse(localStorage.getItem("objectArticlesPrix"))
          
      return alert("votre commande a ete envoye  vous recevrez un mail pour votre ticket merci de votre fidelite"),closeForm(),navigate("/home"),
      axios.post('https://tflkmc.ubix-group.com/public/index.php/api/form', {
        "email":data.email,
        "username":data.username,
        "ville":data.ville,
        "produitRecettes":arrayRecette,
        "objetArticlesPrix":objectArticlesPrix
      })
      .then(function (response) {
        return response
      })
      .catch(function (error) {
        alert('echec connexion')
      });
         
        }
      };
      
    
  
    
        
  return (
    <div className='parent-formulaire'>
        <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            {...register("username", { required: true })}
          
          />
          {errors.username && <span className='error'>veuillez remplir le nom</span>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
          {errors.email && errors.email.type === "required" && <span className='error'>mauvaise syntaxe d email</span>}

          <label htmlFor="ville">ville:</label>
          <input
            type="text"
            id="ville"
            name="ville"
            {...register("ville", { required: true })}
          />
          {errors.ville && <span className='error'>veuillez remplir la ville</span>}

          <label htmlFor="number">numero telephone:</label>
          <input
            type="text"
            id="number"
            name="number"
            {...register("number", { required: true })}
          />
          {errors.number && <span className='error'>veuillez remplir le numero de telephone</span>}

          <button type="submit" className='send-command'>Envoyer</button>
        </form>
    </div>
  
  );
    
  
}

export default Formulaire