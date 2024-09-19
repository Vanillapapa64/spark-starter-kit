import BloodReportChart from "../components/Graph";
import Navbar from "../components/Navbar";
import Pastreport from "../components/Pastreportcard";
import React from "react";
import { username } from "../atoms/atoms";
import { useRecoilValue } from "recoil";
import Sidebar from "../components/Sidebar";
const Dashboard:React.FC=()=>{
    const user=useRecoilValue
    return(
        <div>
            <Sidebar />
            <div className="translate-x-16">
                <div className="size-3/5 translate-x-1/3 pt-16">
                    <BloodReportChart />
                </div>
                <div className="text-center w-full text-5xl pt-16 pb-8">
                    Past reports
                </div>
                <div className="flex justify-center">
                    <Pastreport />
                </div>
            </div>
        </div>
    )
}
export default Dashboard