import React from 'react';

interface Inputs {
    name: string;
    description: string;
}
import bg1 from '../assets/images.jpeg'
import bg2 from '../assets/AI-Graph---Chart-Generator.png'
import bg3 from '../assets/sun-pharma-to-launch-mobile-app-to-connect-doctors-and-asthma-patients.jpg.webp'
const features = [
    {
        title: " AI SUmmarization",
        bgImage: bg1,
        description: "Experience an easy understanding of health reports.",
        bgColor: "bg-transparent", // Background color class for Tailwind CSS.
        titleColor: "group-hover:text-lime-900", // Tailwind CSS class for text color change on group hover.
    },
    {
        title: "Management",
        bgImage: bg2,
        description: "Our platform is designed for simplicity and ease.",
        bgColor: "bg-transparent", // Background color class for Tailwind CSS.
        titleColor: "group-hover:text-indigo-400", // Tailwind CSS class for text color change on group hover.
    },
    {
        title: " Connect",
        bgImage: bg3,
        description: "Connect to a psychiatrist via our platform.",
        bgColor: "bg-transparent", // Background color class for Tailwind CSS.
        titleColor: "group-hover:text-fuchsia-600", // Tailwind CSS class for text color change on group hover.
    },
    // Additional feature objects...
];

const Card: React.FC<Inputs> = ({ name, description }) => {
    return (
        <div className='flex h-3/6 gap-6'>
            {
            features.map((feature, index) => (
                <>
                <article
                    className="mx-auto shadow-xl bg-cover bg-center min-h-50 relative border-8 border-black transform duration-500 hover:-translate-y-12 group"
                    style={{backgroundImage: `url('${feature.bgImage}')`}}
                >
                    <div
                    className={`${feature.bgColor} relative h-full group-hover:bg-opacity-0 min-h-50 flex flex-wrap flex-col pt-[30rem] hover:bg-opacity-75 transform duration-300`}
                    >
                    <div
                        className={` ${feature.bgColor} p-8 h-full justify-end flex flex-col`}
                    >
                        <h1
                        className={`text-black font-bold text-2xl text-xl -translate-y-32 transform uppercase group-hover:-translate-y-16 duration-300 ${feature.titleColor}`}
                        >
                        {String(index + 1).padStart(2, "0") + "⏤"} {feature.title}
                        </h1>
                        <p className="opacity-0 text-black text-xl group-hover:opacity-80 group-hover:-translate-y-16 transform duration-500">
                        {feature.description}
                        </p>
                    </div>
                    </div>
                </article>
                </>
            ))
            }


        </div>
    );
};

export default Card;
