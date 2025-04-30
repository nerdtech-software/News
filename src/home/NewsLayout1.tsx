export default function NewsLayout1() {
  const newsData = {
    sidebar: [
      {
        id: 1,
        title: "पाकिस्तानचा ड्रोन बाचवला, नालासोपारा पोलिसांनी..",
        image:
          "https://images.letsupp.com/wp-content/uploads/2025/04/rice-midc_V_jpg--1280x720-4g.webp",
      },
      {
        id: 2,
        title: "शिवसेना गटातील संघर्षामुळे राजकीय वातावरण तापले..",
        image:
          "https://images.letsupp.com/wp-content/uploads/2025/04/News-Photo-2025-04-28T135329.282_V_jpg--1280x720-4g.webp",
      },
    ],
    center: [
      {
      title: "धक्कादायक! नगरमध्ये बनावट बासमती तांदूळ...",
      image:
        "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
      time: "3 Hours Ago",
    },
    {
      title: "धक्कादायक! नगरमध्ये बनावट बासमती तांदूळ...",
      image:
        "https://images.letsupp.com/wp-content/uploads/2025/04/rice-midc_V_jpg--1280x720-4g.webp",
      time: "3 Hours Ago",
    },],
    
    right: [
      {
        id: 1,
        title: "भाजप प्रोपगंडा चालवतोय, AIMIMचे प्रमुख ओवैसी..",
        image:
          "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg",
      },
      {
        id: 2,
        title: "मुंबई-कोलकाता राष्ट्रीय महामार्गावर अपघात...",
        image:
          "https://images.letsupp.com/wp-content/uploads/2025/04/News-Photo-2025-04-28T074003.296_V_jpg--1280x720-4g.webp",
      },
    ],
  };

  return (
    <>
      <span className="block border-b-2 border-gray-300 w-3xl"></span>

      <div className="gap-6 bg-gray-100  left-40 rounded-md text-gray-800 p-4">
        {/* Top Navigation Links */}
        

        {/* Main Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Left Sidebar */}
          <div className="flex-1 min-w-[240px] space-y-4">
            <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-2">
            विदेश
            </h2>
            
            <div className="space-y-4">
              {newsData.sidebar.map((news, idx) => (
                <div key={idx} className="flex gap-3">
                  <img
                    src={news.image}
                    className="w-24 h-16 object-cover rounded"
                    alt={news.title}
                  />
                  <p className="text-sm font-medium">{news.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Center Big News */}
          <div className="flex-1 min-w-[240px] space-y-4">
  {newsData.center.map((news, index) => (
    <div key={index} className="space-y-2">
      <img
        src={news.image}
        className="w-full h-auto object-cover rounded"
        alt={news.title}
      />
      <h2 className="font-bold text-lg">{news.title}</h2>
      <p className="text-xs text-gray-500">{news.time}</p>
    </div>
  ))}
</div>


          {/* Right Side News */}
          <div className="flex-1 min-w-[240px] space-y-4">
            <div className="space-y-4">
              {newsData.right.map((news, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <img
                    src={news.image}
                    className="w-full h-32 object-cover rounded"
                    alt={news.title}
                  />
                  <p className="text-sm font-semibold">{news.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Optional Future Section (Currently not adding extra space) */}
        {/* <div className="mt-8">
          <h2 className="text-lg font-bold border-l-4 border-orange-500 pl-2">स्पोर्ट्स</h2>
        </div> */}
      </div>
    </>
  );
}
