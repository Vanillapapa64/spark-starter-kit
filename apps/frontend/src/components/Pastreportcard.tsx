import axios from "axios"
import React from "react"
import { useEffect,useState } from "react";
interface BloodReport {
    id: number;
    userId: number;
    reportDate: string;
    hemoglobin: string;
    rbcCount: string;
    summary:string
}
const Pastreport: React.FC = () =>{
    const [bloodReports, setBloodReports] = useState<BloodReport[]>([]);
    const [expandedIndex, setExpandedIndex] = useState<number|null>(null);

    const toggleExpand = (index:number) => {
        setExpandedIndex(index === expandedIndex ? null : index);
    };
    useEffect(() => {
        const fetchBloodReports = async () => {
        try {
            const response = await fetch('https://api.navkirat.in/api/v1/user/fetchbloodreports',{
                headers:{
                    Authorization: "Bearer "+ localStorage.getItem("token")
                }
            });
            const data = await response.json();
            setBloodReports(data);
        } catch (error) {
            console.error('Error fetching blood reports:', error);
        }
        };

        fetchBloodReports();
    }, []);
    return(
        <div className="grid grid-cols-2 w-3/6 gap-12">
            {bloodReports.map((data,index)=>(
                <div key={data.id} className="col-span-1 ">
                    <div onClick={() => toggleExpand(index)} className=" place-content-center  bg-sky-500  rounded-3xl p-4 cursor-pointer transition-all duration-300 ease-in-out" style={{
                        height: expandedIndex === index ? 'auto' : '220px',  // Adjust based on your fixed content
                        overflow: 'hidden',
                        }}>
                        <div className="p-4"><span className="text-lime-400 text-2xl text-bold pr-4">Report Date:</span> <span>{data.reportDate}</span></div>
                        <div className="p-4"><span className="text-lime-400 text-2xl text-bold pr-4">Hemoglobin:</span> <span>{data.hemoglobin}</span></div>
                        <div className="p-4"><span className="text-lime-400 text-2xl text-bold pr-4">RBC:</span> <span>{data.rbcCount}</span></div>
                        <div
                            className={`transition-all duration-300 ease-in-out ${
                                expandedIndex === index ? 'max-h-fit opacity-100' : 'max-h-0 opacity-0'
                            }`}
                            >
                            <div className="p-4 mt-4">
                                <h3 className="font-bold">Summary:</h3>
                                <p>{data.summary || 'No summary available'}</p>  {/* Show summary or placeholder text */}
                            </div>
                            </div>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Pastreport