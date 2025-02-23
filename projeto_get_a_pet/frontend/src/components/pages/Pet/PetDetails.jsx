import api from '../../../utils/api'

import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'

import styles from './PetDetails.module.css'

/* hooks */
import useFlashMessage from '../../../hooks/useFlashMessages'

function PetDetails() {

    const [pet, setPet] = useState({})
    const {id} = useParams()
    const {setFlashMessage} = useFlashMessage()
    const [token] = useState(localStorage.getItem('token') || '')

    useEffect(() => {
        api.get(`/pets/${id}`).then((response) => {
            setPet(response.data.pet)
        })
    }, [id])


  return (
    <>
        {pet.name && (
            <section>
                <div>
                    <h1>
                        Conhecendo o Pet: {pet.name}
                    </h1>
                    <p>Se tiver interesse, marque uma visita para conhecê-lo!</p>
                </div>
                <div>
                    {pet.images.map((image, index) => {
                      <img 
                        src={`${import.meta.env.VITE_REACT_APP_API}images/pets/${image}`}
                        alt={pet.name}
                        key={index} 
                        />
                        
                    })}
                </div>
                <p>
                    <span className='bold'>Peso:</span> {pet.weight}kg
                </p>
                <p>
                    <span className='bold'>Idade:</span> {pet.age}anos
                </p>
                {token ? (
                    <button>Solicitar uma visita!</button>
                ) : (
                    <p>Você precisa <Link to="/register">criar uma conta</Link> para solicitar a visita!</p>
                )}
            </section>
        )}
    </>
  )
}

export default PetDetails