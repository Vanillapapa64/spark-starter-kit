import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

interface BloodReport {
id: number;
userId: number;
reportDate: string;
hemoglobin: string;
rbcCount: string;
}

const BloodReportChart: React.FC = () => {
    const [bloodReports, setBloodReports] = useState<BloodReport[]>([]);

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


    const reportDates = bloodReports.map((report) => report.reportDate);
    const hemoglobinLevels = bloodReports.map((report) => parseFloat(report.hemoglobin));
    const rbcCounts = bloodReports.map((report) => parseFloat(report.rbcCount));

    const data = {
        labels: reportDates,
        datasets: [
        {
            label: 'Hemoglobin (g/dL)',
            data: hemoglobinLevels,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: true,
        },
        {
            label: 'RBC Count (million cells/uL)',
            data: rbcCounts,
            borderColor: 'rgba(255, 99, 132, 1)',
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            fill: true,
        },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Blood Report Analysis (Hemoglobin and RBC Count)',
        },
        },
    };

    return (
        <div>
            <div className='text-3xl text-center pb-8'>
                Blood Report Charts
            </div>
        
        <Line data={data} options={options} />
        </div>
    );
};

export default BloodReportChart;
