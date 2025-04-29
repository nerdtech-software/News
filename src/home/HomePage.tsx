import BreakingNewsBar from "./BreakingNewsBar";
import MainNews from "./MainNews";
import MainNewsCard from "./MainNewsCard";
import NewsLayout from "./NewsLayout";
import RightSidebar from "./RightSidebar";
import SidebarNewsCard from "./SidebarNewsCard";

export default function HomePage() {
  return (
    <div className="bg-gray-100 min-h-screen  p-5 rounded-md text-white  w-4xl justify-center max-w-4xl mx-auto mt-40">
      <BreakingNewsBar />

      <div className="container mx-auto p-5 grid grid-cols-1 md:grid-cols-4 gap-6">
        
        {/* Left Sidebar */}
        <div className="md:col-span-1">
          <h2 className="text-orange-600 font-bold mb-4">MARATHI NEWS</h2>
          <SidebarNewsCard 
            image="https://images.letsupp.com/wp-content/uploads/2025/04/rice-midc_V_jpg--1280x720-4g.webp"
            title="विधानसभेत ओमर अब्दुल्ला भाषण"
            description="माफी मागण्यासाठी शब्द नाही अनु..."
          />
          <SidebarNewsCard 
            image="	https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
            title="राजकारण"
            description="पाकिस्तानचे राजकारणी भारतावर टीका करताना..."
          />
          <SidebarNewsCard 
            image="	https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
            title="राजकारण"
            description="पाकिस्तानचे राजकारणी भारतावर टीका करताना..."
          />
          <SidebarNewsCard 
            image="	https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
            title="राजकारण"
            description="पाकिस्तानचे राजकारणी भारतावर टीका करताना..."
          />
        </div>

        {/* Main News */}
       
        <div className="md:col-span-2">
          <MainNews 
            image="https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
            headline="धक्कादायक ! नगरमध्ये बनावट दूधानंतर बनावट 'बासमती' तांदूळ जप्त"
          />
          <MainNewsCard 
        image="	https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
        title="राजकारण"
        description="पाकिस्तानचे राजकारणी भारतावर टीका करताना..."
        time="2025-04-01"/>
          <MainNewsCard 
        image="	https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
        title="राजकारण"
        description="पाकिस्तानचे राजकारणी भारतावर टीका करताना..."
        time="2025-04-01"/>
          <MainNewsCard 
        image="	https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp"
        title="राजकारण"
        description="पाकिस्तानचे राजकारणी भारतावर टीका करताना..."
        time="2025-04-01"/>
        
      
        </div>
       
        {/* Middle Sidebar */}
        

        {/* Right Sidebar */}
        <div className="md:col-span-1">
          <RightSidebar />
          
        </div>
        <div className="md:col-span-1">
          <NewsLayout />
          
        </div>
        

      </div>
    </div>
  );
}
