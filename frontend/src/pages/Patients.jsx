import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

const Patients = () => {
const [user,setUser] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5001/patientList')
        .then(rst => setUser(rst.data))
        .catch(err => console.log(err))
    })

    return(
        <>
        <div className="flex justify-center items-center min-h-screen">
            <Link to="/addPatient" className="mb-60 bg-white text-black w-40 rounded-2xl"><button className="">+ Ajouter Patient</button></Link>
        <table  className="border-4 w-150 ">
            <thead className="border-4">
                <th className="border-4">Name</th>
                <th className="border-4">Last Name</th>
                <th className="border-4">Age</th>
                <th className="border-4">Actions</th>
            </thead>
              {user.map(u => {
               return(
            <tr className="border-4">
               <td className="border-4">{u.name}</td>
                <td className="border-4">{u.lastName}</td>
                <td className="border-4">{u.age}</td>
                <td className="p-2">
                    <input type="submit" value="Modify" className="bg-green-500 p-2 rounded text-black m-2"/>
                    <input type="submit" value="Delete" className="bg-red-500 p-2 rounded text-black" />
                </td>
           </tr>

           )
           
              
                })}
                
                
            
        </table>
        
         </div>
         
        </>
       
    )
}

export default Patients