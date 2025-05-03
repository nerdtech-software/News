import React from "react";

const MaharashtraNewsPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-46 ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Breadcrumb */}
        <div className="text-sm text-gray-600 mb-4">
          Home &gt; <span className="text-black font-semibold">Maharashtra</span>
        </div>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Left Side - Main News */}
          <div className="md:col-span-2 space-y-6">
            {/* Section Title */}
            <div className="flex items-center gap-2 border-l-4 border-orange-500 pl-2 text-xl font-bold">
              महाराष्ट्र
            </div>

            {/* Big News Card */}
            <div className="bg-white rounded-md overflow-hidden shadow">
              <img
                src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-First-Cyber-Wellness-Centre_V_jpg--1280x720-4g.webp"
                alt="Main News"
                className="w-full p-4 h-64 object-cover "
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-2">
                  पर्यटकांच्या सुरक्षेसाठी सरकारने उचललं पाऊल; महाराष्ट्र पर्यटन सुरक्षा दलाची स्थापना
                </h2>
                <p className="text-gray-600 text-sm mb-2">
                  Maharashtra Tourism Security Force ची स्थापना पर्यटकाला चालना आणि पर्यटकांच्या सुरक्षिततेला प्राधान्य देण्यासाठी राज्य शासनाने...
                </p>
                <span className="text-xs text-gray-400">3 Mins Ago</span>
              </div>
          

            {/* Small News Cards */}
            <div className="flex justify-center">
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="bg-white rounded-md shadow p-2 w-48">
      <img
        src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
        className="w-full h-36 object-cover rounded"
        alt="News"
      />
      <div>
        <p className="text-sm font-semibold mt-2">मोठी बातमी! 10 लाखांचं प्रकरण अंगावर...</p>
        <span className="text-xs text-gray-400">31 Mins Ago</span>
      </div>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-md shadow p-2 w-48">
      <img
        src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
        className="w-full h-36 object-cover rounded"
        alt="News"
      />
      <div>
        <p className="text-sm font-semibold mt-2">मोठी बातमी! 10 लाखांचं प्रकरण अंगावर...</p>
        <span className="text-xs text-gray-400">31 Mins Ago</span>
      </div>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-md shadow p-2 w-48">
      <img
        src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
        className="w-full h-36 object-cover rounded"
        alt="News"
      />
      <div>
        <p className="text-sm font-semibold mt-2">ST महामंडळाची आर्थिक स्थिती चिंताजनक...</p>
        <span className="text-xs text-gray-400">2 Hours Ago</span>
      </div>
    </div>
  </div>
</div>
  </div>
          </div>

          {/* Right Side - Latest News */}
          <aside>
            {/* Section Title */}
            <div className="flex items-center gap-2 border-l-4 border-orange-500 pl-2 text-xl font-bold mb-4">
              ताजी बातमी
            </div>

            <div className="bg-white rounded-md shadow p-4 space-y-4">
              <div>
                <p className="text-sm font-semibold">
                  शेअर बाजारात तेजी, सेन्सेक्सने 1000 अंकांनी वाढ...
                </p>
                <span className="text-xs text-gray-400">12 Mins Ago</span>
              </div>

              <div>
                <p className="text-sm font-semibold">
                  मुंबई होणार भव ‘वर्ल्ड ऑडिओ क्लिनिकल एंटरटेनमेंट सिटी’...
                </p>
                <span className="text-xs text-gray-400">13 Mins Ago</span>
              </div>
            </div>
          </aside>
        </div>

        {/* Extra Bottom News */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mt-6 w-8/12">
          {[1, 2].map((_, i) => (
            <div key={i} className="bg-white flex gap-3 p-4 rounded-md shadow">
              <img
                src="https://images.letsupp.com/wp-content/uploads/2025/04/Maharashtra-Tourism_V_jpg--1280x720-4g.webp"
                className="w-24 h-16 object-cover rounded"
                alt="News"
              />
              <div>
                <p className="text-sm font-semibold">
                  वडेट्टीवारांच वक्तव्य म्हणजे असंवेदनशील मानसिकतेचा कळस; बावनकुळेंनी ‘त्या’ वक्तव्यावरून फटकारलं विजय वडेट्टीवार यांच्या वक्तव्यामुळे दहशतवाद्यांचा चेहरा झाकण्याचा, त्यांना संरक्षण देण्याचा किळसवाणा प्रयत्न दिसतो. हा केवळ
                </p>
                <span className="text-xs text-gray-400">2 Hours Ago</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MaharashtraNewsPage;
