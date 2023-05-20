import React from 'react'
import { useForm } from 'react-hook-form';

const Formulaire = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log(data);
      };
  
    
        
  return (
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
       {errors.number && <span className='error'>veuillez remplir la ville</span>}

      <button type="submit" className='send-command'>Envoyer</button>
    </form>
  );
    
  
}

export default Formulaire