const LoginPage = () => {

    return(
        <>
        <div className="flex flex-row justify-center items-center">
     <form action="/home" className="flex w-100 justify-center h-50 flex-col  items-center bg-white rounded-3xl text-black">
        <input type="text" placeholder="username" className="w-90 mt-2 border-blue-400 border-2 rounded-2xl text-center"/>
        <input type="text" placeholder="password" className="w-90 mt-2 focus:border-blue-400  border-blue-400 rounded-2xl text-center"></input>
        <button className="pt-10 bg-blue-400 w-50 h-5  text-center rounded-2xl">Envoyer</button>
     </form>
     </div>
        </>
    )
}
export default LoginPage