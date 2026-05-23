import axios from 'axios'
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
const UpdatePatient = () => {

  
    const navigate = useNavigate()

    
    return (
        <>
            <h1>Update User</h1>
            <div className="flex justify-center items-center min-h-screen fixed ml-[30%]">

                <form className="bg-white flex flex-col justify-center items-center gap-5 w-100 h-80 rounded-2xl">
                    <input type="text" placeholder="Prenom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setPrenom(e.target.value)} />
                    <input type="text" placeholder="Nom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setNom(e.target.value)} />
                    <input type="age" placeholder="Age" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setEmail(e.target.value)} />
                    
                    <button className="bg-blue-400 w-40 h-6 text-white rounded">Valider Modif</button>
                </form>
            </div>

        </>
    )

}

export default UpdatePatient