interface inputs{
    text:string
}

export function Navbar(inputs:inputs){
    return(
        <div className="h-20 border-2 flex items-end w-screen">
            <div className=" flex justify-between w-screen p-4">
                <div className="font-serif h-12 flex items-end text-3xl text-blue-500">
                    {inputs.text}
                </div>
                <div className="pr-12">
                    <button className="w-28 h-12 border-2 border-yellow-400 text-yellow-400 place-self-center rounded-3xl hover:bg-yellow-400 hover:text-white hover:border-yellow-400">
                        Log In
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Navbar