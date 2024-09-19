import { useNavigate } from "react-router-dom"
import Doc from "../components/Doc"
import Sidebar from "../components/Sidebar"

const Docdash:React.FC=()=>{
    const navigate=useNavigate()
    return(
        <div className="w-screen">
            <div className="border-b-2 h-18 w-full flex justify-between p-8">
                <div className="text-2xl">Psychiatrist Dashboard(Showing texts)</div>
                <div>
                    <button className="border-2 rounded-lg p-2" onClick={()=>navigate('/signin')}>Log out</button>
                </div>
            </div>
            <div className="pt-24 flex justify-center">
            <Doc />
            </div>
        </div>
    )
}
export default Docdash