import React from 'react';

// Define the types for the Card props
interface CardProps {
  data: {
    title: string
    summary: string
    image_url: string
    tag: string
  }
}

const Card: React.FC<CardProps> = ({data}) => {
  return (
    <div className="flex flex-row h-[303px] max-w-[1028px] border border-white bg-white py-4 px-4 rounded-lg" style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.25)' }}>
      <img className="w-1/3 h-auto rounded-lg object-cover" src={data.image_url} alt={data.title}/>
      <div className="w-2/3 pl-7 mt-6">
        <div className = "flex flex-row gap-7 text-[#038885] mb-6">
          <p>Innovation </p>
          <p>Project Management</p>
        </div>
        <div className="font-bold text-[#01302F] text-2xl mb-6">{data.title}</div>
        <p className="text-[#383838]">{data.summary}</p>
      </div>
    </div>
  );
};

export default Card;