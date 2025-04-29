import React from 'react';

type NewsItem = {
  title: string;
  timeAgo: string;
};

const latestNews: NewsItem[] = [
  {
    title: 'दहशतवादाकडे धर्म विचारून गोष्टी चालवण्यासाठी वेळ? आधी बादरसर वक्तव्य…आता यू-टर्न',
    timeAgo: '13 Mins Ago',
  },
  {
    title: 'मोठी बातमी! भारतीय लष्कराचा मोठा यश, पहलगाम हल्ल्यालोक सर्व दहशतवाद्यांचं घेराव',
    timeAgo: '27 Mins Ago',
  },
  {
    title: 'बॉलीवूडकून सकळ कलाकारांनी हल्ला...अभिनेतेच एकत्रित वक्तव्य, जाणून घ्या काय आहे सत्य?',
    timeAgo: '2 Hours Ago',
  },
  {
    title: 'पंतप्रधान नरेंद्र मोदी यांचे अज केंद्री मंत्री राजनाथ सिंह यांच्यावर चर्चा; पहलगाम घटनेवर मोठा निर्णय?',
    timeAgo: '3 Hours Ago',
  },
  {
    title: 'तुळजा भवानी मंदिरात दीक्षाभूमी पासवर लष्कराकडून माहिती ; आयडर केल्यावर मिळेल ‘ही’ मागणी',
    timeAgo: '3 Hours Ago',
  },
];

const NewsSidebar: React.FC = () => {
  return (
    <div className="bg-white p-4 border rounded shadow-sm">
      {/* Related News */}
      <div className="mb-6">
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 flex items-center text-black">
          <span className="text-orange-500 mr-2">🔻</span> संबंधित बातम्या
        </h2>
      </div>

      {/* Latest News */}
      <div>
        <h2 className="text-lg font-bold border-b border-gray-300 pb-1 flex items-center text-black">
          <span className="text-orange-500 mr-2">🔻</span> ताजी बातमी
        </h2>
        <ul className="mt-4 space-y-3">
          {latestNews.map((news, idx) => (
            <li key={idx} className="border-b border-gray-200 pb-2">
              <p className="text-black hover:underline cursor-pointer">{news.title}</p>
              <span className="text-xs text-gray-500">{news.timeAgo}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NewsSidebar;
