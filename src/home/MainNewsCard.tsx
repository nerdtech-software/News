interface MainNewsProps {
  image: string;
  title: string;
  description: string;
  time: string;
}
import React from 'react';
       
const  MainNewsCard:React.FC<MainNewsProps>=({ image, title, description,time })=>{
  return (
    <>    
    <div className="mb-6 flex justify-between bg-white" >
      <img src={image} alt="News" className="rounded-md mb-2 w-52" />
      <div className=' w-96 pl-2'>
      <h3 className="text-blue-700 text-sm font-semibold">{title}</h3>
      <p className="text-sm text-black ">{description}</p>
     <span className="text-gray-500 text-xs">{time}</span>
      </div>
    </div>
    
    </>

  );
}
export default MainNewsCard;
