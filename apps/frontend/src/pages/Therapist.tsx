import { useState } from "react"
import axios from "axios"
import Sidebar from "../components/Sidebar"
const Therapist:React.FC=()=>{
    const [feelings,setfeelings]=useState("")
    
    const onClickhandler=()=>{
        console.log(feelings)
        axios.post('https://api.navkirat.in/api/v1/user/mentaltext',{text:feelings},{
            headers:{
                Authorization:'Bearer '+ localStorage.getItem('token')
            }
        })
    }
    return(
        <div>
            <Sidebar />
        <div className="translate-x-72">
            <div className="text-4xl flex pl-96 pt-16 items-center">
                Contact A therapist
            </div>
            <div className="flex  pt-24 h-screen w-screen pl-12 ">
            <div className="w-6/12 ">
            <textarea 
                    onChange={(e) => setfeelings(e.target.value)} 
                    className="bg-green-200 w-full h-2/3 p-4 resize-none" 
                    placeholder="Write Down your Feelings!!"
                    value={feelings}
                    style={{ textAlign: 'left', verticalAlign: 'top' }}
                />
            </div>
            <div className="w-6/12 flex -translate-y-24 items-center ">
                <button onClick={onClickhandler} className="ml-24 bg-sky-200 w-3/12 h-16 border-2 rounded-xl cursor-pointer">Send to a random Therapist</button>
            </div>
        </div>
        </div>
        </div>
    )
}
export default Therapist