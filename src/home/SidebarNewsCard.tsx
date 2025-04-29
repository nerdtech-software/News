interface MainNewsProps {
  image: string;
  title: string;
  description: string;
}
import React from 'react';
       
const  SidebarNewsCard:React.FC<MainNewsProps>=({ image, title, description })=>{
  return (
    <div className="mb-6">
      <img src={image} alt="News" className="rounded-md mb-2" />
      <h3 className="text-blue-700 font-semibold">{title}</h3>
      <p className="text-sm text-black">{description}</p>
    </div>
  );
}
export default SidebarNewsCard;

