import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import {marked} from 'marked'
import Sidebar from '../components/Sidebar';
interface VitalData {
    SGOT?: number;
    SGPT?: number;
    GGTP?: number;
    Protein?: number;
    Albumin?: number;
    Globulin?: number;
    hemoglobin?: string;
    packedCellVolume?: string;
    rbcCount?: string;
    mcv?: string;
    lymphocytesDiff?: string;
    lymphocytes?: string;
    date?: string;
    [key: string]: any;
}

const ReportUploader: React.FC = () => {
    const [reportType, setReportType] = useState<'blood' | 'liver'>('blood'); // Default is 'blood'
    const [images, setImages] = useState<File[]>([]);
    const [extractedData, setExtractedData] = useState<VitalData[] | null>(null);
    const [summary, setSummary] = useState<string | null>(null);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setImages(acceptedFiles);
    }, []);

    const { getRootProps, getInputProps } = useDropzone({ onDrop, multiple: true });

    const handleUpload = async () => {
        const formData = new FormData();
        images.forEach((image) => {
            formData.append('image', image);
        });
        const url =
            reportType === 'blood'
                ? 'https://api.navkirat.in/api/v1/user/uploadblood'
                : 'https://api.navkirat.in/api/v1/user/uploadliver';
    
        try {
            const response = await axios.post(url, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            });
            const data: VitalData[] = response.data;
            setExtractedData(data);
            
        } catch (error) {
            console.error('Error uploading and processing images:', error);
        }
    };
        
    const handleInputChange = (index: number, key: string, value: string) => {
        if (extractedData) {
        const updatedData = [...extractedData];
        updatedData[index][key] = value;
        setExtractedData(updatedData);
        }
    };
    const renderSummary = (summary: string | null) => {
        if (!summary) return null;
        const htmlContent = marked(summary);
        return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
    };
    const handleSummarization = async () => {
        
        const dataToSend = extractedData && extractedData.length > 0 ? extractedData[0] : {};
        console.log(dataToSend)
        const url =
        reportType === 'blood'
            ? 'https://api.navkirat.in/api/v1/user/bloodsummarize'
            : 'https://api.navkirat.in/api/v1/user/liversummarize';

        try {
        const response = await axios.post(url,
            dataToSend
        ,{
            headers:{
                Authorization: "Bearer "+ localStorage.getItem("token"),
                'Content-Type': 'application/json',
            }})
        const summary = response.data;
        console.log(summary)
        setSummary(summary);
        } catch (error) {
        console.error('Error during summarization:', error);
        }
    };

    return (
        <div>
            <Sidebar />
            <div className=' translate-x-72'>
            <h2>Select Report Type</h2>
            <label>
                <input
                type="radio"
                value="blood"
                checked={reportType === 'blood'}
                onChange={() => setReportType('blood')}
                />
                Blood Report
            </label>
            <label style={{ marginLeft: '20px' }}>
                <input
                type="radio"
                value="liver"
                checked={reportType === 'liver'}
                onChange={() => setReportType('liver')}
                />
                Liver Report
            </label>

            <div {...getRootProps()} className='bg-sky-500 pb-8' style={{ border: '2px dashed #aaa', padding: '20px', cursor: 'pointer', marginTop: '20px' }}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop one or more images here, or click to select</p>
            </div>
            <div className='pt-8'>
            {images.length > 0 && (
                <div>
                <h3 className='text-2xl pb-4'>Selected Images:</h3>
                <ul className='text-semibold underline decoration-green-700 '>
                    {images.map((image, index) => (
                    <li key={index}>{image.name}</li>
                    ))}
                </ul>
                <div className='p-6 '>
                <button className='rounded-xl border-2 w-48 bg-red-200 p-2' onClick={handleUpload}>Upload and Process</button>
                </div>
                </div>
            )}
            </div>
            {extractedData && (
                <div className='p-4'>
                <h3>Confirm or Edit Extracted Data:</h3>
                {extractedData.map((data, index) => (
                    <div key={index}>
                    <h4>Image {index + 1}:</h4>
                    <form>
                        {Object.entries(data).map(([key, value]) => (
                        <div key={key} style={{ marginBottom: '10px' }}>
                            <label>
                            <strong>{key}:</strong>
                            <input
                                type="text"
                                value={value || ''}
                                onChange={(e) => handleInputChange(index, key, e.target.value)}
                                style={{ marginLeft: '10px', padding: '5px' }}
                            />
                            </label>
                        </div>
                        ))}
                    </form>
                    </div>
                ))}
                <button className='rounded-xl border-2 w-48 bg-red-200 p-2' onClick={handleSummarization} style={{ marginTop: '20px' }}>
                    Summarize All Vitals
                </button>
                </div>
            )}
            <div className='font-medium pt-4'>
                <h1 className='text-2xl pb-2 text-zinc-700'>Summary of the report</h1>
            {renderSummary(summary)}
            </div>
            </div>
        </div>
    );
};

export default ReportUploader;
