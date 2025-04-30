import React from "react";

interface NewsItem {
  title: string;
  time?: string;
  image?: string;
}

interface NewsCategory {
  title: string;
  items: NewsItem[];
}

const NewsSection: React.FC = () => {
  const newsData: NewsCategory[] = [
    {
      title: "राजकारण",
      items: [
        {
          title: "VIDEO: मनोज जारंगे पुन्हा आक्रमक; उपोषणाची तारीख ठरली, मुंबई पुन्हा ठरकणार",
          image: "https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp",
        },
        {
          title: "पवार प्रवृत्तीचं राजकारण थांबू शकतं, भरत पवारांनी फटकारलं...",
          image: "https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp",
        },
        {
          title: "VIDEO: सत्ता जात आहे असं, भारत गव्हाळ यांचं म्हणणं; फडणवीसांनी नाव घेत लाजवले अनेक नेते",
          image: "https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp",
        },
      ],
    },
    {
      title: "मनोरंजन",
      items: [
        {
          title: "लेखा आणि संजय यांचं कुठून भेट झाली होती, अभिनेत्री अमृता फडणवीस म्हणते...",
          image: "https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp",
          time: "3 तासांपूर्वी",
        },
        {
          title: "होणार सून मी ह्या घरची टीमचं गेट-टुगेदर पार्टी",
          image: "https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp",
          time: "1 दिवसापूर्वी",
        },
        {
          title: "अशी ही आशा अम्मीची ही स्टार-स्टडेड संध्याकाळ",
          image: "https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp",
          time: "4 तासांपूर्वी",
        },
      ],
    },
  ];
  

  return (
    
    <div className="bg-gray-100 min-h-screen w-4xl justify-center  left-96 mt-48 max-w-4xl mx-auto p-6">
      {newsData.map((category, index) => (
        <section key={index} className="border-b pb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold border-l-4 border-orange-500 pl-2">
              {category.title}
            </h2>
            <a href="#" className="text-sm text-gray-500 hover:underline">
              सर्व पहा &gt;
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {category.items.map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-2">
                {item.image && (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover rounded"
                  />
                )}
                <p className="text-sm font-medium">{item.title}</p>
                {item.time && <span className="text-xs text-gray-400">{item.time}</span>}
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};


export default NewsSection;
