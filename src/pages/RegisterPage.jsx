const RegisterPage = () => {
    return(
        <>
        <h1>Register Page</h1>
        <div className="flex justify-center items-center min-h-screen">
           
        <form action="" className="bg-white flex flex-col justify-center items-center gap-5 w-100 h-80 rounded-2xl">
            <input type="text" placeholder="Prenom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black" />
            <input type="text" placeholder="Nom" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"/>
            <input type="email" placeholder="E-mail" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"/>
            <input type="password" placeholder="Password" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"/>
            <input type="password" placeholder="Confirmer votre mdp" className="w-[90%] border-2 border-blue-400 focus:outline-none rounded h-7 pl-4 text-black"/>
            <button className="bg-blue-400 w-40 h-6 text-white rounded">S'enregistrer</button>
        </form>
        </div>
        
        </>
    )

}

export default RegisterPage