
const newsData = {
  "विदेश": [
    {
      title: "ऑटो कंपन्यांना सवलत मिळणार? डोनाल्ड ट्रम्प यांचे संकेत, भारतासोबत चर्चा...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "पंतप्रधान मोदींची बैठक संपल्यावर पाकिस्तानला हादरा; पत्रकार परिषद",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "पाकिस्तानात पाणी पेटलं! सिंध शांततेतील लोक रस्त्यावर...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "एका आठवड्यात पाकिस्तानला 70 हजार कोटींचा फटका...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    }
  ],
  "महाराष्ट्र": [
    {
      title: "एकनिष्ठ फक्त! मुंबई पोलिस आयुक्त पदी देवेन्द्र भारती",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "राऊतांचे दावे फोल ठरले; फडणवीस ‘वर्षा’ बंगल्यावर शिफ्ट...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "ज्युनियर डॉक्टरांचा ‘रॅगिंग’ करून पळले महाराष्ट्रात, तीन विद्यार्थी निलंबित",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "Dnyanradha Bank Scam : घोटाळ्यात जॉनसन यांची एन्ट्री...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    }
  ],
  "मुंबई": [
    {
      title: "नावाप्रमाणेच विवेक अनु जाणाऱ्यांसाठी नांगरे पाटलांची खास पोस्ट",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "एकनिष्ठ फक्त! मुंबई पोलिस आयुक्त पदी देवेन्द्र भारती",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "राऊतांचे दावे फोल ठरले; फडणवीस ‘वर्षा’ बंगल्यावर शिफ्ट...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    },
    {
      title: "ज्युनियर डॉक्टरांचा ‘रॅगिंग’ करून पळले महाराष्ट्रात...",
      image: "https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg"
    }
  ]
};

export default function NewsGridLayout() {
  return (
    <>
    <span className="  block border-b-2 border-gray-300 w-3xl "></span>
    <div className="grid grid-cols-1  md:grid-cols-3 gap-10  border-b-2 border-gray-300 w-3xl py-4">
      {Object.entries(newsData).map(([category, newsList]) => (
        <div key={category} className="space-y-4 text-black">
          <h2 className="text-xl font-bold border-l-4 border-orange-500 pl-2">{category}</h2>
          {newsList.map((news, index) => (
            <div key={index} className="flex gap-3 border-b pb-2">
              <img src={news.image} alt={news.title} className="w-28 h-20 object-cover rounded" />
              <p className="text-sm font-bold leading-snug text-black">{news.title}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
      </>
  );
}
