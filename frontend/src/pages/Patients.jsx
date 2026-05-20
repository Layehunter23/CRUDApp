import { useState } from "react"
import { Link } from "react-router-dom"

const Patients = () => {
const [user,setUser] = useState([{name:'PAPA' , lastName:'BARRY',age:18},{name:'MOUSSA',lastName:'NEYMAR',age:28}])



    return(
        <>
        <div className="flex justify-center items-center min-h-screen">
        <table  className="border-4 w-150">
            <tr className="border-4">
                <th>Name</th>
                <th>Last Name</th>
                <th>Age</th>
            </tr>
              {user.map(u => {
               return(
            <tr className="border-4">
               <td>{u.name}</td>
                <td>{u.lastName}</td>
                <td>{u.age}</td>
               
           </tr>
           )
              
                })}
                
                
            
        </table>
        
         </div>
         <Link to="/addPatient"><button className="">+ Ajouter Patient</button></Link>
        </>
       
    )
}

export default Patients