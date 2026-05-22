import { Link } from "react-router-dom"
const LoginPage = () => {

    return(
        <>
        <h1> Welcome to the CRUD_APP </h1>
        <div className="flex flex-col justify-center items-center min-h-screen fixed ml-[25%] ">
     <form action="" className="flex flex-col  w-100 justify-center h-70  items-center bg-white rounded-3xl text-black gap-3">
        <input type="email" placeholder="E-mail" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded  pl-4 text-black"/>
        <input type="password" placeholder="Password" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded  pl-4 text-black"/>
        <p className="text-[14px]">Mot de passe Oublie?</p>
        <button className="bg-blue-400  px-5 rounded-3xl text-white">Se connecter</button>
        <hr></hr>
        <Link to="/register"><button className="bg-blue-400 px-5 rounded-3xl text-white">S'inscrire</button></Link>
     </form>
     </div>
        </>
    )
}
export default LoginPage