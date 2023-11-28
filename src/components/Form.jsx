import React from 'react'

const Form = () => {
  return (
    <div className='md:w-1/2 lg:w-2/5'>
      <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
      <p className='text-lg mt-5 text-center'>Añade Pacientes y {""}
        <span className=' text-indigo-600 font-bold'>Administralos</span>
      </p>
      <form className='bg-white shadow-md rounded-lg p-10 mt-4'>
        <div className='mb-5'>
          <label htmlFor='petName' className='block text-gray-700 uppercase font-bold'>Nombre Mascota</label>
          <input 
            id='petName'
            type="text"
            placeholder='Nombre de la mascota'
            className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor='name' className='block text-gray-700 uppercase font-bold'>Nombre propietario</label>
          <input 
            id='name'
            type="text"
            placeholder='Nombre del propietario'
            className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email</label>
          <input 
            id='email'
            type="email"
            placeholder='Email contacto propietario'
            className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor='date' className='block text-gray-700 uppercase font-bold'>Fecha de alta</label>
          <input 
            id='date'
            type="date"
            className=' border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
           />
        </div>
        <div className='mb-5'>
          <label htmlFor='description' className='block text-gray-700 uppercase font-bold'>Descripcion de sintomas:</label>
          <textarea 
            name="description" 
            id="description" 
            placeholder="Describe los sintomas"
            className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
          ></textarea>
        </div>
        <input 
          type="submit" 
          value="Agregar paciente" 
          className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors'
        />
      </form>
    </div>
  )
}

export default Form