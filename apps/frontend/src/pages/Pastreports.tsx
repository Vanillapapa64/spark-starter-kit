import Pastreport from "../components/Pastreportcard"
import Sidebar from "../components/Sidebar"

const Past:React.FC=()=>{
    return(
        <div>
            <Sidebar />
            <div className="pl-72 h-fit">
                <div className="text-6xl text-center p-16">
                    Past reports
                </div>
                <div className="translate-x-96">
                    <Pastreport />
                </div>
                
            </div>
        </div>
    )
}
export default Past