import { useState } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import { useRecoilState } from "recoil";
import { username } from "../atoms/atoms";

export const Signup=()=>{
    const navigate=useNavigate();
    const [email,setusername]=useState("");
    const [password,setpassword]=useState("");
    const [name,setname]=useRecoilState(username);
    const [age,setage]=useState("");
    const [gender, setGender] = useState("")
    return(
        <div className="w-screen h-screen bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center ">
            <div className="border-2 rounded-xl border-stone-700 w-96 h-3/4 self-center bg-white/25 ">
                <div className="text-center text-7xl pt-8">Signup</div>
                <div className="grid grid-cols-1 gap-8 p-10 pt-16">
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setusername(e.target.value)
                    }} placeholder="Email"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setname(e.target.value)
                    }} placeholder="Firstname"></input>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setage(e.target.value)
                    }} placeholder="Age" type="number"></input>
                    <div>
                        <label className="mr-2">Gender: </label>
                        <input
                        type="radio"
                        value="Male"
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                        />
                        <label className="mr-4">Male</label>
                        <input
                        type="radio"
                        value="Female"
                        name="gender"
                        onChange={(e) => setGender(e.target.value)}
                        />
                        <label>Female</label>
                    </div>
                    <input className="border-2 shadow-md rounded-md p-2" onChange={(e)=>{
                        setpassword(e.target.value)
                    }} placeholder="Password" type="password"></input>
                    <button className="w-32 h-14  border-2 text-white place-self-center rounded-3xl hover:bg-black" onClick={async()=>{
                        const response= await axios.post('https://api.navkirat.in/api/v1/user/signup',{
                            email:email,
                            name:name,
                            password:password,
                            age:parseInt(age),
                            gender:gender
                        })
                        
                        navigate('/signin')
                    }} > Submit</button>
                </div>
            </div>
        </div>
    )
}
