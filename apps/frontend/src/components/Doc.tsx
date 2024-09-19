import { useState,useEffect } from "react";
interface Feel{
    textid: number;
    docid: number;
    text: string;
    useremail: string;
}
const Doc:React.FC=()=>{
    const [feel, setfeel] = useState<Feel[]>([]);
    useEffect(() => {
        const fetchtext = async () => {
        try {
            const response = await fetch('https://api.navkirat.in/api/v1/doc/fetchtexts',{
                headers:{
                    Authorization: "Bearer "+ localStorage.getItem("token")
                }
            });
            const data = await response.json();
            setfeel(data);
        } catch (error) {
            console.error('Error fetching blood reports:', error);
        }
        };

        fetchtext();
    }, []);
    return(
        <div className="grid grid-cols-2 w-3/6 gap-12">
            {feel.map((data)=>(
                <div key={data.textid} className="col-span-1 border-2 bg-stone-500 p-6 rounded-3xl">
                    <div>
                        {data.text}
                    </div>
                    <div>
                        Email: {data.useremail}
                    </div>
                </div>
            ))}
        </div>
    )
}
export default Doc