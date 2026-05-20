import { useState } from "react"
import axios from 'axios'
const AddPatient = () => {

    const [name,setName] = useState()
    const [lastName,setLastName] = useState()
    const [age , setAge] = useState()

    const Submit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:5001/createPatient',{name,lastName,age})
        .then(rslt => console.log(rslt))
        .catch(err => console.log(err))
    }
    return(
        <>
        <h1>Creation de Patients</h1>
        <div className="flex justify-center items-center min-h-screen">
           
        <form onSubmit={Submit} className="bg-white flex flex-col justify-center items-center gap-5 w-100 h-80 rounded-2xl">
            <input type="text" placeholder="Prenom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"
            onChange={e => setName(e.target.value)} />
            <input type="text" placeholder="Nom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"
            onChange={e => setLastName(e.target.value)}/>
            <input type="age" placeholder="Age" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"
            onChange={e => setAge(e.target.value)}/>
       
            <button className="bg-blue-400 w-40 h-6 text-white rounded">S'enregistrer</button>
        </form>
        </div>
        
        </>
    )

}

export default AddPatient