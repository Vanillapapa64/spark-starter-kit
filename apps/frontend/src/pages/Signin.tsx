import { useState } from "react"
import axios from "axios"
import { useRecoilState } from "recoil";
import { username } from "../atoms/atoms";
import { useNavigate } from "react-router-dom";
export const Signin=()=>{
    const [email,setusername]=useRecoilState(username);
    const [password,setpassword]=useState("");
    const [role,setrole]=useState(0);
    const navigate=useNavigate()
    return(
        <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center ">
            <div className="border-2 rounded-xl border-stone-700 w-96 h-2/4 self-center bg-white/25 ">
                <div className="text-center text-6xl pt-8">Signin</div>
                <div className="grid grid-cols-1 gap-8 p-10 pt-16">
                <div>
                        <label className="mr-2">Role: </label>
                        <input
                        type="radio"
                        value="User"
                        name="Role"
                        onChange={(e) => setrole(0)}
                        />
                        <label className="mr-4">User</label>
                        <input
                        type="radio"
                        value="Psychiatrist"
                        name="Role"
                        onChange={(e) => setrole(1)}
                        />
                        <label>Psychiatrist</label>
                    </div>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setusername(e.target.value)
                    }} placeholder="Email"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setpassword(e.target.value)
                    }} placeholder="Password" type="password"></input>
                    <button className="w-32 h-14  border-2 text-white place-self-center rounded-3xl hover:bg-black" onClick={async()=>{
                        if(role==0){
                            const response= await axios.post('https://api.navkirat.in/api/v1/user/signin',{
                                username:email,
                                password:password
                            })
                            localStorage.setItem("token", response.data.token)
                            navigate('/dashboard')
                        } else{
                            const response= await axios.post('https://api.navkirat.in/api/v1/doc/signin',{
                                username:email,
                                password:password
                            })
                            localStorage.setItem("token", response.data.token)
                            navigate('/Doc')
                        }
                        
                        
                    }}> Signin</button>
                </div>
            </div>
        </div>
    )
}