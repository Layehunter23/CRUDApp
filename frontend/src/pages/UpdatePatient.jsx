import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useNavigate,useParams} from 'react-router-dom'

const UpdatePatient = () => {

     const navigate = useNavigate()
    const [name,setName] = useState()
    const [lastName,setLastName] = useState()
    const [age , setAge] = useState()
    const {id} = useParams()

    const [Patient,SetPatient] = useState()

    useEffect(() => {
         axios.get('http://localhost:5001/getPatient/'+id)
        .then(user => {console.log(user);
            setName(user.data.name);
            setLastName(user.data.lastName);
            setAge(user.data.age);
        })
        .catch(err => console.log(err))
    },[])
       
    const Update = (e) => {

        axios.put('http://localhost:5001/UpdatePatient/'+id,{name,lastName,age})
        .then(rslt => console.log(rslt))
       
        .catch(err => console.log(err))
    }
    

    

    
    return (
        <>
            <h1>Update User</h1>
            <div className="flex justify-center items-center min-h-screen fixed ml-[30%]">

                <form className="bg-white flex flex-col justify-center items-center gap-5 w-100 h-80 rounded-2xl">
                    <input type="text" value={name} placeholder="Prenom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setName(e.target.value)} />
                    <input type="text" value={lastName} placeholder="Nom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setLastName(e.target.value)} />
                    <input type="age" value={age} placeholder="Age" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" onChange={(e) => setAge(e.target.value)} />
                    
                    <Link to="/"><button className="bg-blue-400 w-40 h-6 text-white rounded" onClick={Update()}>Valider Modif</button></Link>
                </form>
            </div>

        </>
    )

}

export default UpdatePatient