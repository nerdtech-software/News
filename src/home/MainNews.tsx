import React from "react";

interface MainNewsProps {
  image: string;
  headline: string;
}
  const MainNews:React.FC<MainNewsProps>=({ image, headline })=>{
  return (
    <div className="bg-blue-400 p-5 rounded-md text-white mb-6">
      <h2 className="text-2xl font-bold mb-4">{headline}</h2>
      <img src={image} alt="Main News" className="rounded-md" />
    </div>
  );
}
export default MainNews;
