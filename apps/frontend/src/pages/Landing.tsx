import { useNavigate } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import backgroundimage from '../assets/ai_health_everyone_hero.width-1200.format-webp.jpg'
import Card from "../components/Card";
import { url } from "inspector";
export function Landingpage() {
    const navigate=useNavigate();
    return (
        <div className='bg-zinc-100 w-screen h-screen '>
            <div className="w-screen h-screen flex justify-center items-center pt-48" style={{backgroundImage: `url(${backgroundimage})`,backgroundRepeat:'no-repeat',backgroundPosition: 'center',backgroundSize: 'cover'}}>
            <div className=" -translate-y-16">
                <div className="flex grid  h-1/6">
                    <Card name="summarize report" description="ecercbeircb"/>
                </div>
                <div className="text-9xl -translate-y-44 text-center">
                    HEALTH.AI
                </div>
                <div className="text-center -translate-y-44">
                    Revolusionising the personal healthcare system
                </div>
                <div className="flex justify-center pt-8 -translate-y-44">
                    <button className="w-48 h-16  border-2 border-green-700 text-green-700 place-self-center rounded-3xl hover:bg-green-700 hover:text-white"
                    onClick={()=>{
                        navigate('/signup')
                    }}>
                        Get Started
                    </button>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Landingpage;