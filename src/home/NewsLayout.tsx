export default function NewsLayout() {
  const newsData = {
    sidebar: [
      { id: 1, title: "पाकिस्तानचा ड्रोन बाचवला, नालासोपारा पोलिसांनी..", image: "https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp" },
      { id: 2, title: "शिवसेना गटातील संघर्षामुळे राजकीय वातावरण तापले..", image: "https://images.letsupp.com/wp-content/uploads/2025/04/News-Photo-2025-04-28T135329.282_V_jpg--1280x720-4g.webp" },
      { id: 1, title: "पाकिस्तानचा ड्रोन बाचवला, नालासोपारा पोलिसांनी..", image: "https://images.letsupp.com/wp-content/uploads/2025/04/Kirit-Somaiya-2_V_jpg--1280x720-4g.webp" },
      { id: 2, title: "शिवसेना गटातील संघर्षामुळे राजकीय वातावरण तापले..", image: "https://images.letsupp.com/wp-content/uploads/2025/04/News-Photo-2025-04-28T135329.282_V_jpg--1280x720-4g.webp" },
      // Add more items here...
    ],
    center: {
      title: "धक्कादायक! नगरमध्ये बनावट बासमती तांदूळ...",
      image: "https://images.letsupp.com/wp-content/uploads/2025/04/rice-midc_V_jpg--1280x720-4g.webp",
      time: "3 Hours Ago"
    },
    right: [
      { id: 1, title: "भाजप प्रोपगंडा चालवतोय, AIMIMचे प्रमुख ओवैसी..", image: "https://images.letsupp.com/wp-content/uploads/2025/04/Pakistan-Youtube-Channels-1_V_jpg--1280x720-4g.webp" },
      { id: 2, title: "मुंबई-कोलकाता राष्ट्रीय महामार्गावर अपघात...", image: "https://images.letsupp.com/wp-content/uploads/2025/04/News-Photo-2025-04-28T074003.296_V_jpg--1280x720-4g.webp" },
      // Add more items here...
    ]
  };
  
  return (
    <>
    <span className="block border-b-2 border-gray-300 w-3xl"></span>



    <div className="gap-6  bg-gray-100   left-40 rounded-md text-gray-800">

      {/* Top Navigation Links */}
      <div className="flex gap-10 text-sm w-5xl pl-24 p-2 font-semibold text-gray-700">
        <span className="cursor-pointer">उत्तर महाराष्ट्र</span>
        <span className="cursor-pointer">कोकण</span>
        <span className="cursor-pointer">पश्चिम महाराष्ट्र</span>
        <span className="cursor-pointer">मराठवाडा</span>
        <span className="cursor-pointer">विदर्भ</span>
      </div>

      {/* Main Section */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Left Sidebar */}
        <div className="flex-1 min-w-[240px] space-y-4">
          <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-2">महाराष्ट्र</h2>
          {/* Sidebar News Cards */}
          <div className="space-y-4">
            {newsData.sidebar.map(news => (
              <div key={news.id} className="flex gap-3">
                <img src={news.image} className="w-24 h-16 object-cover rounded" />
                <p className="text-sm font-medium">{news.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Center Big News */}
        <div className="flex-1 min-w-[240px] space-y-4">
          <img 
            src={newsData.center.image} 
            className="w-full h-auto object-cover rounded" 
            alt="Center News" 
          />
          <h2 className="font-bold text-lg">{newsData.center.title}</h2>
          <p className="text-xs text-gray-500">{newsData.center.time}</p>
        </div>

        {/* Right Side News */}
        <div className="flex-1 min-w-[240px] space-y-4">
          <div className="space-y-4">
            {newsData.right.map(news => (
              <div key={news.id} className="flex flex-col gap-2">
                <img src={news.image} className="w-full h-32 object-cover rounded" />
                <p className="text-sm font-semibold">{news.title}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Sports Section */}
      <div className="mt-8">
        <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-2"></h2>
      </div>
      {/* <span className="block border-b-2 p-2 border-gray-300 w-3xl"></span> */}

    </div>
    </>
  );
}
