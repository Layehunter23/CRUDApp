import axios from 'axios'
import { useState } from 'react'
import {Navigate, useNavigate} from 'react-router-dom'
const RegisterPage = () => {

    const [prenom, setPrenom] = useState('')
    const [nom, setNom] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPasswd] = useState('')
    const [confirm, setConfirm] = useState('')

    const navigate = useNavigate()

    const Submit = (e) => {
        e.preventDefault()
        alert(`Utilisateur ${prenom}_${nom}_${password} cree`)
        axios.post('http://localhost:5001/createUser', { nom, prenom, email, password })
            .then(rst => {console.log(rst);
                navigate('/')})
            .catch(err => console.log(err))

           
    }
    return (
        <>
            <h1>Register Page</h1>
            <div className="flex justify-center items-center min-h-screen fixed ml-[30%]">

                <form onSubmit={Submit} className="bg-white flex flex-col justify-center items-center gap-5 w-100 h-80 rounded-2xl">
                    <input type="text" placeholder="Prenom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setPrenom(e.target.value)} />
                    <input type="text" placeholder="Nom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setNom(e.target.value)} />
                    <input type="email" placeholder="E-mail" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder="Password" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setPasswd(e.target.value)} />
                    <input type="password" placeholder="Confirmer votre mdp" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setConfirm(e.target.value)} />
                    <button className="bg-blue-400 w-40 h-6 text-white rounded">S'enregistrer</button>
                </form>
            </div>

        </>
    )

}

export default RegisterPage