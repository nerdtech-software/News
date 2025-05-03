const obcNews = [
    {
      img: "https://images.letsupp.com/wp-content/uploads/2025/03/Jarange-fadanvis-_V_jpg--1280x720-4g.webp",
      title: "...तर एकाही आमदाराला घराच्या बाहेर फिरू देणार नाही; फडणवीसांचं नाव घेत उघड धमकी",
      desc: "मुंबईला निघणाऱ्या तपासातील एकाही पोऱ्याला धक्का लागला तर तुम्हच्या एकाही आमदाराला...",
    },
    {
      img: "https://images.letsupp.com/wp-content/uploads/2024/11/News-Photo-2024-11-23T223733.357_V_jpg--1280x720-4g.webp",
      title: "VIDEO : मनोज जरांगे पुन्हा अ‍ॅक्टिव्ह; उपोषणाची तारीख ठरली",
      desc: "मराठा आरक्षणाच्या मागणीसाठी मनोज जरंगे यांनी पुन्हा एकदा उपोषणाचं हत्यार उपसलं असून...",
    },
    {
      img: "https://images.letsupp.com/wp-content/uploads/2024/08/Manoj-Jarange-Patil-on-Chhagan-Bhujbal_V_jpg--1280x720-4g.webp",
      title: "‘तू डोनाल्ड ट्रम्प आहे मला काय करायचं’; मनोज जरंगेंचं भुजबळांना थेट उत्तर",
      desc: "तू डोनाल्ड ट्रम्प आहे मला काय करायचं, या शब्दात मनोज जरंगेंनी भुजबळांना फटकारलं...",
    },
    {
      img: "https://images.letsupp.com/wp-content/uploads/2024/11/News-Photo-2024-11-23T223733.357_V_jpg--1280x720-4g.webp",
      title: "VIDEO : मनोज जरांगे पुन्हा अ‍ॅक्टिव्ह; उपोषणाची तारीख ठरली",
      desc: "मराठा आरक्षणाच्या मागणीसाठी मनोज जरंगे यांनी पुन्हा एकदा उपोषणाचं हत्यार उपसलं असून...",
    },
    {
      img: "https://images.letsupp.com/wp-content/uploads/2024/08/Manoj-Jarange-Patil-on-Chhagan-Bhujbal_V_jpg--1280x720-4g.webp",
      title: "‘तू डोनाल्ड ट्रम्प आहे मला काय करायचं’; मनोज जरंगेंचं भुजबळांना थेट उत्तर",
      desc: "तू डोनाल्ड ट्रम्प आहे मला काय करायचं, या शब्दात मनोज जरंगेंनी भुजबळांना फटकारलं...",
    },
  ];
  
  const latestNews = [
    "तरुणांना संघी, राज्यात येणार यांकें आणि ऑस्ट्रेलिया विद्यापीठ",
    "बंधकाम उद्योगात आता बदल घडणार, टाटा स्टीलनं केली घोषणा",
    "उपमुख्यमंत्री पंकजा मुंडेंनी दिली तक्रार; वाचा नक्की काय आहे प्रकरण?",
    "महिला आयोगाची उर्वरित शिफारस अमलात आणण्याची घोषणा",
  ];
  
  const MarathaReservation = () => {
    return (
        <div className="bg-gray-100 min-h-screen pt-48">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
            {/* Main Content */}
            <div className="md:col-span-2 bg-white p-4 shadow rounded">
              <div className="border-b border-gray-500 mb-4 p-2">
                <h2 className="flex items-center gap-2 border-l-4 border-orange-500 pl-2 text-xl font-bold">
                  OBC Reservation
                </h2>
              </div>
              {obcNews.map((item, index) => (
                <div key={index} className="mb-6 flex gap-4">
                  <img
                    src={item.img}
                    alt="news"
                    className="w-40 h-28 object-cover rounded"
                  />
                  <div>
                    <h3 className="font-bold text-black">{item.title}</h3>
                    <p className="text-gray-700 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Sidebar */}
            <aside className="bg-white p-4 shadow rounded">
              <div className="border-b border-gray-500 mb-4 p-2">
                <h2 className="flex items-center gap-2 border-l-4 border-orange-500 pl-2 text-xl font-bold">
                  ताजी बातमी
                </h2>
              </div>
              {latestNews.map((news, i) => (
                <div key={i} className="mb-4">
                  <p className="text-sm font-semibold text-black">{news}</p>
                  <p className="text-xs text-gray-500">23 Mins Ago</p>
                </div>
              ))}
            </aside>
          </div>
        </div>
    );
  };
  
  export default MarathaReservation;
  
